'use strict';

const localCharacter = localStorage.getItem('hp-character');
const character = JSON.parse(localCharacter);

const setEyeColor = (eyeColor) => {
	const eye = document.querySelector('#eye-color');
	if (eyeColor === 'grey') eye.style = 'background-color: var(--gray);';
	if (eyeColor === 'brown') eye.style = 'background-color: var(--brown);';
	if (eyeColor === 'green') eye.style = 'background-color: var(--green);';
	if (eyeColor === 'blue') eye.style = 'background-color: var(--blue);';
	if (eyeColor === 'red') eye.style = 'background-color: var(--red);';
};

const setCharacterHouse = (house) => {
	const houseImg = document.querySelector('#character-house');
	if (house === 'Gryffindor') houseImg.src = './img/Gryffindor.png';
	if (house === 'Slytherin') houseImg.src = './img/Slytherin.png';
	if (house === 'Ravenclaw') houseImg.src = './img/Ravenclaw.webp';
	if (house === 'Hufflepuff') houseImg.src = './img/Hufflepuff.jpg';
};

setCharacterHouse(character.house);
setEyeColor(character.eyeColour);


// * Примерная логика проверки alive
// const alive = true

// if (alive === true) 'green'
// if (alive === false) 'red'
// else 'yellow'


// Name: harry
// Actor Name: Daniel