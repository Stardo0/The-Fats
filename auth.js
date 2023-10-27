import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
 

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// my Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAXtLNPgeCOdgI_Jrn9AtKGG6k3ADmFSJA",
    authDomain: "the-fats-4c640.firebaseapp.com",
    projectId: "the-fats-4c640",
    storageBucket: "the-fats-4c640.appspot.com",
    messagingSenderId: "775676592680",
    appId: "1:775676592680:web:7c4ee17217930ee6782b1d",
    measurementId: "G-T770F9QSDL"
  };



const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider()

const signInButton = document.getElementById("signInButton");
const signOutButton = document.getElementById("signOutButton");
const message = document.getElementById("message");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

signOutButton.style.display = "none";
message.style.display = "none";

const userSignIn = async() => {
  signInWithPopup(auth, provider)
  .then((result) => {
      const user = result.user
      console.log(user);
  }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message
  })
}

const userSignOut = async() => {
  signOut(auth).then(() => {
      alert("You have signed out successfully!");
  }).catch((error) => {})
}

onAuthStateChanged(auth, (user) => {
  if(user) {
    signOutButton.style.display = "block";
    message.style.display = "block";
    userName.innerHTML = user.displayName;
    userEmail.innerHTML = user.email
  } else {
    signOutButton.style.display = "none";
    message.style.display = "none";
  }
})

signInButton.addEventListener('click', userSignIn);
signOutButton.addEventListener('click', userSignOut);

