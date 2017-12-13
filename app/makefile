
all = .build .tag .push
project = kube-101
app = kube-101-app

default: $(all)
	@echo finished

.build:
	docker build -t ${project} .

.tag:
	docker tag ${project} docker.yakov.io:5000/${project}/${app}

.push:
	docker push docker.yakov.io:5000/${project}/${app}
