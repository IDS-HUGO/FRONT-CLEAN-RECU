import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../interfaces/user.repository";
export const createUser = (repo: UserRepository) => (user: UserEntity) => repo.create(user);