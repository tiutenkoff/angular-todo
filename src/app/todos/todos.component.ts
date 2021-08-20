import { Component, OnInit } from '@angular/core';
import { TodosService } from '../shared/todos.servise';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  
  constructor(public todosService: TodosService) { }
  
  onChange(id: number){
    // this.onToggle.emit(id);
    this.todosService.onToggle(id);
  };

  ngOnInit(): void {
  }

}
