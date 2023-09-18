import { In, IsNull, Like, Raw } from 'typeorm';

function filterAdapter(
	input: Array<string> | Array<number> | string | number | undefined,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
	if (!input) return undefined;
	if (typeof input == 'string') {
		if (input.toLowerCase() == 'null') return IsNull();
		return Like(`%${input}%`);
	}
	if (Array.isArray(input)) {
		if (typeof input[0] == 'string')
			return Raw((alias) => `${alias} RLIKE '${input.join('|')}'`);
		if (typeof input[0] == 'number') return In(input as Array<number>);
	}
	return input;
}

export default filterAdapter;
