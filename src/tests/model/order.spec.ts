import OrderModel from '../../models/order.model'

const orderModel = new OrderModel()
const order = {
  userId: 1,
  status: 'active',
}
const productOrder = {
  orderId: 1,
  prodId: 1,
  quantity: 3,
}
describe('Test order Model ', () => {
  it(' should return a Order', async () => {
    const getOrder = await orderModel.create(order)
    expect(getOrder).toEqual(
      jasmine.objectContaining({
        status: 'active',
        userId: 1,
      })
    )
  })

  it('should return  created product order', async () => {
    const getProductOrder = await orderModel.createOrder(productOrder)
    expect(getProductOrder).toEqual(
      jasmine.objectContaining({
        id: 2,
        order_id: '1',
      })
    )
  })

  it('should return All user order', async () => {
    const usersOrder = await orderModel.getOrderByUserId(1)
    expect(usersOrder.length).not.toBe(0)
  })
})
