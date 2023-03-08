import dotenv from 'dotenv'
dotenv.config()

const {
  ENV,
  PORT,
  DB_HOST,
  DB_PORT,
  DB_DEV,
  DB_TEST,
  POSTGRES_USER,
  POSTFRES_PASSWORD,
  JWT_KEY,
  TOKEN_SECRET,
} = process.env
export default {
  env: ENV,
  port: PORT,
  host: DB_HOST,
  dbPort: DB_PORT,
  db_dev: DB_DEV,
  db_test: DB_TEST,
  user: POSTGRES_USER,
  password: POSTFRES_PASSWORD,
  jwtKey: JWT_KEY,
  tokenSecret: TOKEN_SECRET,
}
