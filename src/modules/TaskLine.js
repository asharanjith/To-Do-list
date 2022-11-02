class Task {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index || 0;
  }
}

export default Task;