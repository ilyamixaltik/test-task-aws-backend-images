import express from 'express';
import { Sequelize } from 'sequelize';
import { server, mySQL } from './config';

const app = express();

const sequelize = new Sequelize(`mysql://${mySQL.user}:${mySQL.password}@${mySQL.host}:${mySQL.port}/${mySQL.database}`);

sequelize.authenticate()
  .then(() => console.log('[MySQL] Connection has been established successfully.'))
  .catch((err) => console.error('[MySQL] Unable to connect to the database:', err))

app.listen(server.port, (): void => {
  console.log(`[Express] Listen on ${server.port} port`);
});

export default app;