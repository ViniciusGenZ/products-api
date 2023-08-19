import 'dotenv/config';

import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
// import fileUpload from 'express-fileupload';
import userAgent from 'express-useragent';
import { errors } from 'celebrate';
import healthRouter from '@routes/health';
import productsRouter from '@routes/products';
import brandsRouter from '@routes/brands';
import categoriesRouter from '@routes/categories';
import exchangeRouter from '@routes/exchanges';

const app = express();

app.use(morgan('dev'));
app.use(cors({ origin: '*' }));
app.use(userAgent.express());
app.use(express.json());

app.use('/', healthRouter);
app.use('/api/brands', brandsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/exchange', exchangeRouter);
app.use('/api/products', productsRouter);

app.use('*', (_req, res) => res.sendStatus(404));

// app.use(
// 	fileUpload({
// 		useTempFiles: true,
// 		tempFileDir: '/tmp/',
// 	}),
// );

app.use(errors());

export default app;
