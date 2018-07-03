import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor() {
    const config = {
      apiKey: "AIzaSyBSjNnDGk-G_4TILdz8hHKTnWGtiRquHM4",
      authDomain: "blog-975fd.firebaseapp.com",
      databaseURL: "https://blog-975fd.firebaseio.com",
      projectId: "blog-975fd",
      storageBucket: "blog-975fd.appspot.com",
      messagingSenderId: "423100129001"
    };
    firebase.initializeApp(config);
  }



}
