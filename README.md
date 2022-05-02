[![SemApps](https://badgen.net/badge/Powered%20by/SemApps/28CDFB)](https://semapps.org)

# CDLT SemApps platform

## Local development

### Launch Fuseki

```bash
docker-compose up -d fuseki
```

### Launch the middleware

Ask a develop for the OIDC client secret and add it in a new `.env.local` file in the middleware directory:

```dotenv
SEMAPPS_OIDC_CLIENT_SECRET=
```

You can now launch the middleware in mode REPL:

```bash
cd middleware
yarn install
yarn run dev
```

Import the types (actor, administrator, contributor):

```bash
call importer.types.freshImport
```

### Launch the front office

Ask a develop for the Mapbox access token and add it in a new `.env.local` file in the /frontoffice directory:

```dotenv
REACT_APP_MAPBOX_ACCESS_TOKEN=
```

> Note: if you want to use a remote middleware, you can also set the `REACT_APP_MIDDLEWARE_URL` env var

You can now launch the front office:

```bash
cd frontoffice
yarn install
yarn start
```

### Launch the front office

Create a `.env.local` file in the /backoffice directory with the same Mapbox access token:

```dotenv
REACT_APP_MAPBOX_ACCESS_TOKEN=
```

You can now launch the back office:

```bash
cd backoffice
yarn install
yarn start
```
