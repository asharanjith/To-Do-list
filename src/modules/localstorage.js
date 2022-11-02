import Task from './TaskLine.js';
import listInputLine from './listInput.js';

const localListStorage = JSON.parse(localStorage.getItem('localListStorage')) || [];

const liststorage = (inputData) => {
  const length = localListStorage.length + 1;
  const task = new Task(inputData, length);
  localListStorage.push(task);
  localStorage.setItem('localListStorage', JSON.stringify(localListStorage));
  listInputLine(task);
};

localListStorage.forEach((task) => {
  listInputLine(task);
});

export default liststorage;