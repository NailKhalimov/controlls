import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAxM_yElxX5RIdzlVs0Z32u1zV-fByel1Y",
  authDomain: "forms-tests.firebaseapp.com",
  databaseURL: "https://forms-tests.firebaseio.com",
  projectId: "forms-tests",
  storageBucket: "forms-tests.appspot.com",
  messagingSenderId: "608416712027"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export {
  firebase,
  firebaseDB,
  googleAuth
}

// firebaseDB.ref('users').orderByChild('lastname').equalTo('Ball').once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val())
//   })