# Tubes 3 IF2211 STRATEGI ALGORITMA
> Aplikasi Chat GPT Sederhana dengan Menerapkan Algoritma String Matching
> Live demo [_here_](https://youtu.be/3Et_hr3oYcw). <br>
> App [_here_](https://tubes3-13521056-fe.vercel.app/)

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Usage](#usage)
* [Project Status](#project-status)
* [Acknowledgements](#acknowledgements)
* [Author](#contact)
<!-- * [License](#license) -->


## General Information
> Aplikasi ChatGPT sederhana dengan menerapkan pendekatan QA yang paling sederhana. Untuk menemukan pertanyaan yang paling mirip dengan input pengguna, memanfaatkan algoritma pencocokan string Knuth-Morris-Pratt (KMP) dan Boyer-Moore (BM) serta Regex untuk menentukan format dari pertanyaan.  

<!-- You don't have to answer all the questions - just the ones relevant to your project. -->


## Technologies Used/ Requirements
- Next.js   (https://nextjs.org/docs/getting-started/installation)
- Node.js   (https://nodejs.org/en/download)
- Mysql     (https://www.mysql.com/downloads/)
- Vs code   (https://code.visualstudio.com/download)


## Features
List the ready features here:
- Fitur pertanyaan teks (didapat dari database)
- Fitur kalkulator
- Fitur tanggal
- Tambah pertanyaan dan jawaban ke database
- Hapus pertanyaan dari database


## Screenshots
![Example screenshot](./img/gptathome.png)
<!-- If you have screenshots you'd like to share, include them here. -->


## Usage
### Alternativ 1: 
- Buka [link vercel app ini](https://tubes3-13521056-fe.vercel.app/)
#### nb: apabila terdapat kegagalan/kejanggalan pada hosting baik pada back-end, front-end atau database, harap gunakan alternativ 2.
### Alternativ 2:
- Pastikan semua requirements telah tersedia
- clone repository back-end ini dengan `git clone https://github.com/egijago/Tubes3_13521056` lalu buka branch local-hosting
- clone repository front-end dengan `git clone https://github.com/egijago/Tubes3_13521056_fe` lalu buka branch local-hosting
- setup database mysql lokal dengan memasukan query pada 'setup.sql'
- pastikan credential pada './src/DBController' benar
- masukkan `npm install` pada repository back-end dan front-end untuk menginstall dependencies, jika gagal hapus node_module dan package-lock.json
- masukkan `node index.js` pada repository back-end dan `npm run dev` pada repository front-end
- program dapat dilihat http://localhost:3000/


## Project Status
Project is:  _complete_ 


## Acknowledgements
Give credit here.
- This project was inspired by Chat GPT
- This project was based on [this tutorial](https://www.youtube.com/watch?v=V6Hq_EX2LLM&t=10670s).
- Terima Kasih banyak Kepada Asistean dan Dosen Mata Kuliah IF2211 Strategi Algoritma


## Author

|Nama |NIM|
|---|---|
|Daniel Egiant Sitanggang|13521056|
|Ilham Akbar|13521068|
|Asyifa Nurul Shafira|13521125|


<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->
