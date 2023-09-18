import { Err } from '@errors/customError';
import defaultErrorTreatment from '@errors/defaultErrorTreatment';
import { IUserToken } from '@interfaces/IUserToken';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

async function jwtMiddleware(
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void | Response> {
	try {
		const { authorization } = req.headers;

		if (!authorization) throw new Err(401, 'Authentication not found');

		const auth = authorization.split(' ');
		if (auth[0] !== 'Bearer' || auth[1] === '' || !auth[1])
			throw new Err(401, 'Malformed authorization header');

		const decoded = jwt.verify(auth[1], process.env.jwtSecret as string);

		if (!decoded) throw new Err(401, 'Authorization invalid');

		req.decodedUserJwt = decoded as IUserToken;

		return next();
	} catch (err) {
		return defaultErrorTreatment(res, err);
	}
}

export default jwtMiddleware;
