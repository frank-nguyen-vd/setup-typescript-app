import express from 'express';
import routes from './resources/index';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';

export const app = express();
const port = 3000;

const swaggerDoc = YAML.load('./src/swagger.yaml');
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use('/api/v1', routes);

app.listen(port, () => console.log(`Listening on port ${port}!`));
