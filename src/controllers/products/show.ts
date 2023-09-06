import { Request, Response } from 'express';
import formatResponse from '@adapters/formatResponse';
import defaultErrorTreatment from '@errors/defaultErrorTreatment';
import { ParamsDictionary } from 'express-serve-static-core';
import SGetOneProductById from '@services/products/SGetOneProductById';

type TypedRequest = Omit<Request, 'params'> & {
	params: ParamsDictionary & {
		id_product: number;
	};
};

const CProductShow = async (req: TypedRequest, res: Response) => {
	try {
		const response = await SGetOneProductById(req.params.id_product);
		if (!response) return formatResponse(res, 404);
		return formatResponse(res, 200, 'OK', response);
	} catch (err) {
		return defaultErrorTreatment(res, err);
	}
};

export default CProductShow;
