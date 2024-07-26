location_dev=us-central1-docker.pkg.dev
project_dev=frontend-technical
repo_dev=technical-app
image_dev=frontend-technical-v2

location_prod=us-central1-docker.pkg.dev
project_prod=frontend-technical-prod
repo_prod=technical-app-prod
image_prod=frontend-technical-prod


.PHONY: build tag push deploy all

build-dev:
	docker buildx build --platform linux/amd64 -t ${location_dev}/${project_dev}/${repo_dev}/${image_dev}:latest .

tag-dev:
	docker tag ${location_dev}/${project_dev}/${repo_dev}/${image_dev}:latest ${location_dev}/${project_dev}/${repo_dev}/${image_dev}:$(shell git rev-parse --short HEAD)

push-dev:
	docker push ${location_dev}/${project_dev}/${repo_dev}/${image_dev}:latest
	docker push ${location_dev}/${project_dev}/${repo_dev}/${image_dev}:$(shell git rev-parse --short HEAD)

service_yml-dev:
	sed -i 's|image: .*-docker.pkg.dev/.*|image: ${location_dev}/${project_dev}/${repo_dev}/${image_dev}:latest|g' service-dev.yml 

deploy-dev:
	gcloud run deploy technical-app --region us-central1 --platform managed --allow-unauthenticated


local_run:
	docker run -p 3000:3000 ${location_dev}/${project_dev}/${repo_dev}/${image}:latest

all-dev: build-dev tag-dev push-dev service_yml-dev deploy-dev


build-prod:
	docker buildx build --platform linux/amd64 -t ${location_prod}/${project_prod}/${repo_prod}/${image_prod}:latest .

tag-prod:
	docker tag ${location_prod}/${project_prod}/${repo_prod}/${image_prod}:latest ${location_prod}/${project_prod}/${repo_prod}/${image_prod}:$(shell git rev-parse --short HEAD)

push-prod:
	docker push ${location_prod}/${project_prod}/${repo_prod}/${image_prod}:latest
	docker push ${location_prod}/${project_prod}/${repo_prod}/${image_prod}:$(shell git rev-parse --short HEAD)

service_yml-prod:
	sed -i 's|image: .*-docker.pkg.dev/.*|image: ${location_prod}/${project_prod}/${repo_prod}/${image_prod}:latest|g' service-prod.yml 

deploy-prod:
	gcloud run deploy technical-app-prod --region us-central1 --platform managed --allow-unauthenticated


local_run-prod:
	docker run -p 3000:3000 ${location_prod}/${project_prod}/${repo_prod}/${image_prod}:latest

all-prod: build-prod tag-prod push-prod service_yml-prod deploy-prod
