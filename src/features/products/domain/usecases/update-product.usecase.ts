import { ProductRepository } from '../interfaces/product.repository'
import { ProductEntity } from '../entities/product.entity'

export class UpdateProductUseCase {
  constructor(private repository: ProductRepository) {}

  execute(product: ProductEntity): Promise<ProductEntity> {
    return this.repository.update(product)
  }
}
