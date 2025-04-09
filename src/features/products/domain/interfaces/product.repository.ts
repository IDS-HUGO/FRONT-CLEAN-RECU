import { ProductEntity } from '../entities/product.entity'

export interface ProductRepository {
  getAll(): Promise<ProductEntity[]>
  create(product: Omit<ProductEntity, 'id'>): Promise<ProductEntity>
  update(product: ProductEntity): Promise<ProductEntity>
  delete(id: number): Promise<void>
}
