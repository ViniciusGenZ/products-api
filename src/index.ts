import 'reflect-metadata';
import app from '../src/server/app';
import { exoStaging } from '@storage/mysql/exoStaging';

async function server() {
	try {
		await exoStaging.initialize();
		app.listen(process.env.SERVER_PORT);
		console.log(`Server listening on port ${process.env.SERVER_PORT}`);
	} catch (error) {
		console.log(error);
	}
}

server();
