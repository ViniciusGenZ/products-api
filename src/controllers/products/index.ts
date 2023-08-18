import { Request, Response } from 'express';
import { Query } from 'express-serve-static-core';
import formatResponse from '@adapters/formatResponse';
import defaultErrorTreatment from '@errors/defaultErrorTreatment';
import IOrderByEnum from '@interfaces/IOrderByEnum';
import SGetAllProducts from '@services/products/SGetAllProducts';

type TypedRequest = Omit<Request, 'query'> & {
	query: Query & {
		offset: number;
		limit: number;
		name?: string;
		id_product?: number;
		min_price?: number;
		max_price?: number;
		order_by?: IOrderByEnum;
		category_id?: number;
		brand_id?: number;
	};
};

const CProductsIndex = async (req: TypedRequest, res: Response) => {
	try {
		const response = await SGetAllProducts(req.query);
		if (response.count == 0) return formatResponse(res, 404);
		return formatResponse(res, 200, 'OK', response);
	} catch (err) {
		return defaultErrorTreatment(res, err);
	}
};

export default CProductsIndex;
