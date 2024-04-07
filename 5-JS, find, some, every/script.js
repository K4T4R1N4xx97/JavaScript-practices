"use strict";

// task 1 - find metoda
const lista = [
    {proizvod: "bicikl", cijena: 1500},
    {proizvod: "frizider", cijena: 2500},
    {proizvod: "perilica", cijena: 2000},
    {proizvod: "romobil", cijena: 800},
    {proizvod: "automobil", cijena: 60000},
    {proizvod: "tipkovnica", cijena: 80},
];

  const findLista = lista.find((auto) => auto.proizvod === "automobil");
console.log(findLista);

// task 2 - some metoda
const manjaCijena = lista.some((objekt) => objekt.cijena <=150);
console.log(manjaCijena);

// task 3 - every metoda
const manjaCijena2 = lista.every((objekt) => objekt.cijena <= 150);
console.log(manjaCijena2);
