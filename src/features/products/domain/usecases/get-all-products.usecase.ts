import { ProductRepository } from '../interfaces/product.repository'
import { ProductEntity } from '../entities/product.entity'

export class GetAllProductsUseCase {
  constructor(private repository: ProductRepository) {}

  execute(): Promise<ProductEntity[]> {
    return this.repository.getAll()
  }
}
