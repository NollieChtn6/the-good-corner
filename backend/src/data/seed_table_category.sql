-- SQLite

BEGIN;

DELETE FROM "category";

INSERT INTO "category" (name) VALUES
("Véhicules"),
("Électronique"),
("Meubles"),
("Jardinage"),
("Jouets"),
("Mode"),
("Informatique"),
("Sport");

COMMIT;