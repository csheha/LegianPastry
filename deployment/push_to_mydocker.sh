
IMAGE_APP=legianpastry-app
IMAGE=legianpastry-react

echo "login to docker repo..."
#echo "enter password for docker repository "$DOCKER_HOST
echo "$DOCKER_PASSWORD" | docker login --username=$DOCKER_USERNAME --password-stdin

echo "pushing cshehani/legianpastry-react:latest to docker repo.."
docker tag $IMAGE:latest $DOCKER_USERNAME/$IMAGE:latest

if [ "$1" == "front" ]; then
  docker push $DOCKER_USERNAME/$IMAGE:latest
fi

echo "pushing cshehani/legianpastry-app:latest to docker repo.."
docker tag $IMAGE_APP:latest $DOCKER_USERNAME/$IMAGE_APP:latest

if [ "$2" == "back" ]; then
  docker push $DOCKER_USERNAME/$IMAGE_APP:latest
fi

echo "completed pushing to repo.."
echo "================================================================"
echo "login to hosting site"
echo "[cd legianpastry/deployment]"
echo "[run ./build-remote.sh]"
