CREATE DATABASE `chatbot` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE `chatbot`;

CREATE TABLE `qna` (
    `id_qna` INT AUTO_INCREMENT,
    `question` TEXT,
    `answer` TEXT,
    PRIMARY KEY (`id_qna`));


CREATE TABLE `history` (
    `id_history` INT AUTO_INCREMENT,
    `id_chat` INT,
    `question` TEXT,
    `answer` TEXT,
    PRIMARY KEY (`id_history`)); 

CREATE TABLE `chat` (
    `id_chat` INT AUTO_INCREMENT,
    `topic` TEXT,
    PRIMARY KEY (`id_chat`));

INSERT INTO `chat` (topic)
VALUE ('Welcome!');