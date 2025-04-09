import { ProductRepository } from '../interfaces/product.repository'
import { ProductEntity } from '../entities/product.entity'

export class CreateProductUseCase {
  constructor(private repository: ProductRepository) {}

  execute(product: Omit<ProductEntity, 'id'>): Promise<ProductEntity> {
    return this.repository.create(product)
  }
}
