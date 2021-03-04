[![SemApps](https://badgen.net/badge/Powered%20by/SemApps/28CDFB)](https://semapps.org)

# Plateforme SemApps CDLT

## Initial setup

### Install Docker

```
chmod +x install-docker.sh
./install-docker.sh
```

This script will:

- Install Docker engine (https://docs.docker.com/engine/install/)
- Configure Docker user as root (https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
- Install Docker-compose (https://docs.docker.com/compose/install/)

### Clone this repo

```
git clone https://github.com/chemins-de-la-transition/semapps.git
```

### Build and start the containers

```
docker-compose build
docker-compose up -d
```

## Maintenance

### Access the middleware REPL

```
docker exec -it middleware pm2 attach 0
```

### Follow the logs

```
docker exec -it middleware pm2 logs
```
