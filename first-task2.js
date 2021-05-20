/* let arrayWords = ['mesa', 'avenida', 'computadora', 'alimento', 'bebida', 'intercontinental', 'diccionarios'];

let wordsLengthValues = [];

function theLargerLength(arrayWords) {
  for (i = 0; i < arrayWords.length; i++) {
    wordsLengthValues.push(arrayWords[i].length);
  }
}
theLargerLength(arrayWords);

let theMaxValue = [];

function maxValue(wordsLengthValues) {
  for (i = 0; i < wordsLengthValues.length; i++) {
    if(wordsLengthValues[i] > theMaxValue) {
      theMaxValue = wordsLengthValues[i];
    }
  }
}
maxValue(wordsLengthValues);

function comparatorValues () {
  for (let word of arrayWords) {
    if(word.length === theMaxValue) {
      console.log(word + ' es la palabra mas larga');
    }
  }
}
comparatorValues(); */

/* let arrayWords = [
  "mesa",
  "avenida",
  "computadora",
  "alimento",
  "bebida",
  "intercontinental",
  "diccionarios",
];

function findLongestWord (arrayWords) {
  const longestWord = arrayWords.reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, ' ');
  return longestWord
}

console.log(findLongestWord(arrayWords)); */

//EJERCICIO DE MESES

/* let theMonthsOfTheYear = [
  `Enero`,
  `Febrero`,
  `Marzo`,
  `Abril`,
  `Mayo`,
  `Junio`,
  `Julio`,
  `Agosto`,
  `Septiembre`,
  `Octubre`,
  `Noviembre`,
  `Diciembre`,
];

function monthsOfTheYear(theMonthsOfTheYear) {
  for (let index = 0; index < theMonthsOfTheYear.length; index++) {
    if (index % 2 === 1) {
      console.log(theMonthsOfTheYear[index] + " es un mes par");
    } else {console.log(theMonthsOfTheYear[index] + " es un mes impar")};
  }
}

monthsOfTheYear(theMonthsOfTheYear); */

/* const pcontainer = document.querySelector("#pcontainer");
const newSubtitle = document.createElement("h2");
newSubtitle.textContent = "Soy un h2 saludando desde el DOM";
pcontainer.appendChild(newSubtitle);

const newButton = document.createElement("button");
const referenceGroup = document.querySelector("#pcontainer #p2");
const pcontainer2 = document.querySelector("#pcontainer");
newButton.textContent = "Soy un boton creado desde el DOM";
pcontainer2.insertBefore(newButton, referenceGroup); */


