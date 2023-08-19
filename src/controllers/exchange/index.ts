import { Request, Response } from 'express';
import formatResponse from '@adapters/formatResponse';
import defaultErrorTreatment from '@errors/defaultErrorTreatment';
import SGetAllExchanges from '@services/exchange/SGetAllExchanges';

const CExchangeIndex = async (_req: Request, res: Response) => {
	try {
		const response = await SGetAllExchanges();
		if (!response || response.length == 0) return formatResponse(res, 404);
		return formatResponse(res, 200, 'OK', response);
	} catch (err) {
		return defaultErrorTreatment(res, err);
	}
};

export default CExchangeIndex;
