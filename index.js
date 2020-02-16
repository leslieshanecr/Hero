const superheroes = require('superheroes');
const supervillains = require('supervillains');

var mySuperHeroName = superheroes.random();
var mySuperVillainName = supervillains.random();

console.log(mySuperHeroName);
console.log(mySuperVillainName);

const Quote = require('inspirational-quotes');
var myQuote = Quote.getRandomQuote();
console.log(myQuote);

const lib = require('thoughts');
var myThoughts = lib.random();
console.log(myThoughts);

const Movie = require('popular-movie-quotes');
var myMovie = Movie.getRandomQuote();
console.log(myMovie); 

const famousLastWords = require('famous-last-words');
var myLastWords = famousLastWords[(Math.floor(Math.random()*15))];
console.log(myLastWords);

//copy information to a file
const fs = require("fs");
fs.writeFileSync("file1.txt", mySuperHeroName);
fs.writeFileSync("file2.txt", mySuperVillainName);
fs.writeFileSync("file3.txt", myQuote);
fs.writeFileSync("file4.txt", myMovie);
fs.writeFileSync("file5.txt", myLastWords);
