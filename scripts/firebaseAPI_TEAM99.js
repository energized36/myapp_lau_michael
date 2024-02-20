//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyCIjS6bFexW775ymLl57IoT9o66yLmoAoo",

    authDomain: "comp1800-202410-demo-d6448.firebaseapp.com",

    projectId: "comp1800-202410-demo-d6448",

    storageBucket: "comp1800-202410-demo-d6448.appspot.com",

    messagingSenderId: "82394808807",

    appId: "1:82394808807:web:fa0f836fd6df9986f43d42"

};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
