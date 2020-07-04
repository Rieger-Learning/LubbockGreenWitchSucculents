import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<string[]>(['Get a jerb', 'Learn Angulars 5+']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal): void {
    this.goals.next(goal);
  }

}
