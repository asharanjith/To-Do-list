const dotBtn = document.querySelectorAll('.task-btn');
const trashBtn = document.querySelectorAll('.trashBtn');
const updateTaskDescription = document.querySelectorAll('.task-text');

dotBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.add('hide');
    btn.nextElementSibling.classList.remove('hide');
  });
});

const updateIndex = (list) => {
  list.forEach((task, index) => {
    task.index = index + 1;
  });
};
const RemoveTask = (index) => {
  const list = JSON.parse(localStorage.getItem('localListStorage'));
  list.splice(index, 1);
  updateIndex(list);
  localStorage.setItem('localListStorage', JSON.stringify(list));
  window.location.reload();
};

trashBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    // const list = JSON.parse(localStorage.getItem('localListStorage'));
    const index = Array.from(trashBtn).indexOf(btn);
    // const newList = list.filter((task) => task.index !== index + 1);
    // updateIndex(newList);
    // window.location.reload();
    // localStorage.setItem('localListStorage', JSON.stringify(newList));
    RemoveTask(index);
  });
});

updateTaskDescription.forEach((input) => {
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const list = JSON.parse(localStorage.getItem('localListStorage'));
      const index = Array.from(updateTaskDescription).indexOf(input);
      list[index].description = input.value;
      localStorage.setItem('localListStorage', JSON.stringify(list));
    }
  });
});

export default updateIndex;
