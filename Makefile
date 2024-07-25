


location=us-central1-docker.pkg.dev
project=frontend-technical
repo=technical-app
image=frontend-technical-v2

.PHONY: build tag push deploy all

build:
	docker buildx build --platform linux/amd64 -t ${location}/${project}/${repo}/${image}:latest .

tag:
	docker tag ${location}/${project}/${repo}/${image}:latest ${location}/${project}/${repo}/${image}:$(shell git rev-parse --short HEAD)

push:
	docker push ${location}/${project}/${repo}/${image}:latest
	docker push ${location}/${project}/${repo}/${image}:$(shell git rev-parse --short HEAD)

deploy:
	gcloud run deploy technical-app --image ${location}/${project}/${repo}/${image}:latest --region us-east4 --platform managed --allow-unauthenticated
# gcloud run services replace service.yml --region us-central1

local_run:
	docker run -p 3000:3000 ${location}/${project}/${repo}/${image}:latest

all: build tag push deploy
