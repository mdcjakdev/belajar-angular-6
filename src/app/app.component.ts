import {Component} from '@angular/core';
import {JsonplaceholderService} from './services/jsonplaceholder.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private r: Router) {
  }



}
