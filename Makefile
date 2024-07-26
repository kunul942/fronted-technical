location=us-central1-docker.pkg.dev
project=frontend-technical
repo=technical-app
image=frontend-technical-v2

location=us_central1-docker.pkg.dev
project=frontend-technical-prod
repo=technical-app-prod
image=frontend-technical-v2-prod


.PHONY: build tag push deploy all

build-dev:
	docker buildx build --platform linux/amd64 -t ${location}/${project}/${repo}/${image}:latest .

tag-dev:
	docker tag ${location}/${project}/${repo}/${image}:latest ${location}/${project}/${repo}/${image}:$(shell git rev-parse --short HEAD)

push-dev:
	docker push ${location}/${project}/${repo}/${image}:latest
	docker push ${location}/${project}/${repo}/${image}:$(shell git rev-parse --short HEAD)

service_yml-dev:
	sed -i 's|image: .*-docker.pkg.dev/.*|image: ${location}/${project}/${repo}/${image}:latest|g' service.yml 

deploy-dev:
	gcloud run deploy technical-app --region us-central1 --platform managed --allow-unauthenticated --source .


local_run:
	docker run -p 3000:3000 ${location}/${project}/${repo}/${image}:latest

all-dev: build-dev tag-dev push-dev service_yml-dev deploy-dev


build-prod:
	docker buildx build --platform linux/amd64 -t ${location}/${project}/${repo}/${image}:latest .

tag-prod:
	docker tag ${location}/${project}/${repo}/${image}:latest ${location}/${project}/${repo}/${image}:$(shell git rev-parse --short HEAD)

push-prod:
	docker push ${location}/${project}/${repo}/${image}:latest
	docker push ${location}/${project}/${repo}/${image}:$(shell git rev-parse --short HEAD)

service_yml-prod:
	sed -i 's|image: .*-docker.pkg.dev/.*|image: ${location}/${project}/${repo}/${image}:latest|g' service.yml 

deploy-prod:
	gcloud run deploy technical-app --region us-central1 --platform managed --allow-unauthenticated --source .


local_run:
	docker run -p 3000:3000 ${location}/${project}/${repo}/${image}:latest

all-prod: build-dev tag-dev push-dev service_yml-dev deploy-dev
