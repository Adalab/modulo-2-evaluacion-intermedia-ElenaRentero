'use strict';

const select = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const paragraph = document.querySelector('js-paragraph');
let random = 0;

// Funcion que recoge el valor de la opcion elegida por el usuario
function userSelection(){
    const selectValue = parseInt(select.value);
    return selectValue;
}

// Funcion que genera de manera aleatoria un número al entrar en la pagina
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

// Funcion para cambiar el random number por el valor asignado
function pcSelection(random){
    if (random === 1 || random === 2 || random === 3){
        return 2
    } else if (random === 4){
        return 3
    } else {
        return 5
    }
}

// Funcion que compara ambos valores
function compareOptions(userValue, pcValue){
    if (userValue > pcValue){
        console.log (`¡Ha ganado el Ejército del Bien! Enhorabuena.`)
    } else if (userValue === pcValue) {
        console.log (`Empate.`)
    } else {
        console.log (`¡Ha ganado el Ejército del Mal! Vuelve a intentarlo.`)
    }
}

/* Funcion que pinta en el HTML
function paintHTML (result){
    paragraph.innerHTML = result;
}*/

// Funcion manejadora
function handleClick(event){
    event.preventDefault();
    random = getRandomNumber(5);
    const userValue = userSelection();
    const pcValue = pcSelection(random);
    compareOptions(userValue, pcValue);
}

// Evento que escucha el click en el boton
btn.addEventListener('click', handleClick);