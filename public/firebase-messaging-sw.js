


importScripts('https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js');
  importScripts('https://www.gstatic.com/firebasejs/8.9.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCn0UNFwHobOyygcieoACYSD7TArgJ73-4",
    authDomain: "notfications-9954c.firebaseapp.com",
    projectId: "notfications-9954c",
    storageBucket: "notfications-9954c.appspot.com",
    messagingSenderId: "492194665355",
    appId: "1:492194665355:web:83652a41e494b70738958e",
    measurementId: "G-1BB9LQ4EHM"
  };
  
  firebase.initializeApp(firebaseConfig)
  firebase.messaging()