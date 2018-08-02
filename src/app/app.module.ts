import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BasicAngularComponent } from './basic-angular/basic-angular.component';
import {HttpClientModule} from '@angular/common/http';
import {JsonplaceholderService} from './services/jsonplaceholder.service';
import { HttprequestComponent } from './httprequest/httprequest.component';
import {Router, RouterModule} from '@angular/router';

const ROUTING = [

  {
    path: '',
    redirectTo : 'basic',
    pathMatch : 'full'
  },
  {
    path: 'basic',
    component: BasicAngularComponent
  },
  {
    path: 'httprequest',
    component: HttprequestComponent
  },
  {
    path: '**',
    component: HttprequestComponent
  }
  ];



@NgModule({
  declarations: [
    AppComponent,
    HttprequestComponent,
    BasicAngularComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTING)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    JsonplaceholderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
