const listView = document.querySelector('.list');
const listInputLine = (task) => {
  const listElement = document.createElement('li');
  listElement.classList.add('task-item');
  const listText = document.createElement('input');
  listText.classList.add('task-text');
  listText.setAttribute('type', 'text');
  listText.setAttribute('value', task.description);
  listText.textContent = task.description;
  const listCheck = document.createElement('input');
  listCheck.classList.add('task-check');
  listCheck.type = 'checkbox';
  listCheck.checked = task.completed;
  const listBtn = document.createElement('button');
  listBtn.classList.add('task-btn');
  listBtn.innerHTML = '<i class="bi bi-three-dots-vertical"></i>';
  const listBtn2 = document.createElement('button');
  listBtn2.classList.add('task-btn');
  listBtn2.classList.add('trashBtn');
  listBtn2.classList.add('hide');
  listBtn2.innerHTML = '<i class="bi bi-trash"></i>';
  listElement.appendChild(listCheck);
  listElement.appendChild(listText);
  listView.appendChild(listElement);
  listElement.appendChild(listBtn);
  listElement.appendChild(listBtn2);
};

export default listInputLine;
