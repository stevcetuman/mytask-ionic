import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TodoService } from '../providers/todo/todo';
import { ArchivedTodosPage } from '../pages/archived-todos/archived-todos';
import { LoginPage } from '../pages/login/login'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import {AngularFireAuthModule} from "angularfire2/auth";
import { TodoDetailModalPage } from '../pages/todo-detail-modal/todo-detail-modal';
import { EditTodoModalPage } from '../pages/edit-todo-modal/edit-todo-modal';

const config = {
  apiKey: "AIzaSyARL5lFYd5FjuaF6UmR1Gfj8fixkijwb3Q",
  authDomain: "mytasks-98450.firebaseapp.com",
  databaseURL: "https://mytasks-98450.firebaseio.com",
  projectId: "mytasks-98450",
  storageBucket: "mytasks-98450.appspot.com",
  messagingSenderId: "871480214557"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ArchivedTodosPage,
    TodoDetailModalPage,
    EditTodoModalPage
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ArchivedTodosPage,
    TodoDetailModalPage,
    EditTodoModalPage
  ],
  providers: [
    HttpClientModule,
    HttpModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoService
  ]
})
export class AppModule {}
