IMAGE_APP=legianpastry-app
IMAGE=legianpastry-react

echo "login to docker repo..."
#echo "enter password for docker repository "$DOCKER_HOST
echo "$PASSWORD" | docker login --username=$DOCKER_USER $DOCKER_HOST --password-stdin

echo "pushing legianpastry-react:latest to docker repo.."
docker tag $IMAGE:latest $DOCKER_HOST/$DOCKER_USER/$IMAGE:latest

if [ "$1" == "front" ]; then
  docker push $DOCKER_HOST/$DOCKER_USER/$IMAGE:latest
fi

echo "pushing legianpastry-app:latest to docker repo.."
docker tag $IMAGE_APP:latest $DOCKER_HOST/$DOCKER_USER/$IMAGE_APP:latest

if [ "$1" == "back" ]; then
  docker push $DOCKER_HOST/$DOCKER_USER/$IMAGE_APP:latest
fi


echo "completed pushing to repo.."
echo "================================================================"
echo "login to hosting site"
echo "[cd legianpastry/deploy]"
echo "[run ./build-remote.sh]"


