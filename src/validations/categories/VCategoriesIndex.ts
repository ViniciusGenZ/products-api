import { Segments, celebrate } from 'celebrate';
import Joi from 'joi';

const VCategoriesIndex = celebrate({
	[Segments.QUERY]: Joi.object().keys({
		name: Joi.string(),
	}),
});

export default VCategoriesIndex;
