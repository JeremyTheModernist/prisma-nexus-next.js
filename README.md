# Prisma with Nexus and Next.js

This project provides a simple boiler plate for using the following technologies together in a fullstack app:

Backend:

- [Prisma](https://www.prisma.io/)
- [Nexus](https://nexusjs.org/)
- [GraphQL](https://GraphQL.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/).

Frontend:

- [Next.js](https://nextjs.org/)
- [Apollo Client](https://www.apollographql.com/docs/react)
- [GraphQL Code Generator](https://www.graphql-code-generator.com/docs/plugins/typescript-react-apollo)

It extends the backend architecture of [this repository](https://github.com/JeremyTheModernist/prisma-nexus-graphql).

## What can be achieved?

By using these technologies, you can quickly:

- create a fully typed, GraphQL API that interfaces with a postgreSQL database.
- automatically generate apollo graphql hooks based off of your client-side graphql documents

## In depth

For a more in depth explanation of the backend, please [view this github repository](https://github.com/JeremyTheModernist/prisma-nexus-graphql).

## Setting up the backend:

To get started with this project, you will need to:

- Create a PostgreSQL database for Prisma
- Migrate the Prisma schema to the database
- Start up the server

### Create a PostgreSQL database:

Create a new `.env` file in the `/backend` directory of the project. Once created, provide the file with a new environmental variable housing the PostgreSQL database link.

If the db was created locally, then the url in the `.env` file should look something like this:

```
DATABASE_URL="postgresql://<username>@localhost:5432/<dbName>?schema=public"
```

### Migrate the Prisma schema

In the terminal, first `cd` into the `backend`, then run:

```
npm run dev:migrate
```

### Start up the server

In the terminal, ensure you are in the `backend` directory, then run:

```
npm run dev
```

Now visit `http://localhost:4001/` to interact with GraphQL playground.

## Setting up the frontend

To set up the frontend, `cd` into the `frontend` folder. Then in the terminal, run:

```
npm run dev
```

Now, visit the site at `http://localhost:3000/`.

Next, navigate to the `/create` page and create a new post using the form. Once submitted, navigate back to the `/` page. You should now see the content appearing! This means, that the frontend is properly communicating with the backend which in turn communicates with the database.

## What are these technologies?

Most of these technologies are [discussed in this github repository](https://github.com/JeremyTheModernist/prisma-nexus-graphql#what-are-these-technologies).

The primary one covered here is the [GraphQL Code Generator](https://www.graphql-code-generator.com/). Essentially this tool ingests a GraphQL API and produces a fully typed API based off of it. It also has tons of special integrations, including Apollo and Typescript.

The way it is used in this project is to automagically produce fully typed, Apollo Client graphql hooks.

There are two key parts to this:

- `codegen.yml`: which provides the configuration for GraphQL Code generator
- `queries.graphql.ts`: which provides the SDL (schema defined language) for GQL Codegen to create Apollo hooks

### `codegen.yml`

This file looks like this:

```yml
overwrite: true
schema: 'http://localhost:4001'
documents: './graphql/*.graphql.ts'
generates:
  ./graphql/generated/graphql.tsx:
    plugins:
      - typescript
      - typescript-operations
      - typescript-react-apollo
    config:
      withHooks: true
```

Let's break this down:

- `overwrite`: this is set to `true` meaning every time GQL Codegen is run, it will overwrite the previous files
- `schema`: this is what GraphQL schema GQL Codegen should ingest and produce a fully typed API off of.
- `documents`: any GraphQL documents that should be processed for output. Here, the graphql file that holds all of the Apollo Client SDL queries and mutations is included.
- `generates`: what type of file and where it should be generated to.
- `plugins`: any special plugins to be used in the process. See more details on [Typescript React Apollo usage here](https://www.graphql-code-generator.com/docs/plugins/typescript-react-apollo).
- `config`: any special configurations for this file. Here, `withHooks` is set to true, to ensure that Apollo hooks are produced in the process.

### Run GraphQL Codegen

To run the GQL Codegen, `cd` in to the `frontend` and run:

```
npm run generate
```

This will produce a `graphql/generated/graphql.tsx` file with fully typed Apollo Client hooks. These can then be imported into different Next.js pages and components like so:

```javascript
import { useCreateDraftMutation } from '../graphql/generated/graphql';

export default function Home() {
  const [addTodo, { loading, data }] = useCreateDraftMutation();
  // more code here
}
```

This now removes the need to write typed mutations and queries for Apollo Hooks!

## The Big Idea

The big breakthrough with all of these technologies is that they enable:

- code-first approaches to GraphQL
- automated workflows for generating typed APIs and hooks
- powerful CRUD APIs when working with SQL databases
- client side state management for GraphQL APIs.

## `package.json`

The package.json for the `/frontend` is self-explanatory. For the `/backend`, I recommend checking out the [prisma-nexus-graphql](https://github.com/JeremyTheModernist/prisma-nexus-graphql) repository. It has a few sections highlighting how the `package.json` scripts work as well as the build scripts and `Procfile` for Heroku.

## Helpful Resources

- [Fullstack, Type-Safe GraphQL with Next.js, Nexus, and Prisma](https://dev.to/prisma/complete-introduction-to-fullstack-type-safe-graphql-feat-next-js-nexus-prisma-c5)

- [Typescript with Next.js](https://nextjs.org/docs/basic-features/typescript)

- [GraphQL Fragments with Apollo Client](https://www.apollographql.com/docs/react/data/fragments/#example-usage)
