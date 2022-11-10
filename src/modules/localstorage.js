import Task from './TaskLine.js';
import listInputLine from './listInput.js';

const listView = document.querySelector('.list');
const localListStorage = JSON.parse(localStorage.getItem('localListStorage')) || [];

const liststorage = (inputData) => {
  const length = localListStorage.length + 1;
  const task = new Task(inputData, length);
  localListStorage.push(task);
  localStorage.setItem('localListStorage', JSON.stringify(localListStorage));
  const listDisplay = listInputLine(task);
  listView.appendChild(listDisplay);
};

localListStorage.forEach((task) => {
  const listDisplay = listInputLine(task);
  listView.appendChild(listDisplay);
});

export default liststorage;