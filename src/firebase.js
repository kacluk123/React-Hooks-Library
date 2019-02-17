import firebase from "firebase";
const config = {
    apiKey: "AIzaSyAB9LrENMhzOTd0Umzm6HB-nRqJNI0Kaog",
    authDomain: "react-library-4d6f9.firebaseapp.com",
    databaseURL: "https://react-library-4d6f9.firebaseio.com",
    projectId: "react-library-4d6f9",
    storageBucket: "react-library-4d6f9.appspot.com",
    messagingSenderId: "492297980458"
};
firebase.initializeApp(config);

export default firebase;