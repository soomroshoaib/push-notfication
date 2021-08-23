import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyCn0UNFwHobOyygcieoACYSD7TArgJ73-4",
    authDomain: "notfications-9954c.firebaseapp.com",
    projectId: "notfications-9954c",
    storageBucket: "notfications-9954c.appspot.com",
    messagingSenderId: "492194665355", 
    appId: "1:492194665355:web:83652a41e494b70738958e",
    measurementId: "G-1BB9LQ4EHM"
  };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging()

export function initNotification(){
    Notification.requestPermission().then((permission)=>{
      console.log(permission)
      if(permission == "granted"){
        messaging.getToken().then((currentToken) => {
            if (currentToken) {
              console.log("TOKEN")
              console.log(currentToken)
            } else {
              console.log('No registration token available. Request permission to generate one.');
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // ...
          });
    } 
    });
  
}