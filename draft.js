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
