import React from 'react';
import { ProductEntity } from '../../domain/entities/product.entity';

interface Props {
  product: ProductEntity;
  onDelete: (id: number) => void;
}

export const ProductCard = ({ product, onDelete }: Props) => {
  return (
    <div className="border rounded p-4 mb-2 shadow-sm">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <div className="flex justify-between mt-2">
        <span className="font-bold">Precio: ${product.price}</span>
        <span>Stock: {product.stock}</span>
      </div>
      <button 
        onClick={() => onDelete(product.id)} 
        className="bg-red-500 text-white px-2 py-1 rounded mt-2 hover:bg-red-600"
      >
        Eliminar
      </button>
    </div>
  );
};