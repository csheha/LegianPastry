DOCKER_HOST=docker.io   # Docker Hub registry
IMAGE_APP=legianpastry-app
IMAGE=legianpastry-react

echo "login to docker repo..."
#echo "enter password for docker repository "$DOCKER_HOST
echo "$DOCKER_PASSWORD" | docker login --username=$DOCKER_USERNAME --password-stdin $DOCKER_HOST

echo "Pushing frontend image to docker repo.."
docker tag $IMAGE:latest $DOCKER_USERNAME/$IMAGE:latest
docker tag $IMAGE:latest $DOCKER_USERNAME/$IMAGE:$GITHUB_SHA

if [ "$1" == "front" ]; then
  docker push $DOCKER_USERNAME/$IMAGE:latest
  docker push $DOCKER_USERNAME/$IMAGE:$GITHUB_SHA
fi

echo "Pushing backend image..."
docker tag $IMAGE_APP:latest $DOCKER_USERNAME/$IMAGE_APP:latest
docker tag $IMAGE_APP:latest $DOCKER_USERNAME/$IMAGE_APP:$GITHUB_SHA

if [ "$2" == "back" ]; then
  docker push $DOCKER_USERNAME/$IMAGE_APP:latest
  docker push $DOCKER_USERNAME/$IMAGE_APP:$GITHUB_SHA
fi

echo "Completed pushing to Docker Hub "
echo "================================================================"
echo "login to hosting site"
echo "[cd legianpastry/deployment]"
echo "[run ./build-remote.sh]"
