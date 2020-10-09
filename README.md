# node-express-sequalize-starter

This project uses [yarn](https://yarnpkg.com/) package manager.
This project validates the commit message by [this](https://github.com/marionebl/commitlint/tree/master/%40commitlint/config-conventional) convention

### Install dependencies

```sh
npm i
```

### To run the project in development

```sh
npm run dev
```

## Database migration notes:

#### For creating database migrations

```sh
npm run migration:create <migration-name>
```

#### For running the database migrations

```sh
npm run db:migrate
```
