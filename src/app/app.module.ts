import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { TodosComponent } from './components/todos/todos.component';

import { ProductsService } from './services/products.service';
import { TodosService } from './services/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ProductsService,
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
