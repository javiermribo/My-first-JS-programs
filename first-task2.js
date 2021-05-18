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

function monthsOfTheYear (month) {
  for (i = 0; i < month.length; i++) {
    console.log(month[i] + ` es un gran mes`);
  }
}

monthsOfTheYear([
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
]);

/*let myOddNumbers = [];

  function oddNumber () {
    for (let i = 0; i <= 12; i++) {
    if(i % 2 === 1) {
      myOddNumbers.push(i)
    }
  }
}
oddNumber();

let monthsOfTheYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

function oddMonth (monthsOfTheYear) {
  for (month in monthsOfTheYear) {
    if (monthsOfTheYear[i] === myOddNumbers[i]) {
      console.log(monthsOfTheYear[i] + ` es de los mejores meses`);
    } else {
      console.log(monthsOfTheYear[i] + ` es un buen mes`);
    }
  }
}
oddMonth(monthsOfTheYear);*/