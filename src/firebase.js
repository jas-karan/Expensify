import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBMfkmdeEs6eDeXnN9pAtvg0oHlsQ9p0T4",
    authDomain: "expensify262.firebaseapp.com",
    projectId: "expensify262",
    storageBucket: "expensify262.appspot.com",
    messagingSenderId: "758833096316",
    appId: "1:758833096316:web:278567e90435d86b304bf9",
    measurementId: "G-8PNGV4TVWP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };