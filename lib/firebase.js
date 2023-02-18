
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
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;


export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
}

export function postToJSON(doc) {
    const data = doc.data();
    return {
        ...data,
        createdAt: data?.createdAt.toMillis() || 0,
        updatedAt: data?.updatedAt.toMillis() || 0,
    };
}


export const fromMillis = firebase.firestore.Timestamp.fromMillis;

