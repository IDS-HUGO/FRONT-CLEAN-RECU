import { UserEntity } from "../entities/user.entity";

export interface UserRepository {
  getAll(): Promise<UserEntity[]>;
  create(user: UserEntity): Promise<void>;
  update(user: UserEntity): Promise<void>;
  delete(id: string): Promise<void>;
}
