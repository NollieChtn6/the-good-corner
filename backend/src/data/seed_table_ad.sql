-- SQLite

BEGIN;

DELETE FROM "ad";

INSERT INTO "ad" ("title", "description", "owner", "price", "pictureUrl", "location", "createdAt", "category") VALUES
("Vélo de route", "Vélo de route en excellent état, peu utilisé, taille M.", "Alice Dupont", 350, "https://picsum.photos/201/299", "Paris", "2024-09-15 10:00:00", 3),
("Table basse en bois", "Table basse en bois massif, 100x50 cm, idéale pour salon.", "Marc Legrand", 120, "https://picsum.photos/200/300", "Lyon", "2024-09-15 11:00:00", 2),
("iPhone 12", "iPhone 12 en très bon état, 128 Go, sans rayures, vendu avec sa boîte d'origine.", "Camille Martin", 650, "https://picsum.photos/199/301", "Marseille", "2024-09-17 12:00:00", 8),
("Chaise de bureau", "Chaise de bureau ergonomique, réglable en hauteur, bon état.", "Julie Bernard", 80, "https://picsum.photos/200/300", "Toulouse", "2024-09-18 13:00:00", 2),
("Canapé convertible", "Canapé convertible 3 places, tissu gris, très bon état.", "Sophie Moreau", 450, "https://picsum.photos/201/299", "Bordeaux", "2024-09-19 15:00:00", 2),
("Ordinateur portable HP", "Ordinateur portable HP, 8 Go RAM, 256 Go SSD, utilisé pour le télétravail.", "Lucas Robert", 500, "https://picsum.photos/200/300", "Nantes", "2024-09-19 16:00:00", 8),
("Montre connectée", "Montre connectée Garmin, parfait état, autonomie de 5 jours.", "Nathalie Gauthier", 120, "https://picsum.photos/200/300", "Lille", "2024-09-21 17:00:00", 8),
("Vélo enfant", "Vélo enfant 24 pouces, bon état, parfait pour débuter.", "Thomas Lefevre", 90, "https://picsum.photos/200/300", "Rennes", "2024-09-22 18:00:00", 9),
("Télévision Samsung 4K", "Télévision Samsung 4K, 55 pouces, excellent état.", "Valérie Girard", 400, "https://picsum.photos/201/299", "Strasbourg", "2024-09-22 19:00:00", 8),
("Poussette Bébé Confort", "Poussette pliable Bébé Confort, très légère et pratique.", "Mathieu Rousseau", 180, "https://picsum.photos/200/300", "Grenoble", "2024-09-24 20:00:00", 9),
("Guitare acoustique", "Guitare acoustique Yamaha, parfait état, idéale pour débutants.", "David Laurent", 220, "hhttps://picsum.photos/199/301", "Toulon", "2024-09-25 22:00:00", 10),
("Lampe de bureau", "Lampe de bureau avec bras articulé, lumière LED, blanche.", "Emma Dupuis", 25, "https://picsum.photos/200/300", "Clermont-Ferrand", "2024-09-26 23:00:00", 2),
("VTT tout terrain", "VTT tout terrain pour adulte, suspension avant, bon état.", "Marie Pelletier", 350, "https://picsum.photos/200/300", "Angers", "2024-09-27 01:00:00", 1),
("Lit bébé", "Lit bébé en bois, blanc, avec matelas inclus, très bon état.", "Pauline Thomas", 150, "https://picsum.photos/200/300", "Reims", "2024-09-28 02:00:00", 9),
("Piano électrique", "Piano électrique Yamaha, touches sensibles, parfait pour débutants.", "Chloé Caron", 500, "hhttps://picsum.photos/199/301", "Amiens", "2024-09-29 04:00:00", 10),
("Tondeuse électrique", "Tondeuse électrique Bosch, largeur de coupe 40 cm, très bon état.", "Hugo Dupuy", 150, "https://picsum.photos/200/300", "Nîmes", "2024-09-30 06:00:00", 7),
("Appareil photo reflex Canon", "Appareil photo Canon EOS 80D, très bon état, avec objectifs inclus.", "Lucas Morel", 750, "https://picsum.photos/200/300", "Paris", "2024-10-01 10:00:00", 8),
("Ballon de football Adidas", "Ballon Adidas officiel, taille 5, neuf avec étiquette.", "Claire Lemoine", 20, "https://picsum.photos/201/299", "Lyon", "2024-10-02 12:00:00", 3),
("Chaussures de randonnée", "Chaussures de randonnée Salomon, taille 42, parfait état.", "Hugo Leblanc", 80, "https://picsum.photos/200/300", "Grenoble", "2024-10-03 15:00:00", 3),
("Doudoune enfant", "Doudoune pour enfant, taille 6 ans, chaude et légère.", "Emma Giraud", 40, "https://picsum.photos/200/300", "Nantes", "2024-10-05 14:00:00", 9),
("CD collection Beatles", "Collection complète de CD des Beatles, état neuf.", "Léa Rousseau", 100, "https://picsum.photos/201/299", "Marseille", "2024-10-05 13:00:00", 10),
("Planche à voile", "Planche à voile Bic, idéale pour débutants, bon état.", "Mathieu Durand", 300, "https://picsum.photos/200/300", "Bordeaux", "2024-10-07 11:00:00", 3),
("Table extensible", "Table à manger extensible, 6 à 10 places, couleur chêne clair.", "Alice Martin", 150, "https://picsum.photos/200/300", "Strasbourg", "2024-10-07 12:00:00", 2),
("Robot de cuisine", "Robot multifonctions Moulinex, peu utilisé, parfait état.", "Sophie Lemoine", 200, "https://picsum.photos/199/301", "Nice", "2024-10-08 18:00:00", 7),
("Sac de voyage Samsonite", "Sac de voyage à roulettes, très léger, parfait état.", "Paul Morel", 70, "https://picsum.photos/199/301", "Lille", "2024-10-10 19:00:00", 2),
("Canne à pêche", "Canne à pêche télescopique, longueur 3 mètres, très bon état.", "Nicolas Gauthier", 50, "https://picsum.photos/200/300", "Montpellier", "2024-10-10 20:00:00", 3);

COMMIT;
