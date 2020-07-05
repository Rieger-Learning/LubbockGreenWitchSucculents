import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { goalsAnimation } from '../animations/goals';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
    goalsAnimation
  ]
})
export class TodoComponent implements OnInit {
  itemCount: number;
  btnText = 'Add an item';
  goalText = '';
  goals: string[];
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this.data.changeGoal(this.goals);
  }

  addItem(): void {
    this.goals.push(this.goalText ? this.goalText : 'Empty');
    this.goalText = '';
    this.itemCount = this.goals.length;
    this.data.changeGoal(this.goals);
  }

  removeItem(i): void {
    this.goals.splice(i, 1);
    this.itemCount = this.goals.length;
    this.data.changeGoal(this.goals);
  }

}
