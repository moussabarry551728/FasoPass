import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "ICI_API_KEY",
  authDomain: "fasopass.firebaseapp.com",
  projectId: "fasopass",
  storageBucket: "fasopass.firebasestorage.app",
  messagingSenderId: "ICI_SENDER_ID",
  appId: "ICI_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };