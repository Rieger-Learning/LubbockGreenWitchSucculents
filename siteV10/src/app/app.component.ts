import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from './_components/animations/baseRouterAnimations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  constructor(private title: Title) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void{
    this.title.setTitle('Lubbock Green Witch Succulents');
  }
  prepareRoute(outlet: RouterOutlet): RouterOutlet {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
