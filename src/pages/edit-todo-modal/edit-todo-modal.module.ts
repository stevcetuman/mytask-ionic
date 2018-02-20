import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditTodoModalPage } from './edit-todo-modal';

@NgModule({
  declarations: [
    EditTodoModalPage,
  ],
  imports: [
    IonicPageModule.forChild(EditTodoModalPage),
  ],
})
export class EditTodoModalPageModule {}
