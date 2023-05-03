import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js';
import { getDatabase, ref, set, onChildAdded } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

const firebaseConfig = {
   apiKey: "AIzaSyAr7G2RmmcIDGv0S9Ksv3y-2FLl3np3_o4",
   authDomain: "anslagstavla-45a34.firebaseapp.com",
   databaseURL: "https://anslagstavla-45a34-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "anslagstavla-45a34",
   storageBucket: "anslagstavla-45a34.appspot.com",
   messagingSenderId: "991604486373",
   appId: "1:991604486373:web:d2639c9af0b8320ea0640c"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);



const msgTxt = document.getElementById('msgTxt');
let sender;
if (sessionStorage.getItem('sender')) {
   sender = sessionStorage.getItem('sender');
} else {
   sender = prompt('Please enter your name');
   sessionStorage.setItem('sender', sender);
}

const sendMsg = function sendMsg() {
   var msg = msgTxt.value;
   var timestamp = new Date().getTime();
   set(ref(database, "messages/" + timestamp), {
      msg: msg,
      sender: sender
   });
   msgTxt.value = "";
}

document.getElementById("msgBtn").addEventListener("click", sendMsg);


onChildAdded(ref(database, "messages"), (data) => {
   if (data.val().sender == sender) {

      messages.innerHTML += "<div id=" + data.key + ">you : " + data.val().msg + "</div><div>";
      upstream / main
   } else {
      messages.innerHTML += "<div id=" + data.key + ">" + data.val().sender + " : " + data.val().msg + "</div></div>";
   }
});

