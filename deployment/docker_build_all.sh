export BUILD_ENV="production"
echo "building front end application env $BUILD_ENV"
#nvm use v14.21.3

if [ "$1" == "front" ]; then
    cd ../frontend
    echo "building front end docker image.."
    docker build -t cshehani/legianpastry-react $GITHUB_WORKSPACE/frontend
fi

if [ "$2" == "back" ]; then
    cd ../backend
    echo "building back end docker image.."
    docker build -t cshehani/legianpastry-app $GITHUB_WORKSPACE/frontend
fi


cd ../deployment
echo "completed building and creating docker images"
echo "================================================================"
echo "execute ./push_to_docker.sh after this build is verified"

