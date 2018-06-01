# node-express-sequalize-starter

This project uses [yarn](https://yarnpkg.com/) package manager.
This project validates the commit message by [this](https://github.com/marionebl/commitlint/tree/master/%40commitlint/config-conventional) convention

### Install yarn

```sh
npm install -g yarn
```

### Install dependencies

```sh
yarn
```

### To run the project in development

```sh
yarn dev
```

### To build the project for production environment

```sh
yarn build
```


### Tests:

```sh
yarn test
```

## Database migration notes:

#### For creating database migrations

```sh
yarn migration:create <migration-name>
```

#### For running the database migrations

```sh
yarn db:migrate
```
