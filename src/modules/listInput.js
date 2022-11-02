function listView(listView, Tasks) {
  Tasks.forEach((task) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <p class="task-description"><input type="checkbox" class="task-check">${task.description}</p>
        <i class="bi bi-three-dots-vertical"></i>
        
        `;
    listView.appendChild(taskItem);
  });
}

export default listView;