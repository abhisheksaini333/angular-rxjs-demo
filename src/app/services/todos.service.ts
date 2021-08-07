import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos: any[] = [];

  constructor(
    private _httpClient: HttpClient,
    private _productsService: ProductsService
  ) { 
    this.getTodos();
  }

  // write a function, which makes API calls
  getTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    this._httpClient.get<any[]>(url).subscribe((data: any[]) => {
      this.todos = data;
    }, (error: any) => {
      console.log(error);
      throwError(error);
    });
  }

  getTodoList() {
    return this.todos;
  }


}
