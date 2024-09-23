import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAIr6Hy5J1cUfXOi5Sl2xHhM_nwaEdE_h0',
  authDomain: 'mydojoapp-a8762.firebaseapp.com',
  projectId: 'mydojoapp-a8762',
  storageBucket: 'mydojoapp-a8762.appspot.com',
  messagingSenderId: '975848518991',
  appId: '1:975848518991:web:f20856cc5b206a441f013a'
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
