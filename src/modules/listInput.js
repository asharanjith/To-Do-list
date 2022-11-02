const listView = document.querySelector('.list');

const listInputLine = (list) => {
  const listElement = document.createElement('li');
  listElement.classList.add('task-item');
  listElement.innerHTML = `
  <p class="task-description"><input type="checkbox" class="task-check">${list.description}</p>    
  <i class="bi bi-three-dots-vertical"></i>
  `;
  listView.appendChild(listElement);
};

export default listInputLine;
