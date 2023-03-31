import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDxyR4Y1g2mBqp1LfHfi1v7ex5S429G0Uo",
  authDomain: "pro-c-71-ae963.firebaseapp.com",
  projectId: "pro-c-71-ae963",
  storageBucket: "pro-c-71-ae963.appspot.com",
  messagingSenderId: "364962895989",
  appId: "1:364962895989:web:837ffc240de0fe9af3803c",
  measurementId: "G-F1K7KD8W1E"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
