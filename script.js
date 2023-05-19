/* eslint-disable no-shadow */
/* eslint-disable sonarjs/no-unused-collection */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const titulo = document.querySelector('h1');
titulo.id = 'title';
titulo.innerText = 'Paleta de Cores';

const elementoPai = document.querySelector('section');
elementoPai.id = 'color-palette';
const cores = ['black', 'blue', 'purple', 'yellow'];

const criaElementos = () => {
  for (let index = 0; index < 4; index += 1) {
    const divElement = document.createElement('div');
    if (cores[index] === 'black') {
      divElement.className = 'selected';
    }
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

const SalvaCores = () => {
  const cores = [];
  const colorDivs = document.querySelectorAll('.color');
  for (let index = 0; index < colorDivs.length; index += 1) {
    const color = colorDivs[index];
    const cor = color.style.backgroundColor;
    cores.push(cor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(cores));
};

const coresLocalStorage = () => {
  const coresSalvas = localStorage.getItem('colorPalette');
  if (coresSalvas) {
    const coresAl = JSON.parse(coresSalvas);
    const divs = document.querySelectorAll('.color');
    for (let index = 0; index < divs.length; index += 1) {
      const div = divs[index];
      div.style.backgroundColor = coresAl[index];
    }
  }
};
coresLocalStorage();

const botao = document.querySelector('#button-random-color');
botao.addEventListener('click', () => {
  const elementoDiv = document.querySelectorAll('.color');
  for (let index = 1; index < elementoDiv.length; index += 1) {
    const div = elementoDiv[index];
    const corNova = coresAleatorias();
    div.style.backgroundColor = corNova;
  }
  SalvaCores();
});

const paiElemento = document.querySelectorAll('section')[1];
paiElemento.id = 'pixel-board';

const criaPixels = () => {
  const bloco = document.createElement('div');
  bloco.classList.add('bloco');
  paiElemento.appendChild(bloco);
  for (let index = 0; index < 5; index += 1) {
    const linhaindex = document.createElement('div');
    linhaindex.classList.add('linha');
    bloco.appendChild(linhaindex);
    for (let index = 0; index < 5; index += 1) {
      const Blocoindex = document.createElement('div');
      Blocoindex.classList.add('pixel');
      linhaindex.appendChild(Blocoindex);
    }
  }
};
criaPixels();
