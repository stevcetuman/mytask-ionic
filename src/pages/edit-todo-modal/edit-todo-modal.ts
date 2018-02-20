import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { TaskItem } from '../../app/modals/taskItems.interface';

/**
 * Generated class for the EditTodoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-todo-modal',
  templateUrl: 'edit-todo-modal.html',
})
export class EditTodoModalPage {

  public dateRemind;
  public todoText;
  orderTodo = 2;
  todo = {} as TaskItem;
  itemListRef$: FirebaseListObservable<TaskItem[]>;
  value: FirebaseObjectObservable<any>;

  constructor(public db:AngularFireDatabase, private viewController: ViewController, public navCtrl: NavController, public navParams: NavParams) {

    this.itemListRef$ = this.db.list('tasks');
    this.dateRemind =  new Date().toISOString();
    this.todoText = "";
    //  this.todo = navParams.data;
    this.todo = navParams.get('send');
    console.log(this.todo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoDetailModalPage');
  }

  editTodoList(){
    this.value = this.db.object('/tasks/' + this.todo.$key );
    let temp = {} as TaskItem;
    temp.date = this.dateRemind.substring(0,10);
    temp.task = this.todoText;
    temp.order = this.orderTodo;
    this.value.set(temp);
    this.viewController.dismiss({});
    // this.db.object('/tasks/' + this.todo.$key ).set(temp)
    // .then(()=> {
    //   this.viewController.dismiss({});
    // });
   }

  closeModal(){
    this.viewController.dismiss({});
  }

  setOrder(or:number){
    this.orderTodo = or;
  }
}
