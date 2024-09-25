-- SQLite

--------------------
-- CREATE TABLE ADS
--------------------

BEGIN;

DROP TABLE IF EXISTS "ads";

CREATE TABLE "ads"
(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  owner VARCHAR(100) NOT NULL,
  price INT,
  picture VARCHAR(100),
  location VARCHAR(100),
  createdAt VARCHAR(25)
);

COMMIT;