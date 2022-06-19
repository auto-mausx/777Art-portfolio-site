import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";
import "firebase/storage";
import "firebase/firestore";


const config = {
  apiKey: "AIzaSyBBtJaPFlEIqXUmjNKE9b8n9HLDFdL4RnM",
  authDomain: "triple-seven-art.firebaseapp.com",
  databaseURL: "https://triple-seven-art-default-rtdb.firebaseio.com",
  projectId: "triple-seven-art",
  storageBucket: "triple-seven-art.appspot.com",
  messagingSenderId: "502528131345",
  appId: "1:502528131345:web:5897854cc015c8e9fbccb0",
  measurementId: "G-2SF2NZSWML"
};

var firebaseapp = null;

if (!firebase.apps.length) {
  firebaseapp = firebase.initializeApp(config);
} else {
  firebaseapp = firebase.app(); // if already initialized, use that one
}

const projectStorage = firebaseapp.storage();
const projectFirestore = firebaseapp.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
const auth = firebase.auth();
const persistance = firebase.auth.Auth.Persistence.NONE;

export { projectStorage, projectFirestore, timeStamp, auth, persistance };
