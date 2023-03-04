import User from "../models/User";
import UserRepo from "@src/repository/UserRepo";

const getAll = (): Promise<User[]> => {
  return UserRepo.getAll();
};

const createUser = (username: string): Promise<void> => {
  return UserRepo.createUser(username);
};

export default { getAll, createUser };
