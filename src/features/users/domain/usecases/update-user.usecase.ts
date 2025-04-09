import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../interfaces/user.repository";
export const updateUser = (repo: UserRepository) => (user: UserEntity) => repo.update(user);