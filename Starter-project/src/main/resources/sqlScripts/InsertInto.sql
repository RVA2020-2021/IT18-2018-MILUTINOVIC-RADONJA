INSERT INTO proizvodjac
	values (NEXTVAL('proizvodjac_seq'), 'Dositeja Obradovic 6', '021350350', 'Carnex');
INSERT INTO proizvodjac
	values (NEXTVAL('proizvodjac_seq'),  'Njegoseva 3', '123425630', 'Vital');
INSERT INTO proizvodjac
	values (NEXTVAL('proizvodjac_seq'),  'Filipa Visnjica 4', '123123132', 'Medela');
	
INSERT INTO racun
	values(NEXTVAL('racun_seq'), to_date('01.03.2020.','dd.mm.yyyy.'), 'gotovina');
INSERT INTO racun
	values(NEXTVAL('racun_seq'), to_date('01.03.2019.','dd.mm.yyyy.'), 'gotovina');
INSERT INTO racun
	values(NEXTVAL('racun_seq'), to_date('02.03.2020.','dd.mm.yyyy.'), 'kartica');
	
INSERT INTO proizvod
	values(NEXTVAL('proizvod_seq'), 'pašteta', 1);
INSERT INTO proizvod
	values(NEXTVAL('proizvod_seq'), 'ulje', 51);
INSERT INTO proizvod
	values(NEXTVAL('proizvod_seq'), 'štrudle', 101);
	
--1 je sifra za KG, 3 je sifra za L, previse sam umoran za ovo

INSERT INTO stavka_racuna
	values(NEXTVAL('stavka_racuna_seq'), 100000, 'kg', 200, 10, 1, 1);
INSERT INTO stavka_racuna
	values(NEXTVAL('stavka_racuna_seq'),  200000, 'l', 10 , 1500, 51, 51);
INSERT INTO stavka_racuna
	values(NEXTVAL('stavka_racuna_seq'),  30000, 'kg', 150, 1, 101, 101);