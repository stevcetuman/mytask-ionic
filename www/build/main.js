webpackJsonp([5],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.todos = [];
        this.archiveTodos = [];
        console.log('Hello TodoService Provider');
    }
    TodoService.prototype.archiveTodo = function (todoIndex) {
        var todoTodoArchived = this.todos[todoIndex];
        this.todos.splice(todoIndex, 1);
        this.archiveTodos.push(todoTodoArchived);
    };
    TodoService.prototype.getArchivedTodo = function () {
        return this.archiveTodos;
    };
    TodoService.prototype.getTodos = function () {
        return this.todos;
    };
    TodoService.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    TodoService.prototype.editTodo = function (todo, todoIndex) {
        this.todos[todoIndex] = todo;
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TodoService);
    return TodoService;
}());

//# sourceMappingURL=todo.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivedTodosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_todo_todo__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ArchivedTodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArchivedTodosPage = (function () {
    function ArchivedTodosPage(db, todoService, navCtrl, navParams) {
        this.db = db;
        this.todoService = todoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.archivedTodos = [];
        this.itemListRef$ = this.db.list('/archiveTodo');
    }
    ArchivedTodosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArchivedTodosPage');
        this.archivedTodos = this.todoService.getArchivedTodo();
    };
    ArchivedTodosPage.prototype.deleteTodo = function (todo) {
        this.itemListRef$.remove(todo.$key);
    };
    ArchivedTodosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-archived-todos',template:/*ion-inline-start:"/Users/stevcetuman/Documents/AIT/Cross Apps/final/5565_Stevche_Tumanovski_FinalApplication/mytasks/src/pages/archived-todos/archived-todos.html"*/'<!--\n  Generated template for the ArchivedTodosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Archived Tasks</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item *ngFor="let todo of archivedTodos">\n            {{todo}}\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n        <ion-item-sliding *ngFor="let todo of itemListRef$ | async; let todoIndex = index">\n\n            <ion-item>{{todo.task}}</ion-item>\n\n            <ion-item-options side="right">\n                <button color="danger" ion-button (click)="deleteTodo(todo)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n\n            </ion-item-options>\n        </ion-item-sliding>\n\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/stevcetuman/Documents/AIT/Cross Apps/final/5565_Stevche_Tumanovski_FinalApplication/mytasks/src/pages/archived-todos/archived-todos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__providers_todo_todo__["a" /* TodoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ArchivedTodosPage);
    return ArchivedTodosPage;
}());

//# sourceMappingURL=archived-todos.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTodoModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EditTodoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditTodoModalPage = (function () {
    function EditTodoModalPage(db, viewController, navCtrl, navParams) {
        this.db = db;
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderTodo = 2;
        this.todo = {};
        this.itemListRef$ = this.db.list('tasks');
        this.dateRemind = new Date().toISOString();
        this.todoText = "";
        //  this.todo = navParams.data;
        this.todo = navParams.get('send');
        console.log(this.todo);
    }
    EditTodoModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TodoDetailModalPage');
    };
    EditTodoModalPage.prototype.editTodoList = function () {
        this.value = this.db.object('/tasks/' + this.todo.$key);
        var temp = {};
        temp.date = this.dateRemind.substring(0, 10);
        temp.task = this.todoText;
        temp.order = this.orderTodo;
        this.value.set(temp);
        this.viewController.dismiss({});
        // this.db.object('/tasks/' + this.todo.$key ).set(temp)
        // .then(()=> {
        //   this.viewController.dismiss({});
        // });
    };
    EditTodoModalPage.prototype.closeModal = function () {
        this.viewController.dismiss({});
    };
    EditTodoModalPage.prototype.setOrder = function (or) {
        this.orderTodo = or;
    };
    EditTodoModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-todo-modal',template:/*ion-inline-start:"/Users/stevcetuman/Documents/AIT/Cross Apps/final/5565_Stevche_Tumanovski_FinalApplication/mytasks/src/pages/edit-todo-modal/edit-todo-modal.html"*/'<!--\n  Generated template for the TodoDetailModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-buttons end>\n            <button ion-button (click)="closeModal()">\n      <ion-icon name="close"></ion-icon>\n    </button>\n        </ion-buttons>\n\n        <ion-title>Edit</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n            <ion-label stacked>Todo</ion-label>\n            <ion-input type="text" [(ngModel)]="todoText"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-icon color="primary" large ios="ios-calendar" md="md-calendar" item-start></ion-icon>\n            <ion-label><strong class="text small">Remind</strong></ion-label>\n            <ion-datetime displayFormat="DD MMMM YYYY" min="2018" max="2020" [(ngModel)]="dateRemind">\n            </ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-grid>\n                <ion-row>\n                    <ion-col style="height:20px;">\n                        <button ion-button full color="danger" (click)="setOrder(1)"></button>\n                    </ion-col>\n\n                    <ion-col style="height:20px;">\n                        <button ion-button full color="primary" (click)="setOrder(2)"></button>\n                    </ion-col>\n\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n        <ion-list>\n        </ion-list>\n        <ion-item>\n            <button ion-button full (click)="editTodoList()">\n                <strong>Edit</strong>\n            </button>\n        </ion-item>\n    </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Users/stevcetuman/Documents/AIT/Cross Apps/final/5565_Stevche_Tumanovski_FinalApplication/mytasks/src/pages/edit-todo-modal/edit-todo-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EditTodoModalPage);
    return EditTodoModalPage;
}());

