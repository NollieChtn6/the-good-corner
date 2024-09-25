-- SQLite

BEGIN;

INSERT INTO "ads" ("title", "description", "owner", "price", "picture", "location") VALUES
("Vélo de route", "Vélo de route en excellent état, peu utilisé, taille M.", "Alice Dupont", 350, "https://example.com/images/velo_1.jpg", "Paris"),
("Table basse en bois", "Table basse en bois massif, 100x50 cm, idéale pour salon.", "Marc Legrand", 120, "https://example.com/images/table_basse.jpg", "Lyon"),
("iPhone 12", "iPhone 12 en très bon état, 128 Go, sans rayures, vendu avec sa boîte d'origine.", "Camille Martin", 650, "https://example.com/images/iphone_12.jpg", "Marseille"),
("Chaise de bureau", "Chaise de bureau ergonomique, réglable en hauteur, bon état.", "Julie Bernard", 80, "https://example.com/images/chaise_bureau.jpg", "Toulouse"),
("Jeu vidéo PS5", "Jeu vidéo PS5 - FIFA 23, très peu utilisé, comme neuf.", "Pierre Lemoine", 40, "https://example.com/images/jeu_ps5.jpg", "Nice"),
("Canapé convertible", "Canapé convertible 3 places, tissu gris, très bon état.", "Sophie Moreau", 450, "https://example.com/images/canape_convertible.jpg", "Bordeaux"),
("Ordinateur portable HP", "Ordinateur portable HP, 8 Go RAM, 256 Go SSD, utilisé pour le télétravail.", "Lucas Robert", 500, "https://example.com/images/ordinateur_hp.jpg", "Nantes"),
("Montre connectée", "Montre connectée Garmin, parfait état, autonomie de 5 jours.", "Nathalie Gauthier", 120, "https://example.com/images/montre_garmin.jpg", "Lille"),
("Vélo enfant", "Vélo enfant 24 pouces, bon état, parfait pour débuter.", "Thomas Lefevre", 90, "https://example.com/images/velo_enfant.jpg", "Rennes"),
("Télévision Samsung 4K", "Télévision Samsung 4K, 55 pouces, excellent état.", "Valérie Girard", 400, "https://example.com/images/tv_samsung.jpg", "Strasbourg"),
("Poussette Bébé Confort", "Poussette pliable Bébé Confort, très légère et pratique.", "Mathieu Rousseau", 180, "https://example.com/images/poussette.jpg", "Grenoble"),
("Machine à café Nespresso", "Machine à café Nespresso, très bon état, fonctionne parfaitement.", "Laura Fontaine", 60, "https://example.com/images/nespresso.jpg", "Montpellier"),
("Guitare acoustique", "Guitare acoustique Yamaha, parfait état, idéale pour débutants.", "David Laurent", 220, "https://example.com/images/guitare.jpg", "Toulon"),
("Lampe de bureau", "Lampe de bureau avec bras articulé, lumière LED, blanche.", "Emma Dupuis", 25, "https://example.com/images/lampe_bureau.jpg", "Clermont-Ferrand"),
("Lave-vaisselle Bosch", "Lave-vaisselle Bosch, capacité 12 couverts, très silencieux.", "Antoine Marchand", 300, "https://example.com/images/lave_vaisselle.jpg", "Le Havre"),
("VTT tout terrain", "VTT tout terrain pour adulte, suspension avant, bon état.", "Marie Pelletier", 350, "https://example.com/images/vtt.jpg", "Angers"),
("Lit bébé", "Lit bébé en bois, blanc, avec matelas inclus, très bon état.", "Pauline Thomas", 150, "https://example.com/images/lit_bebe.jpg", "Reims"),
("Aspirateur Dyson", "Aspirateur sans fil Dyson V8, très bon état, vendu avec accessoires.", "Julien Leroy", 200, "https://example.com/images/aspirateur.jpg", "Dijon"),
("Piano électrique", "Piano électrique Yamaha, touches sensibles, parfait pour débutants.", "Chloé Caron", 500, "https://example.com/images/piano.jpg", "Amiens"),
("Tondeuse électrique", "Tondeuse électrique Bosch, largeur de coupe 40 cm, très bon état.", "Hugo Dupuy", 150, "https://example.com/images/tondeuse.jpg", "Nîmes");

COMMIT;
