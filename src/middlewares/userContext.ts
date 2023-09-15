import defaultErrorTreatment from '@errors/defaultErrorTreatment';
import { NextFunction, Request, Response } from 'express';
import UserContext from '@contexts/userContext';

async function userContextMiddleware(
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void | Response> {
	try {
		const userContext = UserContext.getInstance();
		userContext.decodedUserJwt = req.decodedUserJwt;

		return next();
	} catch (err) {
		return defaultErrorTreatment(res, err);
	}
}

export default userContextMiddleware;
