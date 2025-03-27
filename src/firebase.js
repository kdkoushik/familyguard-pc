const firebase = require('firebase/app');
require('firebase/database');

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  databaseURL: "YOUR_FIREBASE_DB_URL",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

module.exports = { database };


// Child ডিভাইসের স্ক্রিন টাইম ট্র্যাক করুন
database.ref('Children/CHILD_123/screenTime').on('value', (snapshot) => {
  const screenTime = snapshot.val();
  document.getElementById('screen-time').innerText = `${screenTime} মিনিট`;
});
