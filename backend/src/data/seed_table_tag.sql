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
("Occasion"),
("Prix négociable"),
("Rare"),
("Dernière chance"),
("Prix ferme");

COMMIT;
