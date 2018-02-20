import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController, ModalController } from 'ionic-angular';

import { TodoService } from '../../providers/todo/todo';
import { ArchivedTodosPage } from '../archived-todos/archived-todos';

import { AngularFireDatabase ,FirebaseListObservable} from 'angularfire2/database-deprecated';
import { TaskItem } from '../../app/modals/taskItems.interface';
import { TodoDetailModalPage } from '../todo-detail-modal/todo-detail-modal';
import { EditTodoModalPage } from '../edit-todo-modal/edit-todo-modal';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = {} as TaskItem;
  public reorderIsEnabled = false;
  public _todoSubsription;
  public archivedTodosPage = ArchivedTodosPage;
  itemTasks = {} as TaskItem;

  itemListRef$: FirebaseListObservable<TaskItem[]>;

  constructor(private modalCtrl:ModalController ,public db:AngularFireDatabase, private toastController:ToastController, private todoService: TodoService, public navCtrl: NavController, private alertController: AlertController) {
    // this.todos = this.todoService.getTodos();

    this.itemListRef$ = this.db.list('tasks',{
      query: {
        orderByChild: 'date'
      }
    });
    console.log(" Test1 " +this. itemListRef$);
    // this._todoSubsription = this.db.list('/tasks').subscribe(data => {
    //   data.map(elem => {
    //     this.todos = data;
    //   })
    // });

    // this.itemListRef$ = this.db.list('/tasks').subscribe(data => {
    //   data.map(elem => {
    //     this.todos = data;
    //   })
    // });
  }

  ionViewDidLoad(){

  }

  archiveTodo(todo:TaskItem){
    // this.todoService.archiveTodo(todo.$key);

    this.itemListRef$.remove(todo.$key);

    this.db.list('/archiveTodo').push({
      task: todo.task
    }).then(() => {
      //message is sent
    })


  }

  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReordered($event){
    //import reorderArray
    // reorderArray(this.todos, $event);
  }

  goToArchivePage(){
    this.navCtrl.push(ArchivedTodosPage);
  }

  openTodoAlert(){
    let addTodoAlert = this.alertController.create({
      title: "Add new task",
      message: "Enter your task",
      inputs:[{
        type:"text",
        name: "addToDoInput"
      }],
      buttons:[{
        text: "Cancel"
      },{
        text: "Add Task",
        handler: (inputData)=> {
          let todoText;
          todoText = inputData.addToDoInput;
          // this.todoService.addTodo(todoText);

          this.db.list('/tasks').push({
            task:todoText,
          }).then(()=> {

          })

          addTodoAlert.onDidDismiss(()=>{
            let addTodoToast = this.toastController.create({
              message:"New Task Added",
              duration:2000
            });
          addTodoToast.present();
          });

          //Add Toast Controller
        //   let addTodoToast = this.toastController.create({
        //     message:"Todo Added",
        //     duration:2000
        //   });
        // addTodoToast.present();

        }
        
      }]
    });
    addTodoAlert.present();
  }

  editTodo(todo: TaskItem){
    let editTodoAlert = this.alertController.create({
      title: "Edit Task",
      message: "Edit your task name",
      inputs:[{
        type:"text",
        name: "editToDoInput",
        value:''//this.todos[todoIndex]
      }],
      buttons:[{
        text: "Cancel"
      },{
        text: "Edit Task",
        handler: (inputData)=> {

          todo.task = inputData.editToDoInput;
          console.log("Todo Key: " + todo.$key);
          this.db.object('/tasks/' + todo.$key ).set(todo)
          // let todoText;
          // todoText = inputData.editToDoInput;
          // this.todoService.editTodo(todoText,todoIndex);

          editTodoAlert.onDidDismiss(()=>{
            let addTodoToast = this.toastController.create({
              message:"Task Edited",
              duration:2000
            });
          addTodoToast.present();
          });
       
        }
        
      }]
    });
    editTodoAlert.present();
  }

  openTodoDetailModal(){
    let todoModal = this.modalCtrl.create(TodoDetailModalPage, {})
    todoModal.onDidDismiss((todo) => {
      // this.passengerDetail = passenger;
    });
    todoModal.present()
  }

  editTodoDetailModal(todo: TaskItem){
    let todoModal = this.modalCtrl.create(EditTodoModalPage, {send:todo})
    todoModal.onDidDismiss((todo) => {
       this.itemTasks = todo;
       this.db.object('/tasks/' + todo.$key ).set(todo)
    });
    todoModal.present()
  }


}
