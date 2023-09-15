import { Request, Response } from 'express';
import { Query } from 'express-serve-static-core';
import formatResponse from '@adapters/formatResponse';
import defaultErrorTreatment from '@errors/defaultErrorTreatment';
import { IProductFilter } from '@interfaces/IProductFilters';
import SGetAllBrandsWithProducts from '@services/brands/SProductsGroupedByBrands';

type TypedRequest = Omit<Request, 'query'> & {
	query: Query & IProductFilter;
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
