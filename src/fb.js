import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDHRm6RfdxJRIf-Os11BFXuA06Iy5H1vOs",
    authDomain: "todo-app-5d431.firebaseapp.com",
    projectId: "todo-app-5d431",
    storageBucket: "todo-app-5d431.appspot.com",
    messagingSenderId: "607163516168",
    appId: "1:607163516168:web:74dd7f0c8e6ad643f818bd",
    measurementId: "G-47E1XBDMM3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;