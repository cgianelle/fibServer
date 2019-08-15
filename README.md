# Fibonacci
This is a little fibonacci server that I threw together so that I could explore the world of kubernetes. I have, at the moment, a 3 node cluster with an Ubuntu 18.04 laptop running as my master and 2 Raspberry Pi 3B+ devices running Hypriot v1.10.0-rc1 configured as my minions.

## REST API
~~~~
/fibonacci?term=<number>
~~~~
### Examples
~~~~
/fibonacci?term=5
{"term":"5","value":5}
~~~~
~~~~
/fibonacci?term=20
{"term":"20","value":6765}
~~~~

## Docker Stuff
### Build Ubuntu Image
~~~~
docker image build -t cgianelle1976/fibonacci:1.0 .
~~~~
### Build Raspberry PI Image
Note: This is an arm32 image and can only be built on the Raspberry PI itself
Note2: This image also has to be pushed to dockerhub from the Raspberry PI
~~~~
docker image build -t cgianelle1976/fibonacci:arm32-1.0 -f arm.Dockerfile .
~~~~
### Run Container
~~~~
docker container run -p 3184:3184 -d --name fibServer cgianelle1976/fibonacci:1.0
~~~~
### Tag Image
~~~~
docker image tag cgianelle1976/fibonacci:1.0 cgianelle1976/fibonacci:latest
~~~~
### Push Image
~~~~
docker login
docker image push cgianelle1976/fibonacci:1.0
~~~~

## Kubernetes Stuff
### Create Pod
~~~~
kubectl create -f deployment/fibServer.yml
~~~~

### Secrets
~~~~
# fibServer # kubectl exec fibserver-deployment-668f6d94cb-7fkdj -- sh -c "ls /etc/foo"
my-first-name
my-last-name
# kubectl exec fibserver-deployment-668f6d94cb-7fkdj -- sh -c "cat /etc/foo/my-first-name"
Chris
# kubectl exec fibserver-deployment-668f6d94cb-7fkdj -- sh -c "cat /etc/foo/my-last-name"
Gianelle
 # kubectl exec fibserver-deployment-668f6d94cb-7fkdj -- sh -c "env"
SECRET_FIRST_NAME=Chris
KUBERNETES_PORT=tcp://10.96.0.1:443
KUBERNETES_SERVICE_PORT=443
NODE_VERSION=10.15.1
HOSTNAME=fibserver-deployment-668f6d94cb-7fkdj
YARN_VERSION=1.13.0
HOME=/root
FIBSERVER_SVC_SERVICE_HOST=10.104.38.242
FIBSERVER_SVC_PORT=tcp://10.104.38.242:1976
FIBSERVER_SVC_SERVICE_PORT=1976
FIBSERVER_SVC_PORT_1976_TCP_ADDR=10.104.38.242
KUBERNETES_PORT_443_TCP_ADDR=10.96.0.1
FIBSERVER_SVC_PORT_1976_TCP_PORT=1976
FIBSERVER_SVC_PORT_1976_TCP_PROTO=tcp
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
KUBERNETES_PORT_443_TCP_PORT=443
KUBERNETES_PORT_443_TCP_PROTO=tcp
APP_DIR=/usr/app
FIBSERVER_SVC_PORT_1976_TCP=tcp://10.104.38.242:1976
KUBERNETES_PORT_443_TCP=tcp://10.96.0.1:443
KUBERNETES_SERVICE_PORT_HTTPS=443
KUBERNETES_SERVICE_HOST=10.96.0.1
PWD=/usr/app
SECRET_LAST_NAME=Gianelle
~~~~