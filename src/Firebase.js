import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBF8LUU-teTPxDIIrhckp5UV8H2ISCrTws",
    authDomain: "netflix-clone-f1abd.firebaseapp.com",
    projectId: "netflix-clone-f1abd",
    storageBucket: "netflix-clone-f1abd.appspot.com",
    messagingSenderId: "510019335915",
    appId: "1:510019335915:web:c121989386fa92bd3e30ae"
  };

  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore();
  const auth=firebase.auth();

  export {auth};
  export default db;