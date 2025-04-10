import React from 'react';
import { useUserViewModel } from "../viewModels/useUserViewModel.ts";
import { UserForm } from "../components/UserForm.tsx";
import { UserTable } from "../components/UserTable.tsx";
import { UserEntity } from "../../domain/entities/user.entity.ts";

export const UserPage = () => {
  const { users, add, update, remove, selected, setSelected } = useUserViewModel();

  const handleSubmit = (user: UserEntity) => {
    if (user.id) update(user);
    else add(user);
  };

  const handleEdit = (user: UserEntity) => {
    setSelected(user);
  };

  return (
    <div>
      <h1>Usuarios</h1>
      <UserForm onSubmit={handleSubmit} initialData={selected} />
      <UserTable users={users} onEdit={handleEdit} onDelete={remove} />
    </div>
  );
};

export default UserPage;