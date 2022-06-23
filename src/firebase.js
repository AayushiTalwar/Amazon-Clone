import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6Rw0lDpquloVk576nUVN8qSLliEOEEys",
  authDomain: "clone2022-6a1e0.firebaseapp.com",
  projectId: "clone2022-6a1e0",
  storageBucket: "clone2022-6a1e0.appspot.com",
  messagingSenderId: "95250566612",
  appId: "1:95250566612:web:43269a76108e000fc0da41",
  measurementId: "G-3XQKNB6F93"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;