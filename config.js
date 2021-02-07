import * as firebase from 'firebase';
require('@firebase/firestore');


const firebaseConfig = {
  apiKey: "AIzaSyB1pTkUN4_UOAN4oMSiGk6HquHvHg2eGs0",
  authDomain: "wily-app-cf1a0.firebaseapp.com",
  projectId: "wily-app-cf1a0",
  storageBucket: "wily-app-cf1a0.appspot.com",
  databaseURL:"https://console.firebase.google.com/u/0/project/wily-app-cf1a0/firestore/data~2F",
  messagingSenderId: "185662925896",
  appId: "1:185662925896:web:ef6ec8568768bb0a36bc7d"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
