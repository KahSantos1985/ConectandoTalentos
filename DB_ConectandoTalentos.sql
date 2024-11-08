CREATE DATABASE ConectandoTalentos;
USE ConectandoTalentos;

CREATE TABLE prestador (
    id_prestador INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sobrenome VARCHAR(255) NOT NULL,
    celular VARCHAR(11) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE contratante (
    id_contratante INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sobrenome VARCHAR(255) NOT NULL,
    celular VARCHAR(11) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE servico (
    id_servico INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_servico VARCHAR(255) NOT NULL,
    descricao_servico VARCHAR(255) DEFAULT '',
    id_prestador INT NOT NULL,
    FOREIGN KEY (id_prestador) REFERENCES prestador(id_prestador)
);

CREATE TABLE contrataServico (
    id_prestacao INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dt_inicio DATE NOT NULL,
    dt_prev_fim DATE NOT NULL,
    dt_fim DATE,
    id_contratante INT NOT NULL,
    id_servico INT NOT NULL,
    FOREIGN KEY (id_contratante) REFERENCES contratante(id_contratante),
    FOREIGN KEY (id_servico) REFERENCES servico(id_servico)
);

-- Exemplos de dados de inserção:
INSERT INTO prestador (nome, sobrenome, celular, email, senha)
VALUES ("Lucas", "Silva", "11987654321", "lucas@email.com", "senha123");

INSERT INTO contratante (nome, sobrenome, celular, email, senha)
VALUES ("Maria", "Oliveira", "11976543210", "maria@email.com", "senha123");

INSERT INTO servico (nome_servico, descricao_servico, id_prestador)
VALUES ("Eletricista", "Instalação de tomadas e fiação elétrica", 1);

INSERT INTO contrataServico (dt_inicio, dt_prev_fim, id_contratante, id_servico)
VALUES ("2024-11-08", "2024-11-10", 1, 1);
