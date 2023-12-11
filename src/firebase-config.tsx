// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC3At0oefHKhIwFsoajaUojEVQ5thelHcA",
	authDomain: "waleema-rsvp.firebaseapp.com",
	projectId: "waleema-rsvp",
	storageBucket: "waleema-rsvp.appspot.com",
	messagingSenderId: "148344984223",
	appId: "1:148344984223:web:1664390a66de82eb8748aa",
	measurementId: "G-13Z1W9T927",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
