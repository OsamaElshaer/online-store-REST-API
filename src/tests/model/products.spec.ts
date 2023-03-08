import ProductModel from '../../models/product.model'
import Product from '../../types/product.type'
import db from '../../loaders/postgres'

const productModel = new ProductModel()

describe('Test Model logic', () => {
  const product = {
    name: 'apple',
    price: 2.55,
  } as Product

  it(' should create a product', async () => {
    const createdProduct = await productModel.create(product)
    expect(createdProduct).toEqual(jasmine.objectContaining({ name: 'apple' }))
  })

  it('should return a list of products', async () => {
    const allProducts = await productModel.index()
    expect(allProducts.length).not.toBe(0)
  })

  it('should return the sepacific product', async () => {
    const returnedProduct = await productModel.show(1)
    expect(returnedProduct).toEqual(
      jasmine.objectContaining({
        id: 1,
        name: 'apple',
      })
    )
  })
})
