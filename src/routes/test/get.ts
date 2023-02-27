import TestService from "@src/services/TestService";
import { Handler } from "express";

const getAll: Handler = async (_, res) => {
	const users = await TestService.getAll();
	return res.json({ users });
};

export default {
	getAll,
};
