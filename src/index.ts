import express from 'express';
import { server } from './config';

const app = express();

app.listen(server.port, (): void => {
  console.log(`[Express] Listen on ${server.port} port`);
});