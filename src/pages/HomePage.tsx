import React from 'react';
import { UserPage } from "../features/users/presentation/pages/UserPage";
import { ProductPage } from "../features/products/presentation/pages/ProductPage";

export const HomePage = () => {
  return (
    <div className="flex gap-8 p-4">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Usuarios</h2>
        <UserPage />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Productos</h2>
        <ProductPage />
      </div>
    </div>
  );
};