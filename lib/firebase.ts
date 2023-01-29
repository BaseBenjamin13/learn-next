
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDQtBLRUv1WeFTFSMn5a3xYumKyvM2euSY",
    authDomain: "bens-demo-84a18.firebaseapp.com",
    projectId: "bens-demo-84a18",
    storageBucket: "bens-demo-84a18.appspot.com",
    messagingSenderId: "525917020112",
    appId: "1:525917020112:web:871ad521b5b5d64703a3d5",
    measurementId: "G-6Y752VC84S"
}

if (!firebase.apps.length){
    console.log(firebaseConfig)
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
