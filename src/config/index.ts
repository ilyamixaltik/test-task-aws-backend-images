const { PORT, MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

type Server = {
  port: number
}

type MySQL = {
  host: string,
  port: number,
  user: string,
  password: string,
  database: string
}

export const server: Server = {
  port: Number(PORT) || 3000
}

export const mySQL: MySQL = {
  host: MYSQL_HOST || 'localhost',
  port: Number(MYSQL_PORT) || 3306,
  user: MYSQL_USER || 'root',
  password: MYSQL_PASSWORD || 'password',
  database: MYSQL_DATABASE || 'test'
}