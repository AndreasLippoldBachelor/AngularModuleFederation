import { loadRemoteEntry, loadRemoteModule } from '@angular-architects/module-federation';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path:'todo', loadChildren:()=>{
      return loadRemoteModule({
        remoteEntry:"http://localhost:3001/remoteEntry.js",
        remoteName:"todo",
        exposedModule:"./TodoModule"

    }).then(m=>m.TodoModule).catch(err=>console.log(err))
    }
  },
  {
  path:'todolist', loadChildren: ()=>{
    return loadRemoteModule({
    remoteEntry:'http://localhost:3002/remoteEntry.js',
    remoteName:'todolist',
    exposedModule:'./TodolistModule'
    }).then(m=>m.TodolistModule).catch(err=>console.log(err))
  }
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
