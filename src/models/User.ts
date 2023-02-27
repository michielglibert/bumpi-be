class User {
	public id: number;
	public name: string;
	public email: string;
	public pwdHash?: string;

	public constructor(
		name?: string,
		email?: string,
		pwdHash?: string,
		id?: number
	) {
		this.name = name ?? "";
		this.email = email ?? "";
		this.pwdHash = pwdHash ?? "";
		this.id = id ?? -1;
	}
}

export default User;
