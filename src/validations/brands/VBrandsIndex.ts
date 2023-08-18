import { Segments, celebrate } from 'celebrate';
import Joi from 'joi';

const VBrandsIndex = celebrate({
	[Segments.QUERY]: Joi.object().keys({
		name: Joi.string(),
	}),
});

export default VBrandsIndex;
