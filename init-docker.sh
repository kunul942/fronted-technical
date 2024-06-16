# Build docker image
docker build -t frontend-technical .

# Run image in the docker container 
docker container run -p 3000:3000 frontend-technical
