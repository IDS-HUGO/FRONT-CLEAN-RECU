import { UserRepository } from "../interfaces/user.repository";
export const getAllUsers = (repo: UserRepository) => repo.getAll();
