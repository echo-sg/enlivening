import { initializeApp } from 'firebase/app';
// import { getAuth, connectAuthEmulator } from "firebase/auth";
// import { getDatabase, connectDatabaseEmulator } from "firebase/database";
// import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// import { getStorage, connectStorageEmulator } from "firebase/storage";
// import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// If you're using Firebase Emulator, uncomment this code to enable react app use the Emulator
// if (
//   window.location.host.includes("localhost") ||
//   window.location.host.includes("127.0.0.1")
// ) {
//   const functions = getFunctions(firebaseApp);
//   connectFunctionsEmulator(functions, "localhost", 5001);
//   const storage = getStorage();
//   connectStorageEmulator(storage, "localhost", 9199);
//   const FireStoreDb = getFirestore();
//   connectFirestoreEmulator(FireStoreDb, "localhost", 8080);
//   const db = getDatabase();
//   connectDatabaseEmulator(db, "localhost", 9000);
//   const auth = getAuth();
//   connectAuthEmulator(auth, "http://localhost:9099");
// }

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBi4TdnECgFIjSFoaew4nCYadafH-8z6Dc',
  authDomain: 'enlivening-c4bfe.firebaseapp.com',
  projectId: 'enlivening-c4bfe',
  storageBucket: 'enlivening-c4bfe.appspot.com',
  messagingSenderId: '637143112583',
  appId: '1:637143112583:web:df7536ea9b7637c1f61122',
  measurementId: 'G-7BG0N3ZD5M',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
