# Makefile for building and deploying Next.js app to Cloud Run

# Variables
PROJECT_ID := frontend-technical
REGION := us-central1
REPO_NAME := technical-app
ARTIFACT_REGISTRY_REPO := us-central1-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/frontend-technical-v2

# Commands
build:
	docker build -t frontend-technical:latest .

tag:
	docker tag frontend-technical:latest $(ARTIFACT_REGISTRY_REPO)/$(REPO_NAME):latest

push:
	docker push $(ARTIFACT_REGISTRY_REPO)/$(REPO_NAME):latest

deploy:
	gcloud run deploy $(REPO_NAME) \
	  --region $(REGION) \
	  --image $(ARTIFACT_REGISTRY_REPO)/$(REPO_NAME):latest \
	  --platform managed \
	  --allow-unauthenticated

all: build tag push deploy
