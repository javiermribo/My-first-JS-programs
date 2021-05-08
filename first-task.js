//TAREA 1

/* const userNumber1 = parseInt(prompt("Ingresa un numero"));
const userNumber2 = parseInt(
  prompt("Ingresa otro numero para obtener el mayor")
);

let numberChecker = function numberChecker(userNumber1, userNumber2) {
  if (userNumber1 > userNumber2) {
    console.log("El primer valor ingresado es mayor");
  } else if (userNumber2 > userNumber1) {
    console.log("El segundo valor ingresado es mayor");
  } else {
    console.log("Ambos valores son iguales");
  }
};

numberChecker(userNumber1, userNumber2); */

//TAREA 2

/* const userArray = [];

 for (let i = 0; i < 5; i++) {
  const userInput = parseInt(prompt("Ingresa un número, hasta llegar a un maximo de cinco valores"));
  userArray.push(userInput);
}

for (let numbers of userArray) {
  if (numbers % 2 === 0) {
    console.log(numbers, "El valor, es un número par");
  } else if (numbers % 2 === 1) {
    console.log(numbers, "El valor, es un número impar");
  }
}
 */

//TAREA 3

/* const randomArrayElements = [];

for (let i = 0; i < 5; i++) {
  const userInput = parseInt(
    prompt("Ingresa un número, hasta llegar a un maximo de cinco valores")
  );
  randomArrayElements.push(userInput);
}

let plusOp = randomArrayElements.reduce(function (a, b) {
  return a + b;
});

let splitOp = plusOp / 5;

alert("El promedio de los valores ingresados es " + splitOp);
 */

//TAREA 4

/* const firstUserArray = [];

for (let i = 0; i < 7; i++) {
  const userInput = parseInt(
    prompt("Ingresa un número, hasta llegar a un maximo de siete valores")
  );
  firstUserArray.push(userInput);
}

//Utilizando filter
let topTenUserArray2 = firstUserArray.filter((number) => number >= 10);

alert("Los números mayores a diez son los siguientes: " + topTenUserArray2); */

//Utilizando for e if
/* const topTenUserArray = [];

for (let i = 0; i < firstUserArray.length; i++) {
  if (firstUserArray[i] >= 10) {
    topTenUserArray.push(firstUserArray[i]);
  }
} */

/* Con length, en este caso, le indicamos a for que i sea menor al n° de elementos de esa variable. 
En if inidcamos que aquellos elementos de firstUserArray mayores a 10,
sean guardados en topTenUserArray, utilizando push, y entre parentesis de que variable se tomarán 
esos valores, junto con [i] que representa c/ unidad y su valor. */

//TAREA 5

/* let trueFalseArray = [
  true,
  false,
  false,
  true,
  true,
  true,
  false,
  false,
  true,
  false,
  false,
];

const trueFalseArrayResult = [];

for (let i = 0; i < trueFalseArray.length; i++) {
  if (trueFalseArray[i] === true) {
    trueFalseArrayResult.push(trueFalseArray[i]);
  }
}

//let trueFilter = trueFalseArray.filter((value) => value === true);

console.log("La cantidad de valores true, es: " + trueFalseArrayResult.length);
//console.log("La cantidad de valores true, es: " + trueFilter.length); */

//TAREA 6

/* const worldArea = 510000000;

const countryProperties = { countryName: "Thailand", area: 513115 };

let opCalc = (countryProperties.area * 100) / worldArea;

alert("Tailandia ocupa el %" + opCalc + " de la Tierra");
 */
