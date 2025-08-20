#!/bin/bash

DOCKER_HOST=docker.io
IMAGE_APP=legianpastry-app
IMAGE=legianpastry-react

echo "Logging in to Docker Hub..."
echo "$DOCKER_PASSWORD" | docker login --username "$DOCKER_USERNAME" --password-stdin $DOCKER_HOST

echo "Pushing frontend image..."
docker tag $IMAGE:latest $DOCKER_USERNAME/$IMAGE:latest
docker tag $IMAGE:latest $DOCKER_USERNAME/$IMAGE:$SHORT_SHA

if [ "$1" == "front" ]; then
  docker push $DOCKER_USERNAME/$IMAGE:latest
  docker push $DOCKER_USERNAME/$IMAGE:$SHORT_SHA
fi

echo "Pushing backend image..."
docker tag $IMAGE_APP:latest $DOCKER_USERNAME/$IMAGE_APP:latest
docker tag $IMAGE_APP:latest $DOCKER_USERNAME/$IMAGE_APP:$SHORT_SHA

if [ "$2" == "back" ]; then
  docker push $DOCKER_USERNAME/$IMAGE_APP:latest
  docker push $DOCKER_USERNAME/$IMAGE_APP:$SHORT_SHA
fi

echo "Completed pushing to Docker Hub ✅"
