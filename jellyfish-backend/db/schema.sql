-- psql -U postgres -f db/schema.sql
-- psql -U postgres -f db/seed.sql

DROP DATABASE IF EXISTS jellyfish_dev;
CREATE DATABASE jellyfish_dev;

\c jellyfish_dev;

DROP TABLE IF EXISTS jellyfish;

CREATE TABLE jellyfish (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 is_venomous BOOLEAN,
 scientific TEXT,
 information VARCHAR,
 website TEXT NOT NULL,
 image_link TEXT
 );