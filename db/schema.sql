DROP DATABASE IF EXISTS groceries_dev;
CREATE DATABASE groceries_dev;

 \c groceries_dev;

 CREATE TABLE groceries (
     id SERIAL PRIMARY KEY,
     name TEXT NOT NULL,
     category TEXT,
     price TEXT,
     quantity TEXT,
     is_organic BOOLEAN
 );