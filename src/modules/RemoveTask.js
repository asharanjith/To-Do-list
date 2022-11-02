const dotBtn = document.querySelectorAll('.bi-three-dots-vertical');
const trashBtn = document.querySelectorAll('.bi-trash');

dotBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.add('hide');
    btn.nextElementSibling.classList.remove('hide');
  });
});

trashBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const list = JSON.parse(localStorage.getItem('localListStorage'));
    const index = Array.from(trashBtn).indexOf(btn);
    const newList = list.filter((task) => task.index !== index + 1);
    localStorage.setItem('localListStorage', JSON.stringify(newList));
    btn.parentElement.remove();
  });
});
