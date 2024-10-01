-- SQLite

BEGIN;

DELETE FROM "ad";

INSERT INTO "ad" ("title", "description", "owner", "price", "picture", "location", "createdAt", "categoryId") VALUES
("Vélo de route", "Vélo de route en excellent état, peu utilisé, taille M.", "Alice Dupont", 350, "https://picsum.photos/200/300", "Paris", "2024-09-23", 5),
("Table basse en bois", "Table basse en bois massif, 100x50 cm, idéale pour salon.", "Marc Legrand", 120, "https://picsum.photos/200/300", "Lyon", "2024-09-23", 7),
("iPhone 12", "iPhone 12 en très bon état, 128 Go, sans rayures, vendu avec sa boîte d'origine.", "Camille Martin", 650, "https://picsum.photos/200/300", "Marseille", "2024-09-23", 6),
("Chaise de bureau", "Chaise de bureau ergonomique, réglable en hauteur, bon état.", "Julie Bernard", 80, "https://picsum.photos/200/300", "Toulouse", "2024-09-23", 7), 
("Jeu vidéo PS5", "Jeu vidéo PS5 - FIFA 23, très peu utilisé, comme neuf.", "Pierre Lemoine", 40, "https://picsum.photos/200/300", "Nice", "2024-09-23", 6), 
("Canapé convertible", "Canapé convertible 3 places, tissu gris, très bon état.", "Sophie Moreau", 450, "https://picsum.photos/200/300", "Bordeaux", "2024-09-23", 7), 
("Ordinateur portable HP", "Ordinateur portable HP, 8 Go RAM, 256 Go SSD, utilisé pour le télétravail.", "Lucas Robert", 500, "https://picsum.photos/200/300", "Nantes", "2024-09-23", 11), 
("Montre connectée", "Montre connectée Garmin, parfait état, autonomie de 5 jours.", "Nathalie Gauthier", 120, "https://picsum.photos/200/300", "Lille", "2024-09-23", 6),
("Vélo enfant", "Vélo enfant 24 pouces, bon état, parfait pour débuter.", "Thomas Lefevre", 90, "https://picsum.photos/200/300", "Rennes", "2024-09-23", 5), 
("Télévision Samsung 4K", "Télévision Samsung 4K, 55 pouces, excellent état.", "Valérie Girard", 400, "https://picsum.photos/200/300", "Strasbourg", "2024-09-23", 6), 
("Poussette Bébé Confort", "Poussette pliable Bébé Confort, très légère et pratique.", "Mathieu Rousseau", 180, "https://picsum.photos/200/300", "Grenoble", "2024-09-23", 9), 
("Machine à café Nespresso", "Machine à café Nespresso, très bon état, fonctionne parfaitement.", "Laura Fontaine", 60, "https://picsum.photos/200/300", "Montpellier", "2024-09-23", 8), 
("Guitare acoustique", "Guitare acoustique Yamaha, parfait état, idéale pour débutants.", "David Laurent", 220, "https://picsum.photos/200/300", "Toulon", "2024-09-23", 10), 
("Lampe de bureau", "Lampe de bureau avec bras articulé, lumière LED, blanche.", "Emma Dupuis", 25, "https://example.com/images/lampe_bureau.jpg", "Clermont-Ferrand", "2024-09-23", 7), 
("Lave-vaisselle Bosch", "Lave-vaisselle Bosch, capacité 12 couverts, très silencieux.", "Antoine Marchand", 300, "https://picsum.photos/200/300", "Le Havre", "2024-09-23", 7), 
("VTT tout terrain", "VTT tout terrain pour adulte, suspension avant, bon état.", "Marie Pelletier", 350, "https://picsum.photos/200/300", "Angers", "2024-09-23", 5), 
("Lit bébé", "Lit bébé en bois, blanc, avec matelas inclus, très bon état.", "Pauline Thomas", 150, "https://picsum.photos/200/300", "Reims", "2024-09-23", 9), 
("Aspirateur Dyson", "Aspirateur sans fil Dyson V8, très bon état, vendu avec accessoires.", "Julien Leroy", 200, "https://picsum.photos/200/300", "Dijon", "2024-09-23", 7), 
("Piano électrique", "Piano électrique Yamaha, touches sensibles, parfait pour débutants.", "Chloé Caron", 500, "https://picsum.photos/200/300", "Amiens", "2024-09-23", 10), 
("Tondeuse électrique", "Tondeuse électrique Bosch, largeur de coupe 40 cm, très bon état.", "Hugo Dupuy", 150, "https://picsum.photos/200/300", "Nîmes", "2024-09-23", 8); 

COMMIT;
