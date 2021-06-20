CREATE DATABASE proiect ENCODING 'UTF-8' LC_COLLATE 'ro-RO-x-icu' LC_CTYPE 'ro_RO' TEMPLATE template0;

CREATE USER 'avra' WITH ENCRYPTED PASSWORD 'pogg3rs';
GRANT ALL PRIVILEGES ON DATABASE proiect TO avra
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO avra;

CREATE TYPE categorie_joc AS CATEG('RPG','MMO','Action','Horror','Fantasy');


CREATE TABLE IF NOT EXISTS joc
(
    id_joc integer NOT NULL,
    nume_joc varchar(50) NOT NULL,
    descriere TEXT NOT NULL,
    imagine varchar(50) NOT NULL,
    pret integer,
    data_de_lansare date,
    scor_joc integer,
    ore_de_gameplay integer NOT NULL,
    reducere boolean NOT NULL,
    gen_joc CATEG NOT NULL,
    restrictie_de_varsta integer NOT NULL,
    premii_castigate varchar(50),
    numarul-premiilor integer,
    CONSTRAINT joc_pkey PRIMARY KEY (id_joc)
)

    TABLESPACE pg_default;

ALTER TABLE joc
    OWNER to postgres;