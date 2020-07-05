import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from "@angular/animations";
import { DataService } from '../data.service';
import { goalsAnimation } from "../animations/goals";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    goalsAnimation
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText = 'Add an item';
  goalText = 'My First Goal';
  goals: string[] = ['Learn Angular 5', 'Get a job', 'Work with Matt'];
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this.data.changeGoal(this.goals);
  }

  addItem(): void {
    this.goals.push(this.goalText);
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
