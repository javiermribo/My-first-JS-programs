let arrayWords = ['mesa', 'avenida', 'computadora', 'alimento', 'bebida', 'intercontinental', 'diccionarios'];

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
comparatorValues();
