# Installing a simple node app


## Deployment
* cd into the `app` directory
* run `make`
* run 'kubectl apply -f deployment.yaml'

Your app is now deployed, use `kubectl proxy` again to access the Kubernetes UI and find you app.

_**Note** At this point in time the app won't be available on the internet_

Use the Kubernetes UI / Dashboard to see what's been deploy and check the logs of the app, you should see something similar to:
