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
### Build Image
~~~~
docker image build -t cgianelle1976/fibonacci:1.0 .
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
docker image push cgianelle1976/fibonacci:latest
~~~~