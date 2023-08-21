import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/todolist', pathMatch:'full'
  },
  {
    path:'todolist', component: TodolistComponent //hier wichtig anzugeben, wenn hier nur dwe localhost ohne ein pfad danach angezeigt wird wird auf das component verwiesen
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