//# sourceMappingURL=edit-todo-modal.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(afAuth, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    LoginPage.prototype.login = function (user) {
        try {
            var result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
            if (result) {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push("RegisterPage");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/stevcetuman/Documents/AIT/Cross Apps/final/5565_Stevche_Tumanovski_FinalApplication/mytasks/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "primary">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label floating>Email Address</ion-label>\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n\n    <button ion-button (click)="login(user)">Login</button>\n    <button ion-button color="light" (click)="register()">Register</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/stevcetuman/Documents/AIT/Cross Apps/final/5565_Stevche_Tumanovski_FinalApplication/mytasks/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDetailModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TodoDetailModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TodoDetailModalPage = (function () {
    function TodoDetailModalPage(db, viewController, navCtrl, navParams) {
        this.db = db;
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderTodo = 2;
        this.dateRemind = new Date().toISOString();
    }
    TodoDetailModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TodoDetailModalPage');
    };
    TodoDetailModalPage.prototype.addTodoList = function () {
        var _this = this;
        this.db.list('/tasks').push({
            task: this.todoText,
            date: this.dateRemind.substring(0, 10),
            order: this.orderTodo
        }).then(function () {
            _this.viewController.dismiss({});
        });
    };
    TodoDetailModalPage.prototype.closeModal = function () {
        this.viewController.dismiss({});
    };
    TodoDetailModalPage.prototype.setOrder = function (or) {
        this.orderTodo = or;
    };
    TodoDetailModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-todo-detail-modal',template:/*ion-inline-start:"/Users/stevcetuman/Documents/AIT/Cross Apps/final/5565_Stevche_Tumanovski_FinalApplication/mytasks/src/pages/todo-detail-modal/todo-detail-modal.html"*/'<!--\n  Generated template for the TodoDetailModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-buttons end>\n            <button ion-button (click)="closeModal()">\n      <ion-icon name="close"></ion-icon>\n    </button>\n        </ion-buttons>\n\n        <ion-title>Todo Detail</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n            <ion-label stacked>Todo</ion-label>\n            <ion-input type="text" [(ngModel)]="todoText"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-icon color="primary" large ios="ios-calendar" md="md-calendar" item-start></ion-icon>\n            <ion-label><strong class="text small">Remind</strong></ion-label>\n            <ion-datetime displayFormat="DD MMMM YYYY" min="2018" max="2020" [(ngModel)]="dateRemind">\n            </ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-grid>\n                <ion-row>\n                    <ion-col style="height:20px;">\n                        <button ion-button full color="danger" (click)="setOrder(1)"></button>\n                    </ion-col>\n\n                    <ion-col style="height:20px;">\n                        <button ion-button full color="primary" (click)="setOrder(2)"></button>\n                    </ion-col>\n\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n        <ion-list>\n        </ion-list>\n        <ion-item>\n            <button ion-button full (click)="addTodoList()">\n                <strong>Add Todo</strong>\n            </button>\n        </ion-item>\n    </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Users/stevcetuman/Documents/AIT/Cross Apps/final/5565_Stevche_Tumanovski_FinalApplication/mytasks/src/pages/todo-detail-modal/todo-detail-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TodoDetailModalPage);
    return TodoDetailModalPage;
}());

