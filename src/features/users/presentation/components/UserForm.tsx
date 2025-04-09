import React from "react";
import { useState, useEffect } from "react";
import { UserEntity } from "../../domain/entities/user.entity";

interface Props {
  onSubmit: (user: UserEntity) => void;
  initialData?: UserEntity;
}

const emptyForm: UserEntity = {
  id: "",
  name: "",
  email: "",
  password: "",
  role: "user",
};

export const UserForm = ({ onSubmit, initialData }: Props) => {
  const [user, setUser] = useState(emptyForm);

  useEffect(() => {
    if (initialData) setUser(initialData);
  }, [initialData]);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSubmit(user);
    setUser(emptyForm);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <div className="mb-4">
        <input 
          name="name" 
          value={user.name} 
          onChange={handleChange} 
          placeholder="Nombre" 
          required 
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="mb-4">
        <input 
          name="email" 
          value={user.email} 
          onChange={handleChange} 
          placeholder="Email" 
          required 
          type="email"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="mb-4">
        <input 
          name="password" 
          value={user.password} 
          onChange={handleChange} 
          placeholder="Contraseña" 
          required 
          type="password"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="mb-4">
        <select 
          name="role" 
          value={user.role} 
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="user">Usuario</option>
          <option value="admin">Administrador</option>
        </select>
      </div>
      <button 
        type="submit"
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
      >
        {initialData ? 'Actualizar' : 'Crear'}
      </button>
    </form>
  );
};