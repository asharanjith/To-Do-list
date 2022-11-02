import liststorage from './localstorage.js';

const formclick = document.querySelector('.inputform');
const inputData = document.querySelector('#input');

formclick.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    liststorage(inputData.value);
    inputData.value = '';
    window.location.reload();
  }
});
