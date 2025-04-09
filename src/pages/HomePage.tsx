import React from 'react';
import { UserPage } from "../features/users/presentation/pages/UserPage";
import { ProductPage } from "../features/products/presentation/pages/ProductPage";

export const HomePage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Sistema de Gestión</h1>
      <div className="flex flex-col md:flex-row gap-8 p-4">
        <div className="flex-1 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Usuarios</h2>
          <UserPage />
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Productos</h2>
          <ProductPage />
        </div>
      </div>
    </div>
  );
};

export default HomePage;