import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { TodosService } from '../shared/todos.servise';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public loading: boolean = true;
  public seacrhString: string = '';
  constructor(public todosService: TodosService) { }

  onChange(id: number){
    this.todosService.onToggle(id);
  };
  
  removeTodo(id: number){
    this.todosService.removeTodo(id);
  }

  ngOnInit(): void {
    this.todosService.fetchTodos()
      .pipe(delay(500))
      .subscribe(() => {
        this.loading = false;
      });
  }

}
