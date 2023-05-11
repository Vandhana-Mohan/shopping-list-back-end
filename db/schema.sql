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
     quantity NUMERIC(10,2) NOT NULL CHECK (quantity >= 0),
     unit TEXT,
     is_organic BOOLEAN DEFAULT false
 );

 CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5),
    groceries_id INTEGER NOT NULL REFERENCES groceries (id)
    ON DELETE CASCADE
 )



