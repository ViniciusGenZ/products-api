import { Request, Response } from 'express';
import { Query } from 'express-serve-static-core';
import formatResponse from '@adapters/formatResponse';
import defaultErrorTreatment from '@errors/defaultErrorTreatment';
import SGetAllCategories from '@services/categories/SGetAllCategories';

type TypedRequest = Omit<Request, 'query'> & {
	query: Query & {
		name: string;
	};
};

const CCategoriesIndex = async (req: TypedRequest, res: Response) => {
	try {
		const response = await SGetAllCategories(req.query);
		if (response.count == 0) return formatResponse(res, 404);
		return formatResponse(res, 200, 'OK', response);
	} catch (err) {
		return defaultErrorTreatment(res, err);
	}
};

export default CCategoriesIndex;
