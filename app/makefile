
all = .build .tag .push
project = kube-101
app = kube-101-app

default: $(all)
	@echo finished

.build:
	docker build -t ${project} .

.tag:
	docker tag ${project} eu.gcr.io/${project}/${app}

.push:
	gcloud docker -- push eu.gcr.io/${project}/${app}
