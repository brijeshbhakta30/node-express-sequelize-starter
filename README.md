# node-express-sequalize-starter
A Boilerplate application for building REST APIs using node, express and SQL databases.

## Notes

- commit messages are validated by [this](https://www.conventionalcommits.org) convention.
- [Airbnb's javascript style guide](https://github.com/airbnb/javascript) and [eslint config](https://www.npmjs.com/package/eslint-config-airbnb-base) is followed.
- Code depends on `.env` files and will validate the files to run properly.
- To reflect changes in `.env` files, a restart will be required.
- Staged files will be fixed for linting error before commit by [eslint](https://eslint.org/), [husky](https://www.npmjs.com/package/husky) and [lint-staged](https://www.npmjs.com/package/lint-staged).

### Install dependencies

```sh
npm i
```

### To setup the project

- Create an environment file by copying the `.env.example` file and add respective values.

### To run the project in development

```sh
npm run dev
```

##### For Linting files

```sh
npm run lint
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
