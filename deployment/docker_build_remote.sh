#!/bin/bash
export DOCKER_REPO=docker.siyothsoft.com
export DOCKER_VM_IP=''
export DOCKER_USER=siyothsoft
PASSWORD=password1

echo "enter password for docker repository "$DOCKER_REPO
docker login --username=$DOCKER_USER $DOCKER_REPO -p $PASSWORD

echo "[docker-compose down]"
docker-compose down

echo "[docker image rm -f "$DOCKER_REPO"/legianpastry-react:latest]"
docker image rm -f $DOCKER_REPO/legianpastry-react:latest

echo "[docker image rm -f "$DOCKER_REPO"/legianpastry-app:latest]"
#docker image rm -f $DOCKER_REPO/legianpastry-app:latest

docker compose up -d

#cd ../kong/nginx/
#docker-compose restart
#cd ../../hotel

#echo "deployment complete....."