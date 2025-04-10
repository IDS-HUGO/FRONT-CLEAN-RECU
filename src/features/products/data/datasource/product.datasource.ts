import { ProductModel } from '../models/product.model'

const API_URL = 'http://localhost:8080/api/products' 

export class ProductDataSource {
  async getAll(): Promise<ProductModel[]> {
    const res = await fetch(API_URL)
    return res.json()
  }

  async create(product: Omit<ProductModel, 'id'>): Promise<ProductModel> {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
    if (!res.ok) {
      const errorData = await res.text()
      console.error('Error creating product:', errorData)
      throw new Error(`Failed to create product: ${errorData}`)
    }
    return res.json()
}

  async update(product: ProductModel): Promise<ProductModel> {
    const res = await fetch(`${API_URL}/${product.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
    return res.json()
  }

  async delete(id: number): Promise<void> {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
  }
}
