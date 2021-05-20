function palindrome () {
  let userInput = prompt('Ingresa una palabra y descubre si es un palindromo');
  let invert = userInput.split('').reverse().join('');
  return invert === userInput;
}

//console.log('¿Es un palindromo? ' + palindrome());


function letsPlay(level2) {
  let randomNumber = Math.round(Math.random() * 5);
  let userAttempt = parseInt(prompt('Para pasar al siguiente nivel, adivina el número secreto'));
  if(userAttempt === randomNumber) {
    level2();
  } else {
    return alert('GAME OVER');
  }
}

function level2 () {
  let rightAnswer = 'B';
  let userAttempt = prompt('No estoy vivo, no tengo huesos pero ando y ando y no me canso ¿Qué soy? A.Auto B.Pantalón C.Pez').toUpperCase();
  if(userAttempt === rightAnswer) {
    return alert('¡Ganaste!')
  } else {
    return alert('GAME OVER')
  }
}

letsPlay(level2);
