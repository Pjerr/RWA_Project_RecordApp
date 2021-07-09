import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecordListComponent } from './components/record-list/record-list.component';
import { RecordSongsComponent } from './components/record-songs/record-songs.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes:Routes = [
  {
    path:'',
    component:RecordListComponent
  },
  {
    path:'songs',
    component:RecordSongsComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'**',
    component: ErrorPageComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
