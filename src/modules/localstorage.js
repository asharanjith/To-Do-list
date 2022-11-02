import Task from './TaskLine.js';
import listInputLine from './listInput.js';

const localListStorage = JSON.parse(localStorage.getItem('localListStorage')) || [];

const liststorage = (inputData) => {
  const task = new Task(inputData);
  localListStorage.push(task);
  localStorage.setItem('localListStorage', JSON.stringify(localListStorage));
  listInputLine(task);
};

localListStorage.forEach((task) => {
  listInputLine(task);
});

export default liststorage;