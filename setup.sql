CREATE DATABASE `chatbot` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE `chatbot`;

CREATE TABLE `qna` (
    `id_qna` INT AUTO_INCREMENT,
    `question` TEXT,
    `answer` TEXT,
    PRIMARY KEY (`id_qna`));


CREATE TABLE `history` (
    `id_history` INT AUTO_INCREMENT,
    `user` INT,
    `question` TEXT,
    `answer` TEXT,
    PRIMARY KEY (`id_history`)); 