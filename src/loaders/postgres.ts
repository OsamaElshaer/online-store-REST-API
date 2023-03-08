import { Pool } from 'pg'
import config from '../config/index'

let db = config.db_dev
if (config.env == 'test') {
  db = config.db_test
}
const pool = new Pool({
  host: config.host,
  database: db,
  user: config.user,
  password: config.password,
  port: parseInt(config.dbPort as string),
})
pool.on('error', (error) => {
  console.log(error.message)
})

export default pool
