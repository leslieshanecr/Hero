const superheroes = require('superheroes');
const supervillains = require('supervillains');

var mySuperHeroName = superheroes.random();
var mySuperVillainName = supervillains.random();

console.log(mySuperHeroName);
console.log(mySuperVillainName);

const Quote = require('inspirational-quotes');
var myQuote = Quote.getRandomQuote();
console.log(myQuote);

//copy information to a file
const fs = require("fs");
fs.writeFileSync("file1.txt", mySuperHeroName);
fs.writeFileSync("file2.txt", mySuperVillainName);
fs.writeFileSync("file3.txt", myQuote);
