import { Segments, celebrate } from 'celebrate';
import Joi from 'joi';

const VProductShow = celebrate({
	[Segments.PARAMS]: Joi.object().keys({
		internal_id: Joi.number().required().min(0),
	}),
});

export default VProductShow;
