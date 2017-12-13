# Creating your environment
```
minikube start
```

The above command will spin up a local kubernetes environment. This will be the output.

```
Starting local Kubernetes v1.7.5 cluster...
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
This will give you access to the Kubernetes UI. Ta da !

```
minikube dashboard
```

![Kubernetes Dashboard][dashboard]

[dashboard]: dashboard.png "Kubernetes Dashboard"
