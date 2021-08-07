import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  listOfTodos: any[] = [];

  constructor(
    private _todosService: TodosService
  ) { }

  ngOnInit(): void {
  }

  getTodos() {
    this.listOfTodos = this._todosService.getTodoList();
  }

}
