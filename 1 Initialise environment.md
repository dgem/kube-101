# Initialise the G-Cloud SDK
```
gcloud init
```
During the initalisation process you will need to logon, when asked create a project called `kube-101`
```
Welcome! This command will take you through the configuration of gcloud.

Your current configuration has been set to: [default]

You can skip diagnostics next time by using the following flag:
  gcloud init --skip-diagnostics

Network diagnostic detects and fixes local network connection issues.
Checking network connection...done.
Reachability Check passed.
Network diagnostic (1/1 checks) passed.

You must log in to continue. Would you like to log in (Y/n)?  Y

Your browser has been opened to visit:

You are logged in as: [****@****].

This account has no projects.

Would you like to create one? (Y/n)?  Y

Enter a Project ID. Note that a Project ID CANNOT be changed later.
Project IDs must be 6-30 characters (lowercase ASCII, digits, or
hyphens) in length and start with a lowercase letter. kube-101

# Enable Google APIs
1. Goto https://console.developers.google.com/project/kube-101/settings and enable billing for the project
2. Goto https://console.cloud.google.com/apis/api/container.googleapis.com/overview?project=kube-101 and click `Enable`
3. Goto https://console.developers.google.com/apis/api/compute-component.googleapis.com/overview?project=kube-101 and click 'Enable'


# Set the default zone
```
gcloud config set compute/zone europe-west2-b
```
