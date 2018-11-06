# Creating your environment

If you are using VirtualBox then start minikube with:
```
minikube start --insecure-registry=docker.yakov.io:5000
```

If you are using VMWare then you'll need to specify an additional parameter:
```
minikube start --insecure-registry=docker.yakov.io:5000 --vm-driver vmwarefusion
```

If you are using [Hyperkit](https://github.com/kubernetes/minikube/blob/master/docs/drivers.md#hyperkit-driver) then you'll need to specify an additional parameter:
```
minikube start --insecure-registry=docker.yakov.io:5000 --vm-driver hyperkit
```

The above command will spin up a local kubernetes environment. This will be the output.

```
Starting local Kubernetes v1.8.0 cluster...
Starting VM...
Getting VM IP address...
Moving files into cluster...
Setting up certs...
Connecting to cluster...
Setting up kubeconfig...
Starting cluster components...
Kubectl is now configured to use the cluster.
```

Running `kubectl get po --all-namespaces` should return you a list of pods running on Kubernetes.

# Kubernetes UI
Enter the following:
```
minikube dashboard
```
This will give you access to the Kubernetes UI, which will look somewhat like this:
![Kubernetes Dashboard][dashboard]
 Ta da !

[dashboard]: dashboard.png "Kubernetes Dashboard"
