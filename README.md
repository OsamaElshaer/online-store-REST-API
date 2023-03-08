## StoreFront

A StoreFront backend API written in NodeJS provides the main functions you'd expect from a store, such as, CRUD operations.

## Getting Started

These instructions will give you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

#### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### Setup environment

First, create a `.env` file with all the required environment variables:

```bash
ENV=dev
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_DEV=store_dev
DB_TEST=store_test
POSTGRES_USER=postgres
POSTFRES_PASSWORD=password
JWT_KEY=secret
TOKEN_SECRET=secret
```

## database

Now, check if Postgres has the database `store_dev`,`store_test` if not create it:
<br />

 DATABASE PORT : 5432

```bash
# Login to Postgres
psql -U postgres
# Postgres shell
# This will list out all the databases
\l
create database store_dev;
create database store_test;
```

### Installation

1. Install NPM packages
   ```sh
   npm install
   ```
#### for development

2. Next, you need to run the database migrations:

   for development

   ```bash
   npm run migrate:dev
   ```
3. build
   ```sh
   npm run build
   ```
4. start server
   ```sh
   npm run dev
   ```

#### for testing

5. for test
   ```sh
   npm run test
   ```
