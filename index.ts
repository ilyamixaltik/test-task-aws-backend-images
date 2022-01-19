const express = require('express');
const { server } = require('./config');

const app = express();

app.listen(server.port, () => {
  console.log(`[Express] Listen on ${server.port} port`);
});