import express from 'express';
import dotenv from 'dotenv';

import routes from './routes';

if (process.env.NODE_ENV !== 'prodution') dotenv.config();

const PORT = Number(process.env.PORT || 80);
const HOST = process.env.HOST || '0.0.0.0';
const app = express();

app.use('/api', routes);
app.listen(PORT, HOST, () => {
  console.log(`Listening on port ${PORT}`);
});
