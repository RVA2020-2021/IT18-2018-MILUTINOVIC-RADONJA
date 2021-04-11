INSERT INTO proizvodjac
	values (1, 'Carnex', 'Dositeja Obradovic 6', '021350350');
INSERT INTO proizvodjac
	values (2, 'Vital', 'Njegoseva 3', '123425630');
INSERT INTO proizvodjac
	values (3, 'Medela', 'Filipa Visnjica 4', '123123132');
	
INSERT INTO racun
	values(1, to_date('01.03.2020.','dd.mm.yyyy.'), 'gotovina');
INSERT INTO racun
	values(2, to_date('01.03.2019.','dd.mm.yyyy.'), 'gotovina');
INSERT INTO racun
	values(3, to_date('02.03.2020.','dd.mm.yyyy.'), 'kartica');
	
INSERT INTO proizvod
	values(1, 'pašteta', 1);
INSERT INTO proizvod
	values(2, 'ulje', 2);
INSERT INTO proizvod
	values(3, 'štrudle', 3);
	
--1 je sifra za KG, 3 je sifra za L, previse sam umoran za ovo

INSERT INTO stavka_racuna
	values(1, 10, 100, 1, 100000, 1, 1);
INSERT INTO stavka_racuna
	values(2, 20, 300, 3, 15000, 2, 2);
INSERT INTO stavka_racuna
	values(3, 30, 50, 1, 10000, 3, 3);