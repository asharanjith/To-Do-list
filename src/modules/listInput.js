const listView = document.querySelector('.list');
const listInputLine = (task) => {
  const listElement = document.createElement('li');
  listElement.classList.add('task-item');
  listElement.innerHTML = `
    <input type="checkbox" class="task-check">
    <input type="text" name="${task.description}" class="task-description" value="${task.description}">   
    <i class="bi bi-three-dots-vertical"></i>
    <i class="bi bi-trash hide"></i>
    `;
  listView.appendChild(listElement);
};

export default listInputLine;
