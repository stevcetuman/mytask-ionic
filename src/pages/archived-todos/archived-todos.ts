import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TodoService }  from "../../providers/todo/todo";

import { AngularFireDatabase ,FirebaseListObservable} from 'angularfire2/database-deprecated';
import { TaskItem } from '../../app/modals/taskItems.interface';


/**
 * Generated class for the ArchivedTodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archived-todos',
  templateUrl: 'archived-todos.html',
})
export class ArchivedTodosPage {
  public archivedTodos = [];

  itemListRef$: FirebaseListObservable<TaskItem[]>;


  constructor(public db:AngularFireDatabase, private todoService: TodoService, public navCtrl: NavController, public navParams: NavParams) {
  
    this.itemListRef$ = this.db.list('/archiveTodo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArchivedTodosPage');
    this.archivedTodos = this.todoService.getArchivedTodo();
  }

  deleteTodo(todo:TaskItem){
    this.itemListRef$.remove(todo.$key);
  }


}
