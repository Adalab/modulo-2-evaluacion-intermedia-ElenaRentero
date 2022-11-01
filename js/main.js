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
let count = 0; 

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
        count ++;
        return `¡Ha ganado el Ejército del Bien! Enhorabuena.`;
    } else if (userValue < pcValue) {
        pointsPc ++;
        count ++
        return `¡Ha ganado el Ejército del Mal! Vuelve a intentarlo.`;
    } else {
        count ++
        return `Empate.`;
    }
}

// Funcion que cuenta hasta 10 en el index para reiniciar el juego
function reset(){
    if (count === 10){
        btnStart.classList.add('hidden');
        btnReset.classList.remove('hidden');
        if (pointsUser > pointsPc){
            paragraph.innerHTML = `¡Enhorabuena has ganado el juego!`;
        } else {
            paragraph.innerHTML = `Lo sentimos, ha ganado el ejército del mal. Vuelve a intentarlo.`;
        }
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

// Funcion manejadora del botón Start
function handleClickStart(event){
    event.preventDefault();
    random = getRandomNumber(5);
    const userValue = userSelection();
    const pcValue = pcSelection(random);
    const result = compareOptions(userValue, pcValue);
    paintHTML(result);
    paintPoints();
    reset();
}

// Funcion manejadora del botón Reset
function handleClickReset(event){
    event.preventDefault();
    pointsPc = 0;
    pointsUser = 0;
    count = 0;
    paintPoints();
    paragraph.innerHTML = `¡Comienza la batalla!`;
    btnStart.classList.remove('hidden');
    btnReset.classList.add('hidden');
}

// Evento que escucha el click en el boton de start y reset 
btnStart.addEventListener('click', handleClickStart); 
btnReset.addEventListener('click', handleClickReset);