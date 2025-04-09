import { ProductRepository } from '../interfaces/product.repository'

export class DeleteProductUseCase {
  constructor(private repository: ProductRepository) {}

  execute(id: number): Promise<void> {
    return this.repository.delete(id)
  }
}
