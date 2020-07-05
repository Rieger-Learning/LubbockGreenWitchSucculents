import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<string[]>(['Learn Angular 10', 'Provide good service']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal): void {
    this.goals.next(goal);
  }

}
