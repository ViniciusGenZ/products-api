import { Segments, celebrate } from 'celebrate';
import Joi from 'joi';

const VProductsIndex = celebrate({
	[Segments.QUERY]: Joi.object().keys({
		offset: Joi.number().required().min(0),
		limit: Joi.number().required().min(1),
		id_product: Joi.number(),
		name: Joi.string(),
		min_price: Joi.number(),
		max_price: Joi.number(),
		order_by: Joi.string().valid(
			'name-asc',
			'name-desc',
			'price-asc',
			'price-desc',
		),
	}),
});

export default VProductsIndex;
