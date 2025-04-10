import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { UserEntity } from "../../domain/entities/user.entity.ts";
import { createUser } from "../../domain/usecases/create-user.usecase.ts";
import { deleteUser } from "../../domain/usecases/delete-user.usecase.ts";
import { getAllUsers } from "../../domain/usecases/get-all-users.usecase.ts";
import { updateUser } from "../../domain/usecases/update-user.usecase.ts";
import { userRepositoryImpl } from "../../data/repository/user.repository.impl.ts";

export const useUserViewModel = () => {
  const [users, setUsers] = useState<UserEntity[]>([]);
  const [selected, setSelected] = useState<UserEntity | undefined>(undefined);

  const load = async () => {
    try {
      const data = await getAllUsers(userRepositoryImpl);
      setUsers(data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const add = async (user: UserEntity) => {
    try {
      const newUser = { ...user, id: user.id || uuidv4() };
      await createUser(userRepositoryImpl)(newUser);
      await load();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const update = async (user: UserEntity) => {
    try {
      await updateUser(userRepositoryImpl)(user);
      await load();
      setSelected(undefined);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const remove = async (id: string) => {
    try {
      await deleteUser(userRepositoryImpl)(id);
      await load();
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return {
    users,
    selected,
    setSelected,
    add,
    update,
    remove
  };
};

export default useUserViewModel;