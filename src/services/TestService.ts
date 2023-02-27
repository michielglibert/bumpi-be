import User from "../models/User";
import TestRepo from "@src/repository/TestRepo";

const getAll = (): Promise<User[]> => {
	return TestRepo.getAll();
};

export default { getAll };
