import liststorage from './localstorage.js';

const formclick = document.querySelector('.inputform');
const inputData = document.querySelector('#input');

formclick.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    liststorage(inputData.value);
    inputData.value = '';
  }
});
