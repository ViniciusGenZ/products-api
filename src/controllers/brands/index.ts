import { Request, Response } from 'express';
import { Query } from 'express-serve-static-core';
import formatResponse from '@adapters/formatResponse';
import defaultErrorTreatment from '@errors/defaultErrorTreatment';
import SGetAllBrands from '@services/brands/SGetAllBrands';

type TypedRequest = Omit<Request, 'query'> & {
	query: Query & {
		name: string;
	};
};

const CBrandsIndex = async (req: TypedRequest, res: Response) => {
	try {
		const response = await SGetAllBrands(req.query);
		if (response.count == 0) return formatResponse(res, 404);
		return formatResponse(res, 200, 'OK', response);
	} catch (err) {
		return defaultErrorTreatment(res, err);
	}
};

export default CBrandsIndex;
