# Create a Kubernetes Cluster

The following will create a cluster with 3 worker nodes.
```
gcloud container clusters create cluster1 \
  --zone europe-west2-b \
  --enable-cloud-logging \
  --enable-cloud-monitoring \
  --num-nodes 3 \
  --cluster-version=1.6.4
```
You can actually omit most of the parameters, the only required ones are cluster name (_cluster1_) and zone (_europe-west2-b_), but it's worth specifying the number of nodes.

```
Creating cluster cluster1...done.
Created [https://container.googleapis.com/v1/projects/kube-101/zones/europe-west2-b/clusters/cluster1].
kubeconfig entry generated for cluster1.
NAME      ZONE            MASTER_VERSION  MASTER_IP      MACHINE_TYPE   NODE_VERSION  NUM_NODES  STATUS
cluster1  europe-west2-b  1.6.4           35.189.69.207  n1-standard-1  1.6.4         3          RUNNING
```

# Set the default cluster

```
gcloud config set container/cluster cluster1
```

# Setup kubectl
```
gcloud container clusters get-credentials cluster1
kubectl config set-context cluster1
```

# Proxy requests to the cluster
```
kubectl proxy --port=8080
```
Open http://localhost:8080/ui in your browser to access the Kubernetes UI. Ta da !

![Kubernetes Dashboard][dashboard]

[dashboard]: dashboard.png "Kubernetes Dashboard"
