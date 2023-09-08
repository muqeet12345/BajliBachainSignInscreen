import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseconfig = {
  
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseconfig);
}

export { firebase };
