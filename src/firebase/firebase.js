import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCUzD9or8ClpTDxykYvG5W6y19HWg6iO_s",
    authDomain: "thunder-planner.firebaseapp.com",
    databaseURL: "https://thunder-planner.firebaseio.com",
    projectId: "thunder-planner",
    storageBucket: "thunder-planner.appspot.com",
    messagingSenderId: "709001964473"
  };
  firebase.initializeApp(config);
  
  const database = firebase.database();
  
  export { firebase, database as default };
  