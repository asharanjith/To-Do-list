import Task from './TaskLine.js';

const localListStorage = JSON.parse(localStorage.getItem('localListStorage')) || [];

const liststorage = (inputData) => {
  const task = new Task(inputData);
  localListStorage.push(task);
  localStorage.setItem('localListStorage', JSON.stringify(localListStorage));
};

export default liststorage;