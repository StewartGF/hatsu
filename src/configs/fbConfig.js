import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCvE5SaGGJESUDiEEFP1KrdXo2Q326u78E",
  authDomain: "hatsu-dev.firebaseapp.com",
  databaseURL: "https://hatsu-dev.firebaseio.com",
  projectId: "hatsu-dev",
  storageBucket: "hatsu-dev.appspot.com",
  messagingSenderId: "645905440317",
  appId: "1:645905440317:web:ac8a928ccd5c0d00129454",
  measurementId: "G-5W7NDS1GZQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
