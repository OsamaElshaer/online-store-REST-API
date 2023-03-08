# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

### Users

- Create **`token required`**

  - HTTP verb `POST`
  - Endpoint:- `/api/users/register`
  - Request Body

    ```json
    {
      "id": 1,
      "user_name": "osamaelshaer",
      "first_name": "osama",
      "last_name": "elshaer",
      "password": "actifdgdsve"
    }
    ```

  - Response Body -- `User object`

    ```json
    "message": "user created successfully ",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VyX25hbWUiOiJhbGlvIiwiZmlyc3RfbmFtZSI6Im9zYW1hIiwibGFzdF9uYW1lIjoiZWxzaGFlciIsInBhc3N3b3JkIjoiJDJiJDEwJC42ZVJJV0NKRVpTek4yaU1vUjg0Zi53cG1NOVJSNHNhamhyLlFsaUwyWGFPUlkweDV1dm1LIn0sImlhdCI6MTY3NjY0NzU1Mn0.RLGJfBcUKP6ZWrctrtRLEulTZO6gpHHvGaoBxdI7Hrs",
    "user": {
        "id": 1,
        "user_name": "osamaelshaer",
        "first_name": "osama",
        "last_name": "elshaer",
        "password": "$2b$10$.6eRIWCJEZSzN2iMoR84f.wpmM9RR4sajhr.QliL2XaORY0x5uvmK"
    }
    ```

- Show **`token required`**

  - HTTP verb `GET`
  - Endpoint:- `/api/users/:id`

  - Response Body -- `User object`

    ```json
    {
      "user": {
        "id": 1,
        "user_name": "osamaelshaer",
        "first_name": "osama",
        "last_name": "elshaer",
        "password": "$2b$10$.6eRIWCJEZSzN2iMoR84f.wpmM9RR4sajhr.QliL2XaORY0x5uvmK"
      }
    }
    ```

- Index - **`token required`**

  - HTTP verb `GET`
  - Endpoint:- `/api/users/`

  - Response Body -- `Array of users objects`

    ```json
    {
      "message": "users retrieved successfully",
      "users": [
        {
          "id": 1,
          "user_name": "osaamelshaer",
          "first_name": "osama",
          "last_name": "elshaer",
          "password": "$2b$10$.6eRIWCJEZSzN2iMoR84f.wpmM9RR4sajhr.QliL2XaORY0x5uvmK"
        },
        {
          "id": 2,
          "user_name": "alielshaer",
          "first_name": "ali",
          "last_name": "elshaer",
          "password": "$2b$10$rv1B4bXoT42hi3Ajbtem2.ItnOptUXq6iBCtGWiwa8kbgEKmStlnK"
        }
      ]
    }
    ```

### Products

- Create **`token required`**

  - HTTP verb `POST`
  - Endpoint:- `/api/products`
  - Request Body

    ```json
    {
      "name": "apple",
      "price": 2.55
    }
    ```

  - Response Body -- `User object`

    ```json
    {
      "message": "Product created successfully",
      "product": {
        "id": 1,
        "name": "apple",
        "price": "2.55"
      }
    }
    ```

- Show

  - HTTP verb `GET`
  - Endpoint:- `/api/products/:id` - **id of the product to be retrieved**

  - Response Body -- `Product object`

    ```json
    {
      "message": "Product:alio",
      "product": {
        "id": 2,
        "name": "alio",
        "price": "2.55"
      }
    }
    ```

- Index

  - HTTP verb `GET`
  - Endpoint:- `/api/products/`

  - Response Body -- `Array of products`

    ```json
    {
      "message": "All Products",
      "products": [
        {
          "id": 1,
          "name": "apple",
          "price": "2.55"
        },
        {
          "id": 2,
          "name": "orange",
          "price": "6.77"
        }
      ]
    }
    ```

### Order

- Create **`token required`**

  - HTTP verb `POST`
  - Endpoint:- `/api/orders`
  - Request Body

    ```json
    {
      "status": "active"
    }
    ```

  - Response Body -- `User object`

    ```json
    {
      "message": "Order created successfully",
      "order": {
        "id": 3,
        "status": "active",
        "userId": 1
      }
    }
    ```

### Order products

- Create **`token required`**

  - HTTP verb `POST`
  - Endpoint:- `/api/products/1/order`
  - Request Body

    ```json
    {
      "orderId": 1,
      "quantity": 2
    }
    ```

  - Response Body -- `object of order product`

    ```json
    "msg": "order_product creates successfully",
    "order_product": {
        "id": 19,
        "order_id": "1",
        "product_id": "2",
        "quantity": 2
    }
    ```

- Index - **`token required`**

  - HTTP verb `GET`
  - Endpoint:- `/api/orders/users/1`

  - Response Body -- `Array of orders objects for user`

    ```json
    {
      "message": "Order retrieved successfully",
      "order": {
        "id": 1,
        "user_name": "osamaelshaer",
        "user_id": "1",
        "products": [
          {
            "name": "apple",
            "price": 2.55,
            "quantity": 2,
            "productId": 1
          },
          {
            "name": "orange",
            "price": 5.79,
            "quantity": 2,
            "productId": 2
          }
        ],
        "status": "active"
      }
    }
    ```

## Database Schema

### Users Schema

```sql
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) UNIQUE,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    password VARCHAR(255) NOT NULL

)
```

### Products Schema

```sql
CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  price NUMERIC(4,2) NOT NULL
);
```

### Orders Schema

```sql
CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  user_id BIGINT REFERENCES users(id) NOT Null
  status VARCHAR(50),
);
```

### Order-product Schema

```sql
CREATE TABLE order_products(
  id SERIAL PRIMARY KEY,
  order_id BIGINT REFERENCES orders(id) NOT NULL,
  product_id BIGINT REFERENCES products(id) NOT NULL,
  quantity INT
);
```

## Data Shapes

### User

```typescript
type User = {
  id?: number
  userName: string
  firstName: string
  lastName: string
  password?: string
}
```

### Product

```typescript
type Product = {
  id?: number
  name: string
  price: number
}
```

### Order

```typescript
type Order = {
  id?: number
  status: string
  userId: number
  userName?: string
  products?: OrderProduct[]
}
```

### order-product

```typescript
type OrderProduct = {
  id?: number
  quantity: number
  orderId: number
  productId: number
  products?: Product[]
}
```
