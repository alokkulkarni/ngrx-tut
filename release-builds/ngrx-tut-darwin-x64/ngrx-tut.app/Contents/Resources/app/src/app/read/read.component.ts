import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store'
import { Tutorial } from '../models/tutorial.models'
import { AppState } from '../app.state'
import * as TutorialActions from './../actions/tutorial.actions';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {


  tutorials : Observable<Tutorial[]>;

  // Section 2
  constructor(private store : Store<AppState>) {
    // this.tutorials = store.select('tutorial');
      var observable = Observable.create((observer : any) => {
                try {
                    observer.next(store.select('tutorial'))
                } catch(err) {
                    observer.error(err);
                }
              })

      observable.subscribe(
        (x : any) => this.tutorials = x,
        (error : any) => console.log(error),
        () => console.log('Completed')
      );
  }

  ngOnInit() {
  }

delTutorial(index) {
  this
    .store
    .dispatch(new TutorialActions.RemoveTutorial(index))
}

}
