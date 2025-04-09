import { useEffect, useState } from "react";
import { UserEntity } from "../../domain/entities/user.entity";
import { createUser } from "../../domain/usecases/create-user.usecase";
import { deleteUser } from "../../domain/usecases/delete-user.usecase";
import { getAllUsers } from "../../domain/usecases/get-all-users.usecase";
import { updateUser } from "../../domain/usecases/update-user.usecase";
import { userRepositoryImpl } from "../../data/repository/user.repository.impl";

export const useUserViewModel = () => {
    const [users, setUsers] = useState<UserEntity[]>([]);
    const [selected, setSelected] =  useState<UserEntity | undefined>(undefined);

  const load = async () => {
    const data = await getAllUsers(userRepositoryImpl);
    setUsers(data);
  };

  const add = async (user: UserEntity) => {
    await createUser(userRepositoryImpl)(user);
    await load();
  };

  const update = async (user: UserEntity) => {
    await updateUser(userRepositoryImpl)(user);
    await load();
    setSelected(undefined);
  };

  const remove = async (id: string) => {
    await deleteUser(userRepositoryImpl)(id);
    await load();
  };

  useEffect(() => {
    load();
  }, []);

  
  
    return { 
      users, 
      selected, 
      setSelected: (user: UserEntity) => setSelected(user), 
      add, 
      update, 
      remove 
    };
  
};