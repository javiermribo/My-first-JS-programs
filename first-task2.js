/*let arrayWords = ['mesa', 'avenida', 'computadora', 'alimento', 'bebida', 'intercontinental', 'diccionarios'];

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


//EJERCICIO DE MESES
/*Nota para Luis: Hola Luis, como verás logré hacer lo que quería (bien por mi :D). 
Seguramente el código se puede mejorar. Atte. Javi*/

let theMonthsOfTheYear = [
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
    } else console.log(theMonthsOfTheYear[index] + " es un mes impar");
  }
}

monthsOfTheYear(theMonthsOfTheYear);