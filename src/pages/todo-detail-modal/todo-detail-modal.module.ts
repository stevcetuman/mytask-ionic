import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodoDetailModalPage } from './todo-detail-modal';

@NgModule({
  declarations: [
    TodoDetailModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TodoDetailModalPage),
  ],
})
export class TodoDetailModalPageModule {}
