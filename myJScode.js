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

const randomArrayElements = [];

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
