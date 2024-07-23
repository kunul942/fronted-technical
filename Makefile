# # Makefile for building and deploying Next.js app to Cloud Run

# # Variables
# PROJECT_ID := frontend-technical
# REGION := us-central1
# REPO_NAME := technical-app
# ARTIFACT_REGISTRY_REPO := us-central1-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/frontend-technical-v2

# # Commands
# build:
# 	docker build -t frontend-technical:latest .

# tag:
# 	docker tag frontend-technical:latest $(ARTIFACT_REGISTRY_REPO)/$(REPO_NAME):latest

# push:
# 	docker push $(ARTIFACT_REGISTRY_REPO)

# deploy:
# 	gcloud run deploy $(REPO_NAME) \
# 	  --region $(REGION) \
# 	  --image $(ARTIFACT_REGISTRY_REPO)/$(REPO_NAME):latest \
# 	  --platform managed \
# 	  --allow-unauthenticated

# all: build tag push deploy


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
	gcloud run services replace service.yml --region us-central1

local_run:
	docker run -p 3000:3000 ${location}/${project}/${repo}/${image}:latest

all: build tag push deploy
