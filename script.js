/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const titulo = document.querySelector('h1');
titulo.id = 'title';
titulo.innerText = 'Paleta de Cores';

const elementoPai = document.querySelector('section');
elementoPai.id = 'color-palette';
const cores = ['black', 'blue', 'green', 'yellow'];

const criaElementos = () => {
  for (let index = 0; index < 4; index += 1) {
    const divElement = document.createElement('div');
    divElement.classList.add('color');
    divElement.style.backgroundColor = cores[index];
    elementoPai.appendChild(divElement);
  }
};
criaElementos();

const coresAleatorias = () => {
  const letrasx = '0123456789ABCDEF';
  let cor = '#';
  for (let index = 0; index < 6; index += 1) {
    cor += letrasx[Math.floor(Math.random() * 16)];
  }
  return cor;
};

const botao = document.querySelector('#button-random-color');
botao.addEventListener('click', () => {
  const elementoDiv = document.querySelectorAll('.color');
  elementoDiv.forEach((div, posicao) => {
    if (posicao !== 0) {
      const corNova = coresAleatorias();
      div.style.backgroundColor = corNova;
    }
  });
});
