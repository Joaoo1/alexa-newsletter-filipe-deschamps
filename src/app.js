import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import './database';
import './app/libs/Mail';

import routes from './routes';

const app = express();

app.use(cors({}));

app.use(routes);

export default app;
