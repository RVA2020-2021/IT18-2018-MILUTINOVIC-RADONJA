DROP TABLE IF EXISTS proizvodjac CASCADE;
DROP TABLE IF EXISTS racun CASCADE;
DROP TABLE IF EXISTS stavka_racuna CASCADE;
DROP TABLE IF EXISTS proizvod CASCADE;

DROP SEQUENCE IF EXISTS proizvod_seq CASCADE;
DROP SEQUENCE IF EXISTS racun_seq CASCADE;
DROP SEQUENCE IF EXISTS proizvodjac_seq CASCADE;
DROP SEQUENCE IF EXISTS stavka_racuna_seq CASCADE;

CREATE SEQUENCE proizvod_seq INCREMENT BY 1;
CREATE SEQUENCE racun_seq INCREMENT BY 1;
CREATE SEQUENCE proizvodjac_seq INCREMENT BY 1;
CREATE SEQUENCE stavka_racuna_seq INCREMENT BY 1;

CREATE TABLE proizvodjac (
id integer not null,
naziv varchar(50),
adresa varchar(200),
kontakt varchar(100)
);

CREATE TABLE racun (
id integer not null,
	datum date,
	nacin_placanja varchar(200)
);

CREATE TABLE proizvod (
id integer not null,
naziv varchar(50),
proizvodjac int not null
);

CREATE TABLE stavka_racuna (
id integer not null,
redni_broj integer,
kolicina numeric,
jedinica_mere varchar(50),
cena numeric,
racun int not null,
proizvod int not null
);

ALTER TABLE proizvodjac
ADD CONSTRAINT pk_proizvodjac PRIMARY KEY(id);
ALTER TABLE racun
ADD CONSTRAINT pk_racun PRIMARY KEY(id);
ALTER TABLE proizvod
ADD CONSTRAINT pk_proizvod PRIMARY KEY(id);
ALTER TABLE stavka_racuna
ADD CONSTRAINT pk_stavka_racuna PRIMARY KEY(id);

ALTER TABLE proizvod 
ADD CONSTRAINT fk_proizvod_proizvodjac FOREIGN KEY (proizvodjac) REFERENCES proizvodjac(id);
ALTER TABLE stavka_racuna 
ADD CONSTRAINT fk_stavka_racuna_racun FOREIGN KEY (racun) REFERENCES racun(id);
ALTER TABLE stavka_racuna
ADD CONSTRAINT fk_stavka_racuna_proizvod FOREIGN KEY (proizvod) REFERENCES proizvod(id);

CREATE INDEX idxpk_proizvodjac ON proizvodjac(id);
CREATE INDEX idxpk_racun ON racun(id);
CREATE INDEX idxpk_stavka_racuna ON stavka_racuna(id);
CREATE INDEX idxpk_proizvod ON proizvod(id);

CREATE INDEX idxfk_proizvod_proizvodjac ON proizvod(proizvodjac);
CREATE INDEX idxfk_stavka_racuna_racun ON stavka_racuna(racun);
CREATE INDEX idxfk_stavka_racuna_proizvod ON stavka_racuna(proizvod);
-- SCHEMA: public

-- DROP SCHEMA public ;

-- CREATE SCHEMA public
   -- AUTHORIZATION postgres;

-- COMMENT ON SCHEMA public
   -- IS 'standard public schema';

-- GRANT ALL ON SCHEMA public TO PUBLIC;

-- GRANT ALL ON SCHEMA public TO postgres;