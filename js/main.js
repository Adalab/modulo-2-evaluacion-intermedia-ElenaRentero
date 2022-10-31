'use strict';

const select = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const paragraph = document.querySelector('js-paragraph');
let random = 0;
let surenos = 2;
let orcos = 2;
let goblins = 2; 
let huargos = 3;
let trolls = 5;

// Funcion que recoge el valor de la opcion elegida por el usuario
function userSelection(){
    const selectValue = parseInt(select.value);
    return selectValue;
}

// Funcion que genera de manera aleatoria un número al entrar en la pagina
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

// Funcion que compara ambos valores
function compareOptions(selectValue, random){
    if (selectValue > random){
        console.log ("ganan los buenos")
    } else {
        console.log("ganan los malos")
    }
}

// Funcion manejadora
function handleClick(event){
    event.preventDefault();
    random = getRandomNumber(6);
    const selectValue = userSelection();
    compareOptions(selectValue, random);
}

// Evento que escucha el click en el boton
btn.addEventListener('click', handleClick);