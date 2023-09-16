import { Segments, celebrate } from 'celebrate';
import Joi from 'joi';

const productfilter = {
	id_product: Joi.alternatives().try(
		Joi.number(),
		Joi.array().items(Joi.number()),
	),
	internal_id: Joi.alternatives().try(
		Joi.number(),
		Joi.array().items(Joi.number()),
	),
	id_category: Joi.alternatives().try(
		Joi.number(),
		Joi.array().items(Joi.number()),
	),
	id_brand: Joi.alternatives().try(
		Joi.number(),
		Joi.array().items(Joi.number()),
	),
	name: Joi.alternatives().try(Joi.string(), Joi.array().items(Joi.string())),
	min_price: Joi.number(),
	max_price: Joi.number(),
};

const VBrandsWIthProduts = celebrate({
	[Segments.QUERY]: Joi.object().keys({
		offset: Joi.number().required().min(0),
		limit: Joi.number().required().min(1),
		name: Joi.string(),
		order_by: Joi.string().valid(
			'name-asc',
			'name-desc',
			'price-asc',
			'price-desc',
		),
		exclude: Joi.object().keys(productfilter),
		products: {
			...productfilter,
			exclude: productfilter,
		},
	}),
});

export default VBrandsWIthProduts;
