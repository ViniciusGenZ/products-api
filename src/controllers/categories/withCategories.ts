import { Request, Response } from 'express';
import { Query } from 'express-serve-static-core';
import formatResponse from '@adapters/formatResponse';
import defaultErrorTreatment from '@errors/defaultErrorTreatment';
import { ICategoryFilter } from '@interfaces/ICategoryFilters';
import SGetAllCategoriesWithProducts from '@services/categories/SCategoryesWithProducts';

type TypedRequest = Omit<Request, 'query'> & {
	query: Query & ICategoryFilter;
};

const CCategoriesWithProducts = async (req: TypedRequest, res: Response) => {
	try {
		const response = await SGetAllCategoriesWithProducts(req.query);
		return formatResponse(res, 200, 'OK', response);
	} catch (err) {
		return defaultErrorTreatment(res, err);
	}
};

export default CCategoriesWithProducts;
