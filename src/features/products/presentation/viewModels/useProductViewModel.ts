import { useEffect, useState } from 'react'
import { ProductEntity } from '../../domain/entities/product.entity'
import { ProductRepositoryImpl } from '../../data/repository/product.repository.impl'
import { ProductDataSource } from '../../data/datasource/product.datasource'

const repo = new ProductRepositoryImpl(new ProductDataSource())

export const useProductViewModel = () => {
  const [products, setProducts] = useState<ProductEntity[]>([])
  const [loading, setLoading] = useState(false)

  const loadProducts = async () => {
    setLoading(true)
    const data = await repo.getAll()
    setProducts(data)
    setLoading(false)
  }


  const addProduct = async (product: Omit<ProductEntity, 'id'>) => {
    await repo.create(product)
    loadProducts()
  }

  const updateProduct = async (product: ProductEntity) => {
    await repo.update(product)
    loadProducts()
  }

  const deleteProduct = async (id: number) => {
    await repo.delete(id)
    loadProducts()
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return {
    products,
    loading,
    addProduct,
    updateProduct,
    deleteProduct
  }
}
