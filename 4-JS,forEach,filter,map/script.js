"use strict";

// task 1
const brojLovaca1 = 3840;
const brojLovaca2 = 500;
const brojLovaca3 = 1440;

const zadatak1 = (postotak) => (postotak/7900) * 100;

const postotakLovaca1 = zadatak1(brojLovaca1);
const postotakLovaca2 = zadatak1(brojLovaca2);
const postotakLovaca3 = zadatak1(brojLovaca3);

console.log(postotakLovaca1, postotakLovaca2, postotakLovaca3);


// task 2
const osoba = [
    "Davor",
    "Horvat",
    30,
    "Postar",
    ["luka", "bernarda", "zvonimir", "branimir"],
    true,
 ];
 const tipovi = [];
 for (let i = 0; i < osoba.length; i++){
  tipovi[i] = typeof osoba[i];  
 };
 console.log(tipovi);


 // task 3 - filter metoda
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 const parniBrojevi = numbers.filter((broj) =>{
    return broj % 2 === 0;
});
console.log(parniBrojevi);


// task 4 - filter metoda
const auti = [
    { ime: "Mercedes", kategorija: "limuzina", godinaProizvodnje: 2015 },
    { ime: "Audi", kategorija: "limuzina", godinaProizvodnje: 2017 },
    { ime: "Ford", kategorija: "karavan", godinaProizvodnje: 2016 },
    { ime: "Volvo", kategorija: "SUV", godinaProizvodnje: 2021 },
    { ime: "BMW", kategorija: "cabriolet", godinaProizvodnje: 2019 },
  ]; 
  const limuzine = auti.filter((auto) => auto.kategorija === "limuzina");
 console.log(limuzine);


 // task 5 - map metoda
 const lista = [
    {proizvod: "bicikl", cijena: 1500},
    {proizvod: "frizider", cijena: 2500},
    {proizvod: "perilica", cijena: 2000},
    {proizvod: "romobil", cijena: 800},
    {proizvod: "automobil", cijena: 60000},
    {proizvod: "tipkovnica", cijena: 80},
];
const listaProizvoda = lista.map((objekt) => objekt.proizvod);
console.log(listaProizvoda);


