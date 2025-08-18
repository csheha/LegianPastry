export BUILD_ENV="production"
echo "building front end application env $BUILD_ENV"
#nvm use v14.21.3

if [ "$1" == "front" ]; then
    cd ../frontend
    echo "building front end docker image.."
    docker build -t legianpastry-react .
fi

if [ "$2" == "back" ]; then
    cd ../backend
    echo "building back end docker image.."
    docker build -t legianpastry-app .
fi

#cd ../report_service
#echo "building report service docker image.."
#docker build -t report_service .

#cd ../../jsonjasperpdf
#echo "building jsonpdf docker image.."
#docker build  -t jsonpdf .

cd ../deployment
echo "completed building and creating docker images"
echo "================================================================"
echo "execute ./push_to_docker_repo.sh after this build is verified"

