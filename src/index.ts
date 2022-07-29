import express from 'express';

import routes from './routes';

var PORT = Number(process.env.PORT || 80);
var HOST = process.env.HOST || '0.0.0.0';
const app = express();

app.use('/api', routes);
app.listen(PORT, HOST, () => {
  console.log(`Listening on port ${PORT}`);
});
