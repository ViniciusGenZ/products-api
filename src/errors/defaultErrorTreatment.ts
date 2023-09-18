import { Response } from 'express';
import jwt from 'jsonwebtoken';

import formatResponse from '@adapters/formatResponse';
import { Err } from './customError';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function defaultErrorTreatment(res: Response, err: any | Err) {
	if (err instanceof jwt.TokenExpiredError)
		return defaultErrorTreatment(res, new Err(401, err.message));

	if (process.env.STAGE == 'dev') console.log(err);
	if (Err.isErr(err)) return formatResponse(res, err.code, err.message);

	return formatResponse(res, 500, 'Internal Server Error', err);
}

export default defaultErrorTreatment;
