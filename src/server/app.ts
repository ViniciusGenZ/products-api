import 'dotenv/config';

import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import fileUpload from 'express-fileupload';
import userAgent from 'express-useragent';
import { errors } from 'celebrate';
import healthRouter from '@routes/health';
import userRouter from '@routes/user';
import permissionRouter from '@routes/permission';
import roleRouter from '@routes/role';
import productsRouter from '@routes/product';
import priceAdjustRouter from '@routes/priceAdjust';
import marcasRouter from '@routes/marca';
import grupoRouter from '@routes/grupo';
import productsWebhooks from '@routes/public';
import promotionalEventsSubscribersRouter from '@routes/promotionalEventsSubscribers';
import clientRouter from '@routes/client';

const app = express();

app.use(morgan('dev'));
app.use(cors({ origin: '*' }));
app.use(userAgent.express());
app.use(express.json());

if (process.env.STAGE == 'development') {
	app.use('/user', userRouter);
	app.use('/permission', permissionRouter);
	app.use('/role', roleRouter);
	app.use('/products', productsRouter);
	app.use('/priceadjust', priceAdjustRouter);
	app.use('/marca', marcasRouter);
	app.use('/grupo', grupoRouter);
	app.use('/webhook', productsWebhooks);
	app.use('/promotionalEvents', promotionalEventsSubscribersRouter);
	app.use('/client', clientRouter);
} else {
	app.use('/', healthRouter);
	app.use('/promotionalEvents', promotionalEventsSubscribersRouter);
}

app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: '/tmp/',
	}),
);

app.use(errors());

export default app;
