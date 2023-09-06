import { Segments, celebrate } from 'celebrate';
import Joi from 'joi';

const VProductShow = celebrate({
	[Segments.PARAMS]: Joi.object().keys({
		id_product: Joi.number().required().min(0),
	}),
});

export default VProductShow;
