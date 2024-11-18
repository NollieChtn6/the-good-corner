-- SQLite

BEGIN;

DELETE FROM "tag";

INSERT INTO "tag" (label) VALUES
("Urgent"),
("Bonne affaire"),
("Échange possible"),
("Remise en mains propres"),
("Envoi possible"),
("Nouveau"),
("Article neuf"),
("Occasion"),
("Frais de port inclus"),
("Prix en baisse"),
("Prix négociable"),
("Prix ferme"),
("Rare"),
("Dernière chance");

COMMIT;
