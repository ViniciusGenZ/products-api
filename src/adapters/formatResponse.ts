import { Response } from 'express';

interface ResponseLayout {
	code: number;
	success: boolean;
	message?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data?: any;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatResponse = (
	res: Response,
	code: number,
	message?: string,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data?: any,
) => {
	const body: ResponseLayout = {
		code,
		success: Boolean(code >= 200 && code < 300),
		message,
		data,
	};

	if (body.data?.code) {
		delete body.data.code;
	}
	if (body.data?.message) {
		delete body.data.message;
	}

	if (code >= 200 && code < 300) return res.status(code).json(data);

	return res.status(code).json({ error: message });
};
