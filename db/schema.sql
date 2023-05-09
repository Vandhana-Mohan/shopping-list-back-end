DROP DATABASE IF EXISTS groceries_dev;
CREATE DATABASE groceries_dev;

 \c groceries_dev;

 CREATE TABLE groceries (
     id SERIAL PRIMARY KEY,
     name TEXT NOT NULL,
     category TEXT,
     price FLOAT,
     quantity INT,
     is_organic BOOLEAN,
     description TEXT
 );