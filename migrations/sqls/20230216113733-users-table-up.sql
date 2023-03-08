CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) UNIQUE,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    password VARCHAR(255) NOT NULL

)