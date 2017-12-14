# Exposing a simple node app

## Enable the ingress addon
In order to expose services outside of the virtual machine you need to enable minikube's ingress addon:
```
minikube addons enable ingress
```

## Add a DNS name to kubeapp.local
The `ingress.yaml` exposes the app on a host called `kubeapp.local`. This means you will need to add an entry in the `hosts` file of your machine. On OSX you can:
```
sudo -s
vi /etc/hosts
```
Navigate to the last line and press `Shift-A`, which should place it in append more.
Press `⏎` and add a new line similar to the following:
```
192.168.99.100 kubeapp.local
```
_**NB:** Your IP address might be different, it will be the IP address shown in the address bar of the Kubernetes UI / dashboard._

## Create a services
```
kubectl apply -f service.yaml
```

## Create an ingress
```
kubectl apply -f ingress.yaml
```

## Test it
You should now be able to ping the health endpoints:
* http://kubeapp.local/alive
* http://kubeapp.local/ready

Accessing any other URL, including `/` should result in a "Hello world" message.
