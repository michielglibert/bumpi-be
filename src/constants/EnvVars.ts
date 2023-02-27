/**
 * Environments variables declared here.
 */

/* eslint-disable node/no-process-env */

export default {
	NodeEnv: process.env.NODE_ENV ?? "",
	Port: process.env.PORT ?? 0,
	Jwt: {
		Secret: process.env.JWT_SECRET ?? "",
		Exp: process.env.JWT_EXP ?? "", // exp at the same time as the cookie
	},
} as const;
