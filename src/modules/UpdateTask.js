import updateIndex from './RemoveTask.js';

const checkbox = document.querySelectorAll('.task-check');
const taskDescription = document.querySelectorAll('.task-description');
const clearall = document.querySelector('.clear');

checkbox.forEach((check) => {
  check.addEventListener('click', (e) => {
    const list = JSON.parse(localStorage.getItem('localListStorage'));
    const index = Array.from(checkbox).indexOf(check);
    if (e.target.checked) {
      list[index].completed = true;
      taskDescription[index].classList.add('completed');
    } else {
      list[index].completed = false;
      taskDescription[index].classList.remove('completed');
    }
    localStorage.setItem('localListStorage', JSON.stringify(list));
  });
});

clearall.addEventListener('click', () => {
  const list = JSON.parse(localStorage.getItem('localListStorage'));
  const newList = list.filter((task) => task.completed === false);
  updateIndex(newList);
  localStorage.setItem('localListStorage', JSON.stringify(newList));
  window.location.reload();
});

checkbox.forEach((check) => {
  const list = JSON.parse(localStorage.getItem('localListStorage'));
  const index = Array.from(checkbox).indexOf(check);
  if (list[index].completed) {
    check.checked = true;
    taskDescription[index].classList.add('completed');
  }
});
