// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBsDm99-pBD0J8JgqpvEO5R_YbVFzc67us",
	authDomain: "corn-i.firebaseapp.com",
	projectId: "corn-i",
	storageBucket: "corn-i.appspot.com",
	messagingSenderId: "262999805791",
	appId: "1:262999805791:web:2d536b89b02fdb7e9370ea",
	measurementId: "G-1JQ49PQ5ER",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
