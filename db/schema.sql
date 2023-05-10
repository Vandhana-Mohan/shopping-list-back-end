DROP DATABASE IF EXISTS groceries_dev;
CREATE DATABASE groceries_dev;

 \c groceries_dev;

 CREATE TABLE groceries (
     id SERIAL PRIMARY KEY,
     name TEXT NOT NULL,
     category TEXT,
     image_url TEXT,
     description TEXT,
     price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
     quantity NUMERIC(10,2) NOT NULL,
     unit TEXT,
     is_organic BOOLEAN
 );