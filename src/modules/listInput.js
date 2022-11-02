const listView = document.querySelector('.list');
const listInputLine = (task) => {
  const listElement = document.createElement('li');
  listElement.classList.add('task-item');
  listElement.innerHTML = `
    <p class="task-description"><input type="checkbox" class="task-check">${task.description}</p>    
    <i class="bi bi-three-dots-vertical"></i>
    <i class="bi bi-trash hide"></i>
    `;
  listView.appendChild(listElement);
};

export default listInputLine;
