import * as firebase from 'firebase/app';
// import firebaseConfig from "./firebaseConfig";
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyC81RkBYIg9KNhBCTFpVKNKQEuMRjbTSpA',
  authDomain: 'testproj-d2cd8.firebaseapp.com',
  databaseURL: 'https://testproj-d2cd8.firebaseio.com',
  projectId: 'testproj-d2cd8',
  storageBucket: 'testproj-d2cd8.appspot.com',
  messagingSenderId: '104581657479',
  appId: '1:104581657479:web:c89d3b3451f99617ef9922',
  measurementId: 'G-1FW11P39ET',
};

firebase.initializeApp(config);
// export const auth = firebase.auth();

export default firebase;
