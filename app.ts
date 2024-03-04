import express from 'express';
import { PORT } from './config';
import { router } from './src/routers/routers';

const app = express()

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
