import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "./todos.servise";

@Pipe({
    name: 'todosFitler',
})

export class TodosFilterPipe implements PipeTransform {
    transform(todos: Todo[], seacrhString: string = ''): Todo[] {
        if (!seacrhString.trim()) {
            return todos;
        } 
        return todos.filter(todo => {
            return todo.title.toLowerCase().indexOf(seacrhString.toLowerCase()) !== -1 
        })
    }
}