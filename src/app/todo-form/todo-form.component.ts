import { Component, OnInit } from '@angular/core';
import { TodosService, Todo } from '../shared/todos.servise';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  title: string = '';

  constructor(public todosService: TodosService) { }

  addTodo() {
    const todo: Todo = {
      id: Date.now(),
      title: this.title,
      completed: false,
      date: new Date(),
    }
    this.todosService.addTodo(todo);
    this.title = '';
  }

  ngOnInit(): void {
  }

}
