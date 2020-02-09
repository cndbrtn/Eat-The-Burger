DROP DATABASE IF EXISTS burg_db;

CREATE DATABASE burg_db;

USE burg_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(40) NOT NULL,
    eaten boolean DEFAULT false NOT NULL,
    PRIMARY KEY (id) 
    );