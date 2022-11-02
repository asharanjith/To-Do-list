import liststorage from './localstorage.js';
import listInputLine from './listInput.js';

const formclick = document.querySelector('.inputform');
const inputData = document.querySelector('#input');
const localListStorage = JSON.parse(localStorage.getItem('localListStorage')) || [];

formclick.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    liststorage(inputData.value);
    localListStorage.forEach((item) => {
      listInputLine(item);
    });
    inputData.value = '';
  }
});
