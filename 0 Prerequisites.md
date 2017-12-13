# Before you start

You need to make sure you have a suitable development environment. We can use Minikube to run Kubernetes locally for local development.

## Minikube
[Minikube](https://github.com/kubernetes/minikube)

```
brew cask install minikube
```

## Install Kubernetes
If running locally you will need `kubectl` in order to be able to manage the environment. You can either download it from the [Github Release page](https://github.com/kubernetes/kubernetes/releases) or install it via homebrew:
```
brew install kubernetes-cli
```

## VMWare / VirtualBox
You will also need VirtualBox or VMWare to allow Minikube to create a Virtual Machine.
