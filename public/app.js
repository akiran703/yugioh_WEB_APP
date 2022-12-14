import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/auth";
// import { getAuth } from "firebase/auth";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    console.log(app)

});


const auth = firebase.auth();
// firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in 
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });



function createEmailLogin(){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
}

function emailLogin(){
    // const provider = new Firebase.auth.emailAu



}


function anonLogin(){

}
