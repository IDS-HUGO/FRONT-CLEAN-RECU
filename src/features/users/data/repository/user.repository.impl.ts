import { UserRepository } from "../../domain/interfaces/user.repository.ts";
import { UserEntity } from "../../domain/entities/user.entity.ts";
import {
  getAllUsersAPI,
  createUserAPI,
  updateUserAPI,
  deleteUserAPI,
} from "../datasource/user.api.ts";

export const userRepositoryImpl: UserRepository = {
  getAll: async () => await getAllUsersAPI(),
  create: async (user: UserEntity) => await createUserAPI(user),
  update: async (user: UserEntity) => await updateUserAPI(user),
  delete: async (id: string) => await deleteUserAPI(id),
};
