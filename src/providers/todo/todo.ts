import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoService {

  private todos = [];
  private archiveTodos = [];

  constructor(public http: HttpClient) {
    console.log('Hello TodoService Provider');
  }

  archiveTodo(todoIndex){
    let todoTodoArchived = this.todos[todoIndex];
    this.todos.splice(todoIndex, 1);
    this.archiveTodos.push(todoTodoArchived);

  }

  getArchivedTodo(){
    return this.archiveTodos;
  }

  getTodos(){
    return this.todos;
  }

  addTodo(todo){
    this.todos.push(todo);
  }

  editTodo(todo, todoIndex){
    this.todos[todoIndex] = todo;
  }
}
