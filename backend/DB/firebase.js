// // // const admin = require('firebase-admin');
// // // const serviceAccount = require('../src/playways.json'); // Add your serviceAccountKey.json path

// // const firebase = require("firebase/app");
// // require("firebase/firestore");
// // // require('firebase/storage');

// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyCMWIgGe8ZzspLLW6eJNTFTEof6LCleeW4",
// //   authDomain: "playways-72881.firebaseapp.com",
// //   projectId: "playways-72881",
// //   storageBucket: "playways-72881.appspot.com",
// //   messagingSenderId: "864698366144",
// //   appId: "1:864698366144:web:a111a8caa2c5957af5d525",
// //   measurementId: "G-GH5MZTE3G2",
// // };

// // // Initialize Firebase (client-side)
// // let app = null;
// // try {
// //   app = firebase.app(); // Check if the app is already initialized
// // } catch (error) {
// //   app = firebase.initializeApp(firebaseConfig); // If not, initialize it
// // }

// // // Get Firestore and Storage instances
// // const db = firebase.firestore();
// // // const storage = firebase.storage();

// // module.exports = { db, app };

// // firebase.js

// const admin = require("firebase-admin");
// const serviceAccount = require("../src/playways.json"); // Path to your service account key JSON file

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   storageBucket: 'gs://playways-72881.appspot.com',
// });

// const db = admin.firestore();
// const storage = admin.storage();

// // Check if Firestore is connected
// db.settings({ timestampsInSnapshots: true }); // Optional setting for Firestore

// // Check if Cloud Storage is connected
// storage.bucket()
//   .getFiles()
//   .then(() => {
//     console.log('Connected to Firebase Cloud Storage!');
//   })
//   .catch((error) => {
//     console.error('Error connecting to Firebase Cloud Storage:', error);
//   });

// module.exports = { db, storage };
