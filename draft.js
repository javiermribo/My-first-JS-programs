let exampleArray = [
  { producto: "Televisor", marca: "Philips", modelo: "TX-100", precio: 35000 },
  { producto: "Celular", marca: "Xiaomi", modelo: "Mi-A2", precio: 30000 },
  { producto: "Lavarropa", marca: "Drean", modelo: "M550", precio: 45000 },
  { producto: "Horno", marca: "Eslabon de lujo", modelo: "X-150", precio: 65000 }
];

let productsWithDiscount = exampleArray.map (item => {
  if(item.precio < 36000) return item; //Se retorna los productos cuyo precio son menores a 36000
  else return {
    ...item,
    precio: item.precio * 0.9 } //Se retorna una copia de los precios, a los cuales se le aplica el descuento
})

let cheapProducts = item => item.precio < 36000;
let myCheapProducts = exampleArray.filter(cheapProducts);

/*Las dos variables anteriores, son lo mismo que la de abajo */
let isCheap = exampleArray.filter(item => item.precio < 36000);

let isExpensive = item => !cheapProducts(item); //! Devuelve valor booleano. El valor final es la negación
let myExpensiveProducts = exampleArray.filter(isExpensive);

let totalAmount = exampleArray.reduce((a, b) => {
  return a + b.precio
}, 0);

/* Dos formas distintas de escribir la variable anterior 

let totalAmount = exampleArray.reduce ((a, b) => a + b, 0);
let acumulator = (a, b) => a + b;

let totalAmount2 = exampleArray.reduce (acumulator, 0)*/

function userTopTen() {
  const firstUserArray = [];

  for (let i = 0; i < 7; i++) {
    const userInput = parseInt(
      prompt("Ingresa un número, hasta llegar a un maximo de siete valores")
    );
    firstUserArray.push(userInput);
  }
  firstUserArray.map(number => {
    if(number >= 10){
      return alert('Los números mayores a diez son los siguientes: ' + number);
    }
  })

  //let topTenUserArray2 = firstUserArray.filter((number) => number >= 10);
  //alert("Los números mayores a diez son los siguientes: " + topTenUserArray2);
}

//userTopTen()

/* const selectingBtnId1 = document.querySelector('#btn-id1');
selectingBtnId1.addEventListener('click', () => {
  return alert('Hiciste click en el botón')
}) */

const selectingForm = document.querySelector('#my-form-id');
const selectingUserName = document.querySelector('#username');
const selectingTextField = document.querySelector('#textfield');
const selectingBtnForm = document.querySelector('#btn-submit');

/* selectingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Homero, quiero saber que haces al salir del trabajo');
  console.log(username.value, textfield.value); 
}) */

selectingUserName.addEventListener('blur', () => {
  if(username.value.length === 0) {
    selectingUserName.style.border = '2px solid red';
  }
})

/* selectingForm.addEventListener('submit', event => {
  event.preventDefault();
  if(username.value.length === 0 && selectingTextField.value.length === 0) {
    const errorAlert = document.createElement('p');
    errorAlert.innerText = 'El formulario donde nada puede malir sal';
    selectingForm.append(errorAlert);
    errorAlert.style.background = 'yellow';
  }
}) */

const theParent = document.querySelector('#divp1');
const referenceItem = document.querySelector('#username');
const creatingLabel = document.createElement('label');
creatingLabel.setAttribute('for', 'username');
creatingLabel.textContent = 'Nombre de usuario';

theParent.insertBefore(creatingLabel, referenceItem);

const theParent2 = document.querySelector("#divp2");
const referenceItem2 = document.querySelector("#textfield");
const creatingLabel2 = document.createElement("label");
creatingLabel2.setAttribute("for", "textfield");
creatingLabel2.textContent = "Comentario";

theParent2.insertBefore(creatingLabel2, referenceItem2);

function practiceFn (event) {
  if(event.type === 'click') {
    event.target.innerText = 'Un botón muy, muy lindo'
  } else if(event.type === 'dblclick') {
    event.target.innerText = 'Hiciste click sobre un bonito botón'
  }
}

//Evento semántico 

const selectingCuteBtn = document.querySelector('#cuteBtn');
cuteBtn.onclick = practiceFn;
cuteBtn.ondblclick = practiceFn;
