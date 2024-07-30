import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"; 
import {auth, db } from "./config.js";


 



onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      // console.log(user);
      
    } else {
      window.location = 'index.html'
    }
  });

  const logout = document.querySelector('#logout-btn');

  logout.addEventListener('click', ()=>{
    signOut(auth).then(() => {
        console.log('logout successfully');
        window.location = 'index.html'
      }).catch((error) => {
        console.log(error);
      });
      
  })


  async function render() {

    const arr =[];

    const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    arr.push(doc.data())
    
  });
  console.log(arr);

};
  
render()
  
  
  
  
    
  
  



const form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#pass')


form.addEventListener('submit' , async (event)=>{
    event.preventDefault();
    try {
        const docRef = await addDoc(collection(db, "users"), {
          email:email.value,
          password:password.value,
    

        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
    console.log(email.value);
    console.log(password.value);
    
});


 