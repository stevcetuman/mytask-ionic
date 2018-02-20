import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database-deprecated';
/**
 * Generated class for the TodoDetailModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo-detail-modal',
  templateUrl: 'todo-detail-modal.html',
})
export class TodoDetailModalPage {

  public dateRemind;
  public todoText;
  orderTodo = 2;

  constructor(public db:AngularFireDatabase, private viewController: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.dateRemind =  new Date().toISOString()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoDetailModalPage');
  }

  addTodoList(){
    this.db.list('/tasks').push({
      task:this.todoText,
      date:this.dateRemind.substring(0,10),
      order: this.orderTodo
    }).then(()=> {
      this.viewController.dismiss({});
    })
  }

  closeModal(){
    this.viewController.dismiss({});
  }

  setOrder(or:number){
    this.orderTodo = or;
  }
}
