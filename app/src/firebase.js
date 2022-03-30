import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID=G-C8FCKZ372B

    apiKey: "AIzaSyAAg4AXsSJqO9MlQ90ejw5VyETYIE0gvi0",
    authDomain: "oneeleven-8b18d.firebaseapp.com",
    databaseURL: "https://oneeleven-8b18d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "oneeleven-8b18d",
    storageBucket: "oneeleven-8b18d.appspot.com",
    messagingSenderId: "473027161799",
    appId: "1:473027161799:web:f44ee8f4efa5a9b14c98e2",
    measurementId: "G-C8FCKZ372B"

});

export const auth = app.auth();
export default { app };

export const authentication = getAuth(app);
console.log(authentication)