import { Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function formatResponse(
	res: Response,
	code: number,
	message?: string,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data?: any,
) {
	if (!message && !data) return res.status(code).send({});
	if (code >= 200 && code < 300) return res.status(code).json(data);
	return res.status(code).json({ error: message });
}

export default formatResponse;
