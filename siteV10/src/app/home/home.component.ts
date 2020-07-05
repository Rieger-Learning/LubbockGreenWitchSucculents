import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: []
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Lubbock Green Witch Blog');
  }

}
