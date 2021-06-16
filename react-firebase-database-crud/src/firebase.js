import firebase from 'firebase/app'
import "firebase/database";

let config = {
  apiKey: "AIzaSyD301TbnmW0ztEWLcgHvHESo0_uJ22gMeM",
    authDomain: "tache19.firebaseapp.com",
    databaseURL: "https://tache19-default-rtdb.firebaseio.com",
    projectId: "tache19",
    storageBucket: "tache19.appspot.com",
    messagingSenderId: "1008486448305",
    appId: "1:1008486448305:web:f60f19551f2644dcf47690"


};

firebase.initializeApp(config);

export default firebase.database();