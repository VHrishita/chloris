// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyByp9iWZ0ZsiDIvi84JurZUJohUfPMpNbY",
  authDomain: "chloris-bc7c7.firebaseapp.com",
  projectId: "chloris-bc7c7",
  storageBucket: "chloris-bc7c7.appspot.com",
  messagingSenderId: "198937142609",
  appId: "1:198937142609:web:93b9b118d7fae2d7705f70"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Authentication helpers
export async function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function logIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function logOut() {
  return auth.signOut();
}
