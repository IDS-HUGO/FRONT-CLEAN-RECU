import React from 'react';
import { UserEntity } from "../../domain/entities/user.entity";

interface Props {
  users: UserEntity[];
  onEdit: (user: UserEntity) => void;
  onDelete: (id: string) => void;
}

export const UserTable = ({ users, onEdit, onDelete }: Props) => (
  <table className="w-full mt-4 border">
    <thead>
      <tr className="bg-gray-200">
        <th className="p-2 border">Nombre</th>
        <th className="p-2 border">Email</th>
        <th className="p-2 border">Rol</th>
        <th className="p-2 border">Acciones</th>
      </tr>
    </thead>
    <tbody>
      {users.map((u) => (
        <tr key={u.id}>
          <td className="p-2 border">{u.name}</td>
          <td className="p-2 border">{u.email}</td>
          <td className="p-2 border">{u.role}</td>
          <td className="p-2 border">
            <button 
              onClick={() => onEdit(u)}
              className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600"
            >
              Editar
            </button>
            <button 
              onClick={() => onDelete(u.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Eliminar
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;