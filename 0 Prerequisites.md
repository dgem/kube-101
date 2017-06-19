# Before you start

You need to make sure you have a suitable development environment. You have a couple of choices here:
* Install everything locally
* Use Google's Cloud Console


## Google's Cloud Console
This is built into the [Google Cloud Platform dashboard](https://console.cloud.google.com/home/dashboard).

## Install the Google Cloud SDK
You can install the Cloud SDK from: https://cloud.google.com/sdk/docs/quickstart-mac-os-x

Alternatively install using homebrew:
```
brew cask install google-cloud-sdk
```


## Install Kubernetes
If running locally you will need `kubectl` in order to be able to manage the environment. You can either download it from the [Github Release page](https://github.com/kubernetes/kubernetes/releases) or install it via homebrew:
```
brew install kubernetes-cli
```


# Setup billing
You will need to setup a billing account. This requires a credit card, currently there are free credits available for new sign-ups.
Goto : https://console.cloud.google.com/billing and follow the on screen instructions

**Remember to shutdown the cluster when you're done to avoid being charged**
