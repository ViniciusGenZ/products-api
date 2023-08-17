import { Request, Response } from 'express';
import { Query } from 'express-serve-static-core';
import { formatResponse } from '../../adapters/formatResponse';
import defaultErrorTreatment from '../../errors/defaultErrorTreatment';
import productsIndexService from '@services/products';
import IOrderByEnum from '@interfaces/IOrderByEnum';

type TypedRequest = Omit<Request, 'query'> & {
	query: Query & {
		offset: number;
		limit: number;
		name: string;
		id_product: number;
		min_price: number;
		max_price: number;
		order_by: IOrderByEnum;
	};
};

const productsIndexController = async (req: TypedRequest, res: Response) => {
	try {
		const products = await productsIndexService(req.query);
		return formatResponse(res, 200, 'OK', products);
	} catch (err) {
		return defaultErrorTreatment(res, err);
	}
};

export default productsIndexController;
