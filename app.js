import {  signInWithEmailAndPassword,
   GoogleAuthProvider ,
   signInWithPopup,
   GithubAuthProvider  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";


const form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#pass')
const google = document.querySelector('#google')
const github = document.querySelector('#github')


form.addEventListener('submit' ,async (event)=>{
    event.preventDefault();

    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location = 'home.html'

    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });


})

const provider = new GoogleAuthProvider();

google.addEventListener('click' , ()=>{
  console.log('google');

  signInWithPopup(auth , provider)
  .then((result) => {
  
    var user = result.user;
   console.log(user);

   window.location = 'home.html'
  }).catch((error) => {
    
    var errorMessage = error.message;
    console.log(errorMessage);
  });
});



const githubProvider = new GithubAuthProvider();

github.addEventListener('click' , ()=>{
  console.log('');


  signInWithPopup(auth, githubProvider)
  .then((result) => {
   
    
    var user = result.user;
   console.log(User);



  }).catch((error) => {
    
    var errorMessage = error.message;
   console.log(errorMessage
    
   );
  });

});


