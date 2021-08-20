import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../shared/todos.servise';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public loading: boolean = true;
  constructor(public todosService: TodosService) { }

  onChange(id: number){
    this.todosService.onToggle(id);
  };
  
  removeTodo(id: number){
    this.todosService.removeTodo(id);
  }

  ngOnInit(): void {
    this.todosService.fetchTodos().subscribe(() => {
      this.loading = false;
    });
  }

}
