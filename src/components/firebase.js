import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBw09qhwJRL0w6KRrzN3x9TiVv5DkpxeHE",
  authDomain: "clone-78205.firebaseapp.com",
  databaseURL: "https://clone-78205.firebaseio.com",
  projectId: "clone-78205",
  storageBucket: "clone-78205.appspot.com",
  messagingSenderId: "478391280791",
  appId: "1:478391280791:web:0da8b824fb0740138435d2",
  measurementId: "G-BWEH90E437",
});

const auth = firebase.auth();

export { auth };
