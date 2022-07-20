import express from 'express';

import routes from './routes';

const PORT = 3000;
const app = express();

app.use('/api', routes);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
