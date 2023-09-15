import { IUserToken } from '@interfaces/IUserToken';

class UserContext {
	private static instance: UserContext;
	decodedUserJwt: IUserToken | null;

	private constructor() {
		this.decodedUserJwt = null;
	}

	public static getInstance(): UserContext {
		if (!UserContext.instance) {
			UserContext.instance = new UserContext();
		}

		return UserContext.instance;
	}
}

export default UserContext;
