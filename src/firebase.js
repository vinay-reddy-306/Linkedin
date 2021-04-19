import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAFJz3w14NFUyqA-47Dx2OuTLJfPUXaqVI",
    authDomain: "linkedin-71c2e.firebaseapp.com",
    projectId: "linkedin-71c2e",
    storageBucket: "linkedin-71c2e.appspot.com",
    messagingSenderId: "1078328869069",
    appId: "1:1078328869069:web:47e6f55a348867e6216984"
};
  
const firebaseapp = firebase.initializeApp(firebaseConfig)
const db = firebaseapp.firestore()
const auth = firebase.auth()

export {db,auth}