import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TodolistComponent
  ],
  imports: [
    CommonModule,//noch schauen was der abschnitt so macht
    BrowserModule,
    RouterModule.forChild([
      {
        path:'',
        component:TodolistComponent//wichtig Component exportieren das module hat ja kein inhalt
      }
    ])
  ]
})
export class TodolistModule { }
