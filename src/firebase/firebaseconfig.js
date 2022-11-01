// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA59psUGpKFaEaUvhfiipQNdIb6nsLxRbI",
  authDomain: "react-quiz-app-abe5a.firebaseapp.com",
  projectId: "react-quiz-app-abe5a",
  storageBucket: "react-quiz-app-abe5a.appspot.com",
  messagingSenderId: "976307104898",
  appId: "1:976307104898:web:5766a056c92bc2f538d89b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app