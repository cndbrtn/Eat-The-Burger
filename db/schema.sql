DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(60),
    eaten BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);