import React from 'react'
import { ProductEntity } from '../../domain/entities/product.entity'

interface Props {
  products: ProductEntity[]
  onDelete: (id: number) => void
}

export const ProductTable = ({ products, onDelete }: Props) => (
  <table className="w-full mt-4 border">
    <thead>
      <tr className="bg-gray-200">
        <th className="p-2 border">Nombre</th>
        <th className="p-2 border">Descripción</th>
        <th className="p-2 border">Precio</th>
        <th className="p-2 border">Stock</th>
        <th className="p-2 border">Acciones</th>
      </tr>
    </thead>
    <tbody>
      {products.map(p => (
        <tr key={p.id}>
          <td className="p-2 border">{p.name}</td>
          <td className="p-2 border">{p.description}</td>
          <td className="p-2 border">{p.price}</td>
          <td className="p-2 border">{p.stock}</td>
          <td className="p-2 border">
            <button onClick={() => onDelete(p.id)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)


export default ProductTable;