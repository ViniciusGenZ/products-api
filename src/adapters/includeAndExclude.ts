import { And, Not } from 'typeorm';
import filterAdapter from './filterAdapter';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function includeAndExclude(include?: any, exclude?: any) {
	if (include && exclude)
		return And(filterAdapter(include), Not(filterAdapter(exclude)));
	if (include) return filterAdapter(include);
	if (exclude) return Not(filterAdapter(exclude));
	return undefined;
}

export default includeAndExclude;
