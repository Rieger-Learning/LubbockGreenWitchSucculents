import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './_components/home/home.component';
import {AboutComponent} from './_components/about/about.component';
import {TodoComponent} from './_components/todo/todo.component';


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
