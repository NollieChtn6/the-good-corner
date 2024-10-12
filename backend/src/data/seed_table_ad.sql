-- SQLite

BEGIN;

DELETE FROM "ad";

INSERT INTO "ad" ("title", "description", "owner", "price", "pictureUrl", "location", "createdAt", "category") VALUES
("Vélo de route", "Vélo de route en excellent état, peu utilisé, taille M.", "Alice Dupont", 350, "https://picsum.photos/200/300", "Paris", "2024-09-23 10:00:00", 8), 
("Table basse en bois", "Table basse en bois massif, 100x50 cm, idéale pour salon.", "Marc Legrand", 120, "https://picsum.photos/200/300", "Lyon", "2024-09-23 11:00:00", 3),
("iPhone 12", "iPhone 12 en très bon état, 128 Go, sans rayures, vendu avec sa boîte d'origine.", "Camille Martin", 650, "https://picsum.photos/200/300", "Marseille", "2024-09-23 12:00:00", 2),
("Chaise de bureau", "Chaise de bureau ergonomique, réglable en hauteur, bon état.", "Julie Bernard", 80, "https://picsum.photos/200/300", "Toulouse", "2024-09-23 13:00:00", 3), 
("Jeu vidéo PS5", "Jeu vidéo PS5 - FIFA 23, très peu utilisé, comme neuf.", "Pierre Lemoine", 40, "https://picsum.photos/200/300", "Nice", "2024-09-23 14:00:00", 13),
("Canapé convertible", "Canapé convertible 3 places, tissu gris, très bon état.", "Sophie Moreau", 450, "https://picsum.photos/200/300", "Bordeaux", "2024-09-23 15:00:00", 3),
("Ordinateur portable HP", "Ordinateur portable HP, 8 Go RAM, 256 Go SSD, utilisé pour le télétravail.", "Lucas Robert", 500, "https://picsum.photos/200/300", "Nantes", "2024-09-23 16:00:00", 7),
("Montre connectée", "Montre connectée Garmin, parfait état, autonomie de 5 jours.", "Nathalie Gauthier", 120, "https://picsum.photos/200/300", "Lille", "2024-09-23 17:00:00", 2),
("Vélo enfant", "Vélo enfant 24 pouces, bon état, parfait pour débuter.", "Thomas Lefevre", 90, "https://picsum.photos/200/300", "Rennes", "2024-09-23 18:00:00", 8),
("Télévision Samsung 4K", "Télévision Samsung 4K, 55 pouces, excellent état.", "Valérie Girard", 400, "https://picsum.photos/200/300", "Strasbourg", "2024-09-23 19:00:00", 2),
("Poussette Bébé Confort", "Poussette pliable Bébé Confort, très légère et pratique.", "Mathieu Rousseau", 180, "https://picsum.photos/200/300", "Grenoble", "2024-09-23 20:00:00", 5),
("Machine à café Nespresso", "Machine à café Nespresso, très bon état, fonctionne parfaitement.", "Laura Fontaine", 60, "https://picsum.photos/200/300", "Montpellier", "2024-09-23 21:00:00", 2),
("Guitare acoustique", "Guitare acoustique Yamaha, parfait état, idéale pour débutants.", "David Laurent", 220, "https://picsum.photos/200/300", "Toulon", "2024-09-23 22:00:00", 11),
("Lampe de bureau", "Lampe de bureau avec bras articulé, lumière LED, blanche.", "Emma Dupuis", 25, "https://picsum.photos/200/300", "Clermont-Ferrand", "2024-09-23 23:00:00", 3),
("Lave-vaisselle Bosch", "Lave-vaisselle Bosch, capacité 12 couverts, très silencieux.", "Antoine Marchand", 300, "https://picsum.photos/200/300", "Le Havre", "2024-09-24 00:00:00", 2),
("VTT tout terrain", "VTT tout terrain pour adulte, suspension avant, bon état.", "Marie Pelletier", 350, "https://picsum.photos/200/300", "Angers", "2024-09-24 01:00:00", 8),
("Lit bébé", "Lit bébé en bois, blanc, avec matelas inclus, très bon état.", "Pauline Thomas", 150, "https://picsum.photos/200/300", "Reims", "2024-09-24 02:00:00", 3), 
("Aspirateur Dyson", "Aspirateur sans fil Dyson V8, très bon état, vendu avec accessoires.", "Julien Leroy", 200, "https://picsum.photos/200/300", "Dijon", "2024-09-24 03:00:00", 2),
("Piano électrique", "Piano électrique Yamaha, touches sensibles, parfait pour débutants.", "Chloé Caron", 500, "https://picsum.photos/200/300", "Amiens", "2024-09-24 04:00:00", 11),
("Tondeuse électrique", "Tondeuse électrique Bosch, largeur de coupe 40 cm, très bon état.", "Hugo Dupuy", 150, "https://picsum.photos/200/300", "Nîmes", "2024-09-24 05:00:00", 4),
("Polo Lacoste femme", "Polo taille M, presque neuf", "Sandrine Durand", 62, "https://picsum.photos/200/300", "Arles", "2024-09-24 06:00:00", 6),
("Appartement T2 à louer", "Appartement T2 de 50 m², entièrement meublé, situé au centre-ville.", "Céline Durand", 700, "https://picsum.photos/200/300", "Paris", "2024-09-24 07:00:00", 9),
("Chien Labrador", "Chiot Labrador de 3 mois, vacciné et pucé.", "Jean Dupuy", 300, "https://picsum.photos/200/300", "Lyon", "2024-09-24 08:00:00", 10),
("Batterie électronique Roland", "Batterie électronique Roland TD-17, excellent état.", "Mathieu Delorme", 800, "https://picsum.photos/200/300", "Toulouse", "2024-09-24 09:00:00", 11),
("Veste en cuir homme", "Veste en cuir noir taille L, très peu portée.", "Maxime Dufour", 100, "https://picsum.photos/200/300", "Bordeaux", "2024-09-24 10:00:00", 6),
("Roman 'Le Seigneur des Anneaux'", "Edition collector du roman 'Le Seigneur des Anneaux', comme neuf.", "Sophie Martin", 45, "https://picsum.photos/200/300", "Marseille", "2024-09-24 11:00:00", 12),
("Console Nintendo Switch", "Console Nintendo Switch en très bon état, avec deux manettes.", "Julien Picard", 280, "https://picsum.photos/200/300", "Nice", "2024-09-24 12:00:00", 13),
("Scie circulaire", "Scie circulaire Bosch 1400W, très bon état.", "Arnaud Petit", 100, "https://picsum.photos/200/300", "Lille", "2024-09-24 13:00:00", 14),
("Projecteur LED", "Projecteur LED portable, parfait pour chantier ou extérieur.", "Camille Lemoine", 60, "https://picsum.photos/200/300", "Toulon", "2024-09-24 14:00:00", 14),
("Tablette Samsung Galaxy Tab", "Tablette Samsung Galaxy Tab 10 pouces, 64 Go, bon état.", "Anaïs Giraud", 250, "https://picsum.photos/200/300", "Montpellier", "2024-09-24 15:00:00", 15),
("Casque audio Sony", "Casque audio sans fil Sony WH-1000XM4, très bon état.", "Louis Lefebvre", 180, "https://picsum.photos/200/300", "Nantes", "2024-09-24 16:00:00", 15),
("Rame de carton recyclé", "Rame de papier recyclé, parfait pour impressions.", "Isabelle Morel", 25, "https://picsum.photos/200/300", "Dijon", "2024-09-24 17:00:00", 1),
("Imprimante laser couleur", "Imprimante laser couleur, état neuf, vendue avec cartouches.", "Paul Simon", 150, "https://picsum.photos/200/300", "Strasbourg", "2024-09-24 18:00:00", 7),
("Jeu de société 'Catan'", "Jeu de société 'Catan', complet et en excellent état.", "Claire Martin", 30, "https://picsum.photos/200/300", "Lille", "2024-09-24 19:00:00", 12);

COMMIT;
