function palindrome () {
  let userInput = prompt('Ingresa una palabra y descubre si es un palindromo');
  let invert = userInput.split('').reverse().join('');
  return invert === userInput;
}

//console.log('¿Es un palindromo? ' + palindrome());

