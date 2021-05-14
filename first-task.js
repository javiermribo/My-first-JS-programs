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

alert('Tailandia ocupa el %' + opCalc.toFixed(2) + ' de la Tierra');
 */

 //CALLBACKS

/*  function imTheFirst (imTheSecond) {
   console.log('Soy la primera función con callback');
   imTheSecond();
 }

 function imTheSecond () {
   console.log('Soy la segunda función');
 }

 imTheFirst(imTheSecond);
 */
 //Misma callback con setTimeout 

/*   function imTheFirst1(imTheSecond2) {
    setTimeout(function () {
      console.log('Soy la primera función con callback');
      imTheSecond2();
    }, 5000);
  }

  function imTheSecond2() {
    console.log('Soy la segunda función');
  }

  imTheFirst1(imTheSecond2); */

  //Intento del callback n°3 

/*   function firstQuote () {
    alert('Vamos a cortarlo en dos y a manosearle el corazón');
  }

  function secondQuote () {
    setTimeout(function () {
      alert('¿Por que lo dice tan brusco?');
    }, 3000);
  }

  function quoteCaller (cb) {
    cb(firstQuote, secondQuote);
  }

  quoteCaller(firstQuote);
  quoteCaller(secondQuote); */

  //Practicando forEach

/*   const phoneList = [
    {brand:'Xiaomi', model:'Mi A2', price: 45000},
    {brand:'Motorola', model:'G8 Plus', price: 49600},
    {brand:'Samsung', model:'S20 FE', price: 78333},
    {brand:'Huawei', model:'´80', price:74999},
    {brand:'Apple', model:'iPhone 12', price: 120325},
  ]

  phoneList.forEach (phone => {
    console.log(`The price for ${phone.brand} ${phone.model} is ${phone.price} ARS`)
  }) */

  //Practicando Map

/*     const myPhoneList = [
      { brand: "Xiaomi", model: "Mi A2", price: 45000 },
      { brand: "Motorola", model: "G8 Plus", price: 49600 },
      { brand: "Samsung", model: "S20 FE", price: 78333 },
      { brand: "Huawei", model: "´80", price: 74999 },
      { brand: "Apple", model: "iPhone 12", price: 120325 },
    ];

    const newList = myPhoneList.map(item => { return {price:item.price * 2} }); 
    //Fn expresiva. Se crea un nuevo array con los valores modificados, respetando el principio de inmutabilidad (No se modifica el array original)
    const phoneNames = myPhoneList.map(phone => phone.brand);

    console.log(newList)
    console.log(phoneNames)
 */
    //Practicando filter

/*          const my3rdPhoneList = [
          { brand: "Xiaomi", model: "Mi A2", price: 45000 },
          { brand: "Xiaomi", model: "Mi A3", price: 45000 },
          { brand: "Xiaomi", model: "Redmi Note 9", price: 45000 },
          { brand: "Motorola", model: "G8 Plus", price: 49600 },
          { brand: "Samsung", model: "S20 FE", price: 78333 },
          { brand: "Huawei", model: "´80", price: 74999 },
          { brand: "Apple", model: "iPhone 12", price: 120325 },
        ]; */

/*         const newList1 = my3rdPhoneList.filter(item => {
          return item.brand === 'Xiaomi';
          return item.price > 50000
        }); */

/*         console.log(newList1); 

        const itemIndex = my3rdPhoneList.findIndex(item => {
          return item.brand === 'Motorola';
        })

        console.log(itemIndex);

        const checkingPhoneList = my3rdPhoneList.some(item => {
          return item.price < 35000;
        })

        console.log(checkingPhoneList);

        let initValue = 0;

        const totalPrice = my3rdPhoneList.reduce(function(currentTotal, item) {
          return currentTotal + item.price;
        }, initValue);

        console.log(totalPrice); */

        //EJERCICIO 3. CAPITALIZE THE NAMES

        const ourNames = [`alberto`, `cintia`, `rossana`, `luisa`];
        
        function arrayFunction (names) { 
        const capNamesArray = [];
        for (let i = 0; i < names.length; i++) {
             capNamesArray.push(
               names[i].charAt(0).toUpperCase() + names[i].slice(1)
             );
            }
            return capNamesArray;
          }

        console.log(arrayFunction(['javier', 'flor', 'soledad', 'gimena', 'juan', 'braulio', 'alejandro']));
        console.log(arrayFunction(ourNames)); //Si una función cuenta con varios parametros, al ejecutarla, se debe incluirlos

        //EJERCICIO 4. BUSCANDO A NEMO

        const userAttemptsLog = [];

        const userAttempt = parseInt(prompt('Adivina donde se encuentra Nemo. Ingresa un número entre 0 y 6.'));
        userAttemptsLog.push(userAttempt);


        let nemoIsMissing = ['nimo', 'namo', 'nomo', 'numo', 'nemo', 'name', 'nume']

        const findingNemo = nemoIsMissing.findIndex(item => {
          return item === 'nemo';
        });

        function result(userAttempt, findingNemo) {
          if (userAttempt === findingNemo) {
            alert('Encontré a Nemo en la posición ' + findingNemo);
          } else if (userAttempt !== findingNemo) {
            alert('No pude encontrar a Nemo')
          }
        }

        result(userAttempt, findingNemo);