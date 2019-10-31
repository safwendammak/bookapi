import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {ResultComponent} from './result/result.component';


const routes: Routes = [
  { path: '',  component: SearchComponent },
  { path: 'result',  component: ResultComponent },
  { path: 'result/:key', component: ResultComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
