import { Segments, celebrate } from 'celebrate';
import Joi from 'joi';

export const productsShowValidation = celebrate({
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.number().required().min(0),
	}),
});
