import { useEffect, useState } from 'react'
import { ProductEntity } from '../../domain/entities/product.entity'
import { ProductRepositoryImpl } from '../../data/repository/product.repository.impl'
import { ProductDataSource } from '../../data/datasource/product.datasource'
import { GetAllProductsUseCase } from '../../domain/usecases/get-all-products.usecase'
import { CreateProductUseCase } from '../../domain/usecases/create-product.usecase'
import { UpdateProductUseCase } from '../../domain/usecases/update-product.usecase'
import { DeleteProductUseCase } from '../../domain/usecases/delete-product.usecase'

// Creamos las instancias de los casos de uso
const dataSource = new ProductDataSource()
const repository = new ProductRepositoryImpl(dataSource)
const getAllProductsUseCase = new GetAllProductsUseCase(repository)
const createProductUseCase = new CreateProductUseCase(repository)
const updateProductUseCase = new UpdateProductUseCase(repository)
const deleteProductUseCase = new DeleteProductUseCase(repository)

export const useProductViewModel = () => {
  const [products, setProducts] = useState<ProductEntity[]>([])
  const [loading, setLoading] = useState(false)

  const loadProducts = async () => {
    setLoading(true)
    try {
      const data = await getAllProductsUseCase.execute()
      setProducts(data)
    } catch (error) {
      console.error('Error loading products:', error)
    } finally {
      setLoading(false)
    }
  }

  const addProduct = async (product: Omit<ProductEntity, 'id'>) => {
    try {
      await createProductUseCase.execute(product)
      await loadProducts()
    } catch (error) {
      console.error('Error adding product:', error)
    }
  }

  const updateProduct = async (product: ProductEntity) => {
    try {
      await updateProductUseCase.execute(product)
      await loadProducts()
    } catch (error) {
      console.error('Error updating product:', error)
    }
  }

  const deleteProduct = async (id: number) => {
    try {
      await deleteProductUseCase.execute(id)
      await loadProducts()
    } catch (error) {
      console.error('Error deleting product:', error)
    }
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