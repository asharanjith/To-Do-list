const dotBtn = document.querySelectorAll('.bi-three-dots-vertical');
const trashBtn = document.querySelectorAll('.bi-trash');
const updateTaskDescription = document.querySelectorAll('.task-description');

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

trashBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const list = JSON.parse(localStorage.getItem('localListStorage'));
    const index = Array.from(trashBtn).indexOf(btn);
    const newList = list.filter((task) => task.index !== index + 1);
    updateIndex(newList);
    window.location.reload();
    localStorage.setItem('localListStorage', JSON.stringify(newList));
    btn.parentElement.remove();
  });
});

updateTaskDescription.forEach((input) => {
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const list = JSON.parse(localStorage.getItem('localListStorage'));
      const index = Array.from(updateTaskDescription).indexOf(input);
      list[index].description = input.value;
      localStorage.setItem('localListStorage', JSON.stringify(list));
    }
  });
});

export default updateIndex;
