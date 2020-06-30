'use strict';

console.log('>> Ready :)');

//CONST AND CLASSLIST

const title1 = document.querySelector('h1');
const title2 = document.querySelector('h2');
title2.classList.add('js-title-2');
const box = document.querySelector('input');
box.classList.add('js-box');
const btn = document.querySelector('button');
btn.classList.add('js-btn');
const clueBox = document.querySelector('div');
clueBox.classList.add('js-clue-box');
const attemptBox = document.querySelector('.js-attempt-box');
attemptBox.classList.add('div-style');
const randomNumber = getRandomNumber(100);

//CONTENT
title1.innerHTML = 'Adivina el número';
title2.innerHTML = 'Introduce aquí tu número';
btn.innerHTML = 'Prueba';
clueBox.innerHTML = 'Pista:escribe el número y dale a prueba';
attemptBox.innerHTML = 'Número de intentos:0';

//RANDOM NUMBER

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(getRandomNumber(100));

//PINCHAR CLICK Y QUE APAREZCA EN LA CONSOLA

function handleUpdateClick() {
  console.log(box.value);
}

btn.addEventListener('click', handleUpdateClick);

//Comparar el número que la jugadora ha escrito en el input con el número aleatorio, y pintar las pistas
//correspondientes en la pantalla.
// Cuando la jugadora introduzca un número mayor que el aleatorio y pulse en Prueba: Demasiado alto.

function compare() {
  if (box.value === randomNumber) {
    console.log('Has ganado campeona');
    clueBox.innerHTML = 'Has ganado campeona';
  } else if (box.value > randomNumber) {
    console.log('Número demasiado alto');
    clueBox.innerHTML = 'Número demasiado alto';
  } else if (box.value < randomNumber) {
    console.log('Número demasiado bajo');
    clueBox.innerHTML = 'Número demasiado bajo';
  }
}
btn.addEventListener('click', compare);

// Cuando la jugadora introduzca un número menor que el aleatorio y pulse en Prueba: Demasiado
// bajo.
// Cuando la jugadora introduzca un número igual que el aleatorio y pulse en Prueba: Has ganado
// campeona!!!
// Cuando la jugadora no introduzca un número válido y pulse en Prueba: El número debe estar
// entre 1 y 100.
// En la parte inferior debe aparecer el número de veces que se ha pulsado el bóton Prueba.

//# sourceMappingURL=main.js.map
