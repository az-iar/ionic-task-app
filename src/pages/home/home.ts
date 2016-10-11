import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	tasks: Array<{title: string, isCompleted: boolean}>;

  	constructor(public navCtrl: NavController) {
  		
  	}

  	ngOnInit(){
  		this.tasks = [
  			{title:'test', isCompleted: true},
  			{title:'Go Home', isCompleted: false},
  			{title:'Eat', isCompleted: false},
  			{title:'Sleep', isCompleted: false},
  		];
  	}

  	showTask(task){
  		task.isCompleted = ! task.isCompleted;
  	}

  	addTask(newTask){
  		this.tasks.push({
  			title: newTask.value,
  			isCompleted: false
  		});

  		newTask.value = '';
  	}
}
