CREATE DATABASE livredb;
USE livredb;

CREATE TABLE livres (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  summary TEXT,
  cover VARCHAR(255),
  isLent BOOLEAN,
  lentTo VARCHAR(255),
  lentDate DATE,
  lentReturnDate DATE
);
