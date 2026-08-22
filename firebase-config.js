import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAi1WnffifU9KHSCsoJ_sundZsY3yZ7yy4",
  authDomain: "fasopass.firebaseapp.com",
  projectId: "fasopass",
  storageBucket: "fasopass.firebasestorage.app",
  messagingSenderId: "775126269357",
  appId: "1:775126269357:web:bb22c2065ce3ec1971b524",
  measurementId: "G-1JS59XQSQ2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };