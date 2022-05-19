
import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBTzGyv0YRKXXyAOTa3cN_9yE4koVysJ4o",
  authDomain: "crud-web-f2ed3.firebaseapp.com",
  projectId: "crud-web-f2ed3",
  storageBucket: "crud-web-f2ed3.appspot.com",
  messagingSenderId: "1019092323676",
  appId: "1:1019092323676:web:7b3c167f5a7a42ba560599"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}