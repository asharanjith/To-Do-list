import listInputLine from './listInput.js';

describe('Add Task', () => {
  document.body.innerHTML = '<div><ul class="list"> </ul></div>';
  const listView = document.querySelector('.list');
  const task = {
    description: 'test',
    completed: false,
    index: 1,
  };
  const listDisplay = listInputLine(task);
  listView.appendChild(listDisplay);
  const count = document.querySelectorAll('.list li');
  test('Add Task', () => {
    expect(count).toHaveLength(1);
  });
});