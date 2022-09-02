if (process.env.NODE_ENV !== 'production') require('dotenv').config();

import express from 'express';

import routes from './routes';

const PORT = Number(process.env.PORT || 80);
const HOST = process.env.HOST || '0.0.0.0';
const app = express();

app.use('/', routes);
app.listen(PORT, HOST, () => {
  console.log(`Listening on port ${PORT}`);
});
