import express from 'express';
import routes from './resources/index';

export const app = express();
const port = 5000;

app.use('/api', routes);

app.listen(port, () => console.log(`Listening on port ${port}!`));
