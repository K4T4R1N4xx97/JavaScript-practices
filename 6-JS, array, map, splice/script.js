"use strict";

//task 1 - map metoda
const racuni = [125, 555, 44];

const izracun = racuni.map((iznos)=>{
  if(50<=iznos && iznos<=300 ){
  return iznos + (iznos * 0.15);
  } else if (iznos > 300){
  return iznos + (iznos * 0.20);
  } else{
  return iznos;
  }
});

const finalniIznos = izracun;
console.log(finalniIznos);


// task 2 - map metoda i forEach metoda
 const objektITM = [
  {ime:"Marko", tezina:78, visina:1.69,},
  {ime:"Josip", tezina:92, visina:1.95,}
  ];
const calcITM = objektITM.map((itm)=>{
 return itm.tezina/itm.visina**2;
});
console.log(`Josipov ITM ${calcITM[1]} je manji od Markovog ${calcITM[0]}!`);

// task 2 - drugi pristup
const drugiITM = [];
objektITM.forEach((obj) =>{
const formulaITM = obj.tezina/obj.visina**2;
drugiITM.push(formulaITM);
});
console.log(`Markov ITM ${drugiITM[0]} je veći od Josipovog ${drugiITM[1]}!`)

 
// task 3
 const album = [
  {
    umjetnik: "Metallica",
    naslov: "Master of Puppets",
    godina: 1986,
    format: ["CD", "8T", "LP"],
  },
  ];
 
const noviAlbum = {
  umjetnik: "Bob Marley",
  naslov: "Live!",
  godina: 1975,
  format: ["8T", "LP"],
};

album.splice(1,0,noviAlbum);
console.log(album);

// task 4 - for, if/else
const imena = ["Marija", "Slavica", "Mario", "Katarina", "Tihomir"];
for(let i = 0; i < imena.length; i++){
  if (imena[i]==="Katarina"){
    console.log("moje ime");
  } else {
    console.log(imena[i]);
  }
};

