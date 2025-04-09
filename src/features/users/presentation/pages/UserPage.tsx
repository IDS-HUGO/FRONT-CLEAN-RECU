import React from 'react';
import { useUserViewModel } from "../viewModels/useUserViewModel";
import { UserForm } from "../components/UserForm";
import { UserTable } from "../components/UserTable";
import { UserEntity } from "../../domain/entities/user.entity";

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