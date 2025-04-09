import React, { useState } from 'react'
import { ProductEntity } from '../../domain/entities/product.entity'

interface Props {
  onSubmit: (product: Omit<ProductEntity, 'id'>) => void
}

export const ProductForm = ({ onSubmit }: Props) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    onSubmit({ name, description, price, stock })
    setName('')
    setDescription('')
    setPrice(0)
    setStock(0)
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <input 
        className="w-full mb-2 p-2 border" 
        placeholder="Nombre" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        className="w-full mb-2 p-2 border" 
        placeholder="Descripción" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
      />
      <input 
        className="w-full mb-2 p-2 border" 
        type="number" 
        placeholder="Precio" 
        value={price} 
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <input 
        className="w-full mb-2 p-2 border" 
        type="number" 
        placeholder="Stock" 
        value={stock} 
        onChange={(e) => setStock(Number(e.target.value))}
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded">Agregar</button>
    </form>
  )
}