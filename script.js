/* eslint-disable no-unused-vars */
const titulo = document.querySelector('h1');
titulo.id = 'title';
titulo.innerText = 'Paleta de Cores';

const elementoPai = document.querySelector('section');
elementoPai.id = 'color-palette';
const cores = ['red', 'blue', 'green', 'yellow'];

const criaElementos = () => {
  for (let index = 0; index < 4; index += 1) {
    const divElement = document.createElement('div');
    divElement.classList.add('color');
    divElement.style.backgroundColor = cores[index];
    elementoPai.appendChild(divElement);
  }
};
criaElementos();
