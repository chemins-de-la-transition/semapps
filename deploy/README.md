# Deploy CDLT to production

This guide will help you deploy CDLT to a production environment.

It includes:
- [Traefik](https://traefik.io) to orchestrate domain names and certificates
- [Apache Jena Fuseki](https://jena.apache.org/documentation/fuseki2/) triplestore to store semantic data (on port 3030)
- [Redis](https://redis.io) to cache data and improve performances

## Requirement

- Install Docker engine ([official doc](https://docs.docker.com/engine/install/))
- Configure Docker user as root ([official doc](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user))
- Install Docker compose ([official doc](https://docs.docker.com/compose/install/))

## Configuration

In your DNS registrar, you will need to point 3 domains to your server:

- `data.mydomain.com` with the domain name where your data will be stored
- `mydomain.com` with the domain name where the frontoffice will be available
- `admin.mydomain.com` with the domain name where the backoffice will be available

In `docker-compose.yml`:

- Replace `data.mydomain.com` with the domain name where your data will be stored
- Replace `mydomain.com` with the domain name where the frontoffice will be available
- Replace `admin.mydomain.com` with the domain name where the backoffice will be available
- Replace `myemail@mydomain.com` by your email address (this is for Let's encrypt certificates)
- Replace `mypassword` with the password you want for the Fuseki admin

In `middleware/app/.env.local`:

- Replace `data.mydomain.com` with the domain name where your data will be stored
- Replace `mypassword` by the previously set Fuseki password
- Add the configuration required to connect to your OIDC server. You may need to add your domain name in the valid redirection URLs.

In `frontoffice/app/.env.local`:

- Replace `data.mydomain.com` with the domain name where your data will be stored
- Enter your [Mapbox access token](https://docs.mapbox.com/help/glossary/access-token/) (used for address search)

In `backoffice/app/.env.local`:

- Replace `data.mydomain.com` with the domain name where your data will be stored
- Enter your [Mapbox access token](https://docs.mapbox.com/help/glossary/access-token/) (used for address search)

> Any file added to the `middleware/app`, `frontoffice/app` and `backoffice/app` directories will be copied to the Docker containers, eventually overwriting existing files.

## Launch

```bash
docker compose build
docker compose up -d
```

## Maintenance

### Access the middleware REPL

```
docker compose exec middleware pm2 attach 0
```

### Follow the logs

```
docker compose exec middleware pm2 logs
```

### Flush redis cache

```
docker compose exec redis redis-cli FLUSHALL
```