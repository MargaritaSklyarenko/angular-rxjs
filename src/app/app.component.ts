import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngrx';

  constructor() {
    this.firstLesson();
  }

  firstLesson() {
    const o = Observable.create((observer: Observer<string>) => {
      observer.next('Hello');
      observer.complete();
    });

    o.subscribe({
      next: (value: string) => console.log('Next:', value),
      complete: () => console.log("Complete!"),
      error: (error) => console.log('Error', error)
    });
  }
}