//# sourceMappingURL=todo-detail-modal.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/archived-todos/archived-todos.module": [
		440,
		4
	],
	"../pages/edit-todo-modal/edit-todo-modal.module": [
		441,
		3
	],
	"../pages/login/login.module": [
		442,
		2
	],
	"../pages/register/register.module": [
		443,
		0
	],
	"../pages/todo-detail-modal/todo-detail-modal.module": [
		444,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 194;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_todo_todo__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__archived_todos_archived_todos__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_detail_modal_todo_detail_modal__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_todo_modal_edit_todo_modal__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(modalCtrl, db, toastController, todoService, navCtrl, alertController) {
        // this.todos = this.todoService.getTodos();
        this.modalCtrl = modalCtrl;
        this.db = db;
        this.toastController = toastController;
        this.todoService = todoService;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.todos = {};
        this.reorderIsEnabled = false;
        this.archivedTodosPage = __WEBPACK_IMPORTED_MODULE_3__archived_todos_archived_todos__["a" /* ArchivedTodosPage */];
        this.itemTasks = {};
        this.itemListRef$ = this.db.list('tasks', {
            query: {
                orderByChild: 'date'
            }
        });
        console.log(" Test1 " + this.itemListRef$);
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
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.archiveTodo = function (todo) {
        // this.todoService.archiveTodo(todo.$key);
        this.itemListRef$.remove(todo.$key);
        this.db.list('/archiveTodo').push({
            task: todo.task
        }).then(function () {
            //message is sent
        });
    };
    HomePage.prototype.toggleReorder = function () {
        this.reorderIsEnabled = !this.reorderIsEnabled;
    };
    HomePage.prototype.itemReordered = function ($event) {
        //import reorderArray
        // reorderArray(this.todos, $event);
    };
    HomePage.prototype.goToArchivePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__archived_todos_archived_todos__["a" /* ArchivedTodosPage */]);
    };
    HomePage.prototype.openTodoAlert = function () {
        var _this = this;
        var addTodoAlert = this.alertController.create({
            title: "Add new task",
            message: "Enter your task",
            inputs: [{
                    type: "text",
                    name: "addToDoInput"
                }],
            buttons: [{
                    text: "Cancel"
                }, {
                    text: "Add Task",
                    handler: function (inputData) {
                        var todoText;
                        todoText = inputData.addToDoInput;
                        // this.todoService.addTodo(todoText);
                        _this.db.list('/tasks').push({
                            task: todoText,
                        }).then(function () {
                        });
                        addTodoAlert.onDidDismiss(function () {
                            var addTodoToast = _this.toastController.create({
                                message: "New Task Added",
                                duration: 2000
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
    };
    HomePage.prototype.editTodo = function (todo) {
        var _this = this;
        var editTodoAlert = this.alertController.create({
            title: "Edit Task",
            message: "Edit your task name",
            inputs: [{
                    type: "text",
                    name: "editToDoInput",
                    value: '' //this.todos[todoIndex]
                }],
            buttons: [{
                    text: "Cancel"
                }, {
                    text: "Edit Task",
                    handler: function (inputData) {
                        todo.task = inputData.editToDoInput;
                        console.log("Todo Key: " + todo.$key);
                        _this.db.object('/tasks/' + todo.$key).set(todo);
                        // let todoText;
                        // todoText = inputData.editToDoInput;
                        // this.todoService.editTodo(todoText,todoIndex);
                        editTodoAlert.onDidDismiss(function () {
                            var addTodoToast = _this.toastController.create({
                                message: "Task Edited",
                                duration: 2000
                            });
                            addTodoToast.present();
                        });
                    }
                }]
        });
        editTodoAlert.present();
    };
    HomePage.prototype.openTodoDetailModal = function () {
        var todoModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__todo_detail_modal_todo_detail_modal__["a" /* TodoDetailModalPage */], {});
        todoModal.onDidDismiss(function (todo) {
            // this.passengerDetail = passenger;
        });
        todoModal.present();
    };
    HomePage.prototype.editTodoDetailModal = function (todo) {
        var _this = this;
        var todoModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__edit_todo_modal_edit_todo_modal__["a" /* EditTodoModalPage */], { send: todo });
        todoModal.onDidDismiss(function (todo) {
            _this.itemTasks = todo;
            _this.db.object('/tasks/' + todo.$key).set(todo);
        });
        todoModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/stevcetuman/Documents/AIT/Cross Apps/final/5565_Stevche_Tumanovski_FinalApplication/mytasks/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            My Tasks\n        </ion-title>\n        <ion-buttons end>\n            <!-- <button ion-button (click)="openTodoAlert()"> -->\n            <button ion-button (click)="openTodoDetailModal()">\n            <ion-icon name="add"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list [reorder]="reorderIsEnabled" (ionItemReorder)="itemReordered($event)">\n        <ion-item-sliding *ngFor="let todo of itemListRef$ | async; let todoIndex = index">\n\n            <ion-item-options side="left">\n                <button ion-button (click)="editTodoDetailModal(todo)">\n                <ion-icon name="create"></ion-icon>\n              </button>\n\n            </ion-item-options>\n\n            <ion-item [color]="todo.order == 1 ? \'danger\' : \'primary\'">\n                {{todo.task}}\n                <div>{{todo.date}}</div>\n            </ion-item>\n\n            <ion-item-options side="right">\n                <button color="danger" ion-button (click)="archiveTodo(todo)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n\n            </ion-item-options>\n        </ion-item-sliding>\n\n    </ion-list>\n\n    <ion-fab right bottom>\n        <!-- <button ion-fab [navPush]="archivedTodosPage"> -->\n        <button ion-fab (click)="goToArchivePage()">\n            <ion-icon name="archive"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/stevcetuman/Documents/AIT/Cross Apps/final/5565_Stevche_Tumanovski_FinalApplication/mytasks/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_todo_todo__["a" /* TodoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(303);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_todo_todo__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_archived_todos_archived_todos__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database_deprecated__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_todo_detail_modal_todo_detail_modal__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_edit_todo_modal_edit_todo_modal__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var config = {
    apiKey: "AIzaSyARL5lFYd5FjuaF6UmR1Gfj8fixkijwb3Q",
    authDomain: "mytasks-98450.firebaseapp.com",
    databaseURL: "https://mytasks-98450.firebaseio.com",
    projectId: "mytasks-98450",
    storageBucket: "mytasks-98450.appspot.com",
    messagingSenderId: "871480214557"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_archived_todos_archived_todos__["a" /* ArchivedTodosPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_todo_detail_modal_todo_detail_modal__["a" /* TodoDetailModalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_edit_todo_modal_edit_todo_modal__["a" /* EditTodoModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/archived-todos/archived-todos.module#ArchivedTodosPageModule', name: 'ArchivedTodosPage', segment: 'archived-todos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-todo-modal/edit-todo-modal.module#EditTodoModalPageModule', name: 'EditTodoModalPage', segment: 'edit-todo-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/todo-detail-modal/todo-detail-modal.module#TodoDetailModalPageModule', name: 'TodoDetailModalPage', segment: 'todo-detail-modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database_deprecated__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_archived_todos_archived_todos__["a" /* ArchivedTodosPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_todo_detail_modal_todo_detail_modal__["a" /* TodoDetailModalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_edit_todo_modal_edit_todo_modal__["a" /* EditTodoModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_todo_todo__["a" /* TodoService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/stevcetuman/Documents/AIT/Cross Apps/final/5565_Stevche_Tumanovski_FinalApplication/mytasks/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/stevcetuman/Documents/AIT/Cross Apps/final/5565_Stevche_Tumanovski_FinalApplication/mytasks/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[282]);
//# sourceMappingURL=main.js.map