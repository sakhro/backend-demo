# BACKEND DEMO

[![Prisma](https://img.shields.io/badge/Prisma-v2.0.0-lightgrey.svg)](https://www.prisma.io/)
[![node](https://img.shields.io/badge/node-v12.8.1-green.svg)](https://nodejs.org/en/)
[![yarn](https://img.shields.io/badge/yarn-1.17.3-blue.svg)](https://yarnpkg.com/lang/en/)

## Run the project

1) Install `prisma2` using `npx` or `yarn` as global package. 
2) Run `prisma2 dev` 
3) In project folder run `yarn dev` and open [http://localhost:4000](http://localhost:4000)

## Available scripts

### `yarn dev`

Runs the app in the development mode.<br>
Open [http://localhost:4000](http://localhost:4000) to view it in the browser graphql playground.

### `yarn build`

Build the project into build directory

### `yarn generate *`

Generate types based on prsima data model

### `yarn start`

Run productions version of the project (run after you run the build command)

### `yarn lint`

Runs the lint check for typescript

### `yarn lint:fix`

Automatically fix lint errors

## Project structure

```bash
root
├─ src
│  ├─ generated
│  ├─ constants
│  ├─ helpers
│  ├─ modules
│  ├─ rules
│  ├─ types
│  └─ services
└─ prisma
```

### `prisma` folder
* Prisma shema configuration
* Migrations data

### `generated` folder
* Generated prisma types

### `modules` folder
* All modules of the system
* All files in this folder are hooked automaticaly by specific file name structure

### `constants` folder
* Contains all constants

### `services` folder
* Contains all additional services that we use in the project
* Each service is a separate file

### `helpers` folder
* Contains all helpers functions
* Each helper is a separate file

### `rules` folder
* Contains common rules used for permissions based in `modules/**/*.middleware.ts`
