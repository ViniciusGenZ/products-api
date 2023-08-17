import IOrderByEnum from '@interfaces/IOrderByEnum';
import { Segments, celebrate } from 'celebrate';
import Joi from 'joi';

export const productsIndexValidation = celebrate({
	[Segments.QUERY]: Joi.object().keys({
		offset: Joi.number().required().min(0),
		limit: Joi.number().required().min(1),
		id_product: Joi.number(),
		name: Joi.string(),
		min_price: Joi.number(),
		max_price: Joi.number(),
		order_by: Joi.string().valid(IOrderByEnum),
	}),
});
