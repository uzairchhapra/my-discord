import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC0SRREV8ewqPkNTtqpZb6m76JTNckfsPg",
    authDomain: "my-discord-962fb.firebaseapp.com",
    projectId: "my-discord-962fb",
    storageBucket: "my-discord-962fb.appspot.com",
    messagingSenderId: "673190778983",
    appId: "1:673190778983:web:9c0c00d269dd0f25991cc2",
    measurementId: "G-M4BQH73Z1M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;