import OrderProduct from './order-products.type'

type Order = {
  length(length: any): unknown
  id?: number
  status: string
  userId: number
  userName?: string
  products?: OrderProduct[]
}
export default Order
