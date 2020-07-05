import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '../../src/app/home/home.component';
import {AboutComponent} from '../../src/app/about/about.component';
import {TodoComponent} from './todo/todo.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {animation: 'slideAnimation'}
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {animation: 'slideInAnimation'}
  },
  {
    path: 'todo',
    component: TodoComponent,
    data: {animation: 'slideInAnimation'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
