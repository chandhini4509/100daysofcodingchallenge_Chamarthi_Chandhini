const readline = require('readline');

class TodoList {
  constructor() {
    this.todos = [];
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  add(todo) {
    this.todos.push(todo);
    console.log(`Added: ${todo}`);
  }

  remove(index) {
    if (index >= 0 && index < this.todos.length) {
      const removedTodo = this.todos.splice(index, 1);
      console.log(`Removed: ${removedTodo}`);
    } else {
      console.log('Invalid index');
    }
  }

  display() {
    console.log('\nTo-Do List:');
    this.todos.forEach((todo, index) => {
      console.log(`${index + 1}. ${todo}`);
    });
    console.log('');
  }

  promptAction() {
    this.rl.question('Enter command (add/remove/display/quit): ', (answer) => {
      switch (answer.toLowerCase()) {
        case 'add':
          this.rl.question('Enter todo: ', (todo) => {
            this.add(todo);
            this.promptAction();
          });
          break;
        case 'remove':
          this.rl.question('Enter index of todo to remove: ', (index) => {
            this.remove(parseInt(index) - 1);
            this.promptAction();
          });
          break;
        case 'display':
          this.display();
          this.promptAction();
          break;
        case 'quit':
          console.log('Quitting...');
          this.rl.close();
          break;
        default:
          console.log('Invalid command');
          this.promptAction();
      }
    });
  }

  start() {
    console.log('Welcome to the To-Do List App!\n');
    this.promptAction();
  }
}

const todoList = new TodoList();
todoList.start();
