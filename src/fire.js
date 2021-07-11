import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDYt5XDeGHUmoMEp5UHUJTEylsdDMEKkY4",
    authDomain: "nautilus-d6d6f.firebaseapp.com",
    projectId: "nautilus-d6d6f",
    storageBucket: "nautilus-d6d6f.appspot.com",
    messagingSenderId: "69858624941",
    appId: "1:69858624941:web:fe3ec7c7eff73f3445cd24"
  };
 
const fire = firebase.initializeApp(firebaseConfig);

export default fire;