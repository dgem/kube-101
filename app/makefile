
all = .build .tag .push
project = kube-102
app = kube-101-app

default: $(all)
	@echo finished

.build:
	docker build -t kube-101 .

.tag:
	docker tag kube-101 eu.gcr.io/${project}/${app}

.push:
	gcloud docker -- push eu.gcr.io/${project}/${app}
