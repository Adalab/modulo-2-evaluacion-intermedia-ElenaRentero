'use strict';

const select = document.querySelector('.js-select');
const btnStart = document.querySelector('.js-btn-start');
const btnReset = document.querySelector('.js-btn-reset');
const paragraph = document.querySelector('.js-paragraph');
const user = document.querySelector('.js-pointsUser');
const pc = document.querySelector('.js-pointsPc');
let random = 0;
let pointsPc = 0; 
let pointsUser = 0; 
let i = 0; 

//Funcion que recoge el valor de la opcion elegida por el usuario
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
        pointsUser ++;
        i ++;
        return `¡Ha ganado el Ejército del Bien! Enhorabuena.`;
    } else if (userValue < pcValue) {
        pointsPc ++;
        i ++
        return `¡Ha ganado el Ejército del Mal! Vuelve a intentarlo.`;
    } else {
        i ++
        return `Empate.`;
    }
}

// Funcion que cuenta hasta 10 en el index para reiniciar el juego
function reset(){
    if (i === 10){
        btnStart.classList.add('hidden');
        btnReset.classList.remove('hidden');
    }
}

// Funcion que pinta en el HTML el resultado
function paintHTML (result){
    paragraph.innerHTML = result;
}

// Función que pinta en el HTML los puntos
function paintPoints(){
    user.innerHTML = `Jugador: ${pointsUser}`;
    pc.innerHTML = `Computadora: ${pointsPc}`; 
}

// Funcion manejadora
function handleClick(event){
    event.preventDefault();
    random = getRandomNumber(5);
    const userValue = userSelection();
    const pcValue = pcSelection(random);
    const result = compareOptions(userValue, pcValue);
    paintHTML(result);
    paintPoints();
    reset();
}

// Evento que escucha el click en el boton
btnStart.addEventListener('click', handleClick); 