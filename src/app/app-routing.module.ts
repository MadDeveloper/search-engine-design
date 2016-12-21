import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { GoogleService } from '../services/google.service'

import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  }
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( routes, { useHash: true } ),
  ],
  providers: [ GoogleService ],
  declarations: [ HomeComponent ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
