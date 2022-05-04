import firebase from "firebase/compat/app"
import "firebase/compat/database"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxkUuJsy4CnoGVgOonTTJbloHpgW5QQPc",
  authDomain: "candyshop-8c79b.firebaseapp.com",
  projectId: "candyshop-8c79b",
  storageBucket: "candyshop-8c79b.appspot.com",
  messagingSenderId: "362190006976",
  appId: "1:362190006976:web:42c86bbe12dc61565b5b25",
  measurementId: "G-FSNPM2V0DR"
};

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebase;