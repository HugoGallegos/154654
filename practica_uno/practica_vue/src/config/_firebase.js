import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDocBUG1JNo3yH377vsKVi7NWgpERTXqMY',
  authDomain: 'login-signup-9d4b2.firebaseapp.com',
  databaseURL: 'https://login-signup-9d4b2.firebaseio.com',
  projectId: 'login-signup-9d4b2',
  storageBucket: 'login-signup-9d4b2.appspot.com',
  messagingSenderId: '657320200817',
  appId: '1:657320200817:web:43cfb6a42a2b4468e8e9d0',
  measurementId: 'G-G9WYDNJV57'
}

var fireApp = firebase.initializeApp(firebaseConfig)

export default fireApp
