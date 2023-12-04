
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJAA4XogUsQBzdU26sDhKlWQhNnBzl5EY",
  authDomain: "miniblog-56a0a.firebaseapp.com",
  projectId: "miniblog-56a0a",
  storageBucket: "miniblog-56a0a.appspot.com",
  messagingSenderId: "548293688906",
  appId: "1:548293688906:web:c620847fc6666f8ad4b0b3"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}