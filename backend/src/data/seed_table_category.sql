-- SQLite

BEGIN;

DELETE FROM "category";

INSERT INTO "category" (name) VALUES
("Véhicules"),
("Maison & Déco"),
("Sport"),
("Immobilier"),
("Animaux"),
("Mode & Beauté"),
("Jardin"),
("Tech & Informatique"),
("Enfants"),
("Culture"),
("Loisirs");

COMMIT;