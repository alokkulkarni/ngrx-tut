import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../app.state';
import {Tutorial} from '../models/tutorial.models'
import * as TutorialActions from '../actions/tutorial.actions';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  name:string;
  url:string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

addTutorial(name, url) {
  this
    .store
    .dispatch(new TutorialActions.AddTutorial({name: this.name, url: this.url}));
  this.name=" ";
  this.url=" ";  
}

}



// node - mac - notifier
// electron - notification - state
// npm install electron - packager-- save - dev ---
// https://coursetro.com/posts/code/124/Electron-App-Deployment-Tutorial
// https : //coursetro.com/courses/17/Create-a-Full-Upcoming-Games-App-with-Ionic-3/lessons/11
// https : //coursetro.com/courses/18/Build-a-Beautiful-CryptoCurrency-App-using-Ionic-3
// npm install axios-- save