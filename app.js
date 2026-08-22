import { auth, db } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Vérifie la connexion à Firestore
async function verifierConnexion() {
  try {
    const snap = await getDocs(collection(db, "utilisateurs"));
    console.log("✅ Firestore connecté :", snap.size, "utilisateur(s).");
  } catch (error) {
    console.error("Erreur Firestore :", error);
  }
}

verifierConnexion();

// Connexion administrateur
const bouton = document.getElementById("btnConnexion");

if (bouton) {
  bouton.addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      message.textContent = "Connexion réussie.";
      message.className = "success";
      window.location.href = "dashboard.html";
    } catch (error) {
      message.textContent = "Email ou mot de passe incorrect.";
      message.className = "error";
    }
  });
}