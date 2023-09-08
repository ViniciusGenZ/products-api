import { Request, Response } from 'express';
import { Query } from 'express-serve-static-core';
import formatResponse from '@adapters/formatResponse';
import defaultErrorTreatment from '@errors/defaultErrorTreatment';
import SGetAllProducts from '@services/products/SGetAllProducts';
import { FilterProperties } from '@interfaces/IProductFilters';

type TypedRequest = Omit<Request, 'query'> & {
	query: Query & FilterProperties;
};

const CProductsIndex = async (req: TypedRequest, res: Response) => {
	try {
		const response = await SGetAllProducts(req.query);
		return formatResponse(res, 200, 'OK', response);
	} catch (err) {
		return defaultErrorTreatment(res, err);
	}
};

export default CProductsIndex;
