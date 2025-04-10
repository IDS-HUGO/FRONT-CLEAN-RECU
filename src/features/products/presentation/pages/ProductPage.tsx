import React from 'react'
import { useProductViewModel } from '../viewModels/useProductViewModel.ts'
import { ProductForm } from '../components/ProductForm.tsx'
import { ProductTable } from '../components/ProductTable.tsx'


export const ProductPage = () => {
  const { products, addProduct, deleteProduct, loading } = useProductViewModel()

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      <ProductForm onSubmit={addProduct} />
      {loading ? <p className="mt-4">Cargando...</p> : <ProductTable products={products} onDelete={deleteProduct} />}
    </div>
  )
}


export default ProductPage;