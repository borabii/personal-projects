import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAMkPr9m5CD8lj45uQEeRCSFf5_eACIW5I",
    authDomain: "e-clone-21f45.firebaseapp.com",
    databaseURL: "https://e-clone-21f45.firebaseio.com",
    projectId: "e-clone-21f45",
    storageBucket: "e-clone-21f45.appspot.com",
    messagingSenderId: "572904366117",
    appId: "1:572904366117:web:b98418a1f25f8aa2351fcc",
    measurementId: "G-W3FLFM6L7X"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};