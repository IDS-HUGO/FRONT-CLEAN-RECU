import { UserRepository } from "../interfaces/user.repository";
export const deleteUser = (repo: UserRepository) => (id: string) => repo.delete(id);