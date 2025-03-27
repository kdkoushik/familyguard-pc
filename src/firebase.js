const firebase = require('firebase/app');
require('firebase/database');

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  databaseURL: "YOUR_FIREBASE_DB_URL",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

module.exports = { database };
