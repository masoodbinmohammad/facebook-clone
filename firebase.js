
import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDmswtrhEtU1Mo-r3I3P7cjyDX9SP4sCVc",
  authDomain: "facebook-clone-29200.firebaseapp.com",
  projectId: "facebook-clone-29200",
  storageBucket: "facebook-clone-29200.appspot.com",
  messagingSenderId: "559322415164",
  appId: "1:559322415164:web:b18ed1cc2a53fdbb60c339"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
