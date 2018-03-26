import { Component } from '@angular/core';
import * as firebase from 'firebase';

import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAEmVjMXmJpQ69QG9LRwQ2g2vZu0FJLKCs",
      authDomain: "blog-project-backend.firebaseapp.com",
      databaseURL: "https://blog-project-backend.firebaseio.com",
      projectId: "blog-project-backend",
      storageBucket: "blog-project-backend.appspot.com",
      messagingSenderId: "500835007449"
    };
    firebase.initializeApp(config);
  }
}
