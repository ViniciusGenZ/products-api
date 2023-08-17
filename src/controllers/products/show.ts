import { Request, Response } from 'express';
import { formatResponse } from '../../adapters/formatResponse';
import defaultErrorTreatment from '../../errors/defaultErrorTreatment';
import productsIndexService from '@services/products';
import { ParamsDictionary } from 'express-serve-static-core';

type TypedRequest = Omit<Request, 'params'> & {
	params: ParamsDictionary & {
		id: number;
	};
};

const productsShowController = async (_req: TypedRequest, res: Response) => {
	try {
		const products = await productsIndexService({ offset: 0, limit: 10 });
		return formatResponse(res, 200, 'OK', products);
	} catch (err) {
		return defaultErrorTreatment(res, err);
	}
};

export default productsShowController;
