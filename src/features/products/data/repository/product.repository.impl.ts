import { ProductRepository } from '../../domain/interfaces/product.repository'
import { ProductEntity } from '../../domain/entities/product.entity'
import { ProductDataSource } from '../datasource/product.datasource'

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private dataSource: ProductDataSource) {}

  getAll(): Promise<ProductEntity[]> {
    return this.dataSource.getAll()
  }

  create(product: Omit<ProductEntity, 'id'>): Promise<ProductEntity> {
    return this.dataSource.create(product)
  }

  update(product: ProductEntity): Promise<ProductEntity> {
    return this.dataSource.update(product)
  }

  delete(id: number): Promise<void> {
    return this.dataSource.delete(id)
  }
}
