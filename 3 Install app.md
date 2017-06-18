# Installing a simple node


## Deployment
* cd into the `app` directory
* run `make`
* run 'kubectl apply -f deployment.yaml'

Your app is now deployed, use `kubectl proxy` again to access the Kubernetes UI and find you app.

_**Note** At this point in time the app won't be available on the internet_

## Exposing the app

* run `kubectl apply -f service.yaml`

Again, fire up `kubectl proxy` and navigate to the service. Once it's created you should see an external IP address. You can then then call the /ready probe and should get an `OK` response.
