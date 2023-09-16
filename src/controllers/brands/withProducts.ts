import { Request, Response } from 'express';
import { Query } from 'express-serve-static-core';
import formatResponse from '@adapters/formatResponse';
import defaultErrorTreatment from '@errors/defaultErrorTreatment';
import SGetAllBrandsWithProducts from '@services/brands/SProductsGroupedByBrands';
import { IBrandFilter } from '@interfaces/IBrandFilters';

type TypedRequest = Omit<Request, 'query'> & {
	query: Query & IBrandFilter;
};

const CBrandsWithProducts = async (req: TypedRequest, res: Response) => {
	try {
		const response = await SGetAllBrandsWithProducts(req.query);
		return formatResponse(res, 200, 'OK', response);
	} catch (err) {
		return defaultErrorTreatment(res, err);
	}
};

export default CBrandsWithProducts;
