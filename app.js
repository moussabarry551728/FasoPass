import { db } from "./firebase-config.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

console.log("✅ FasoPass connecté à Firebase.");

async function verifierConnexion() {
  try {
    const snap = await getDocs(collection(db, "utilisateurs"));
    console.log("Utilisateurs trouvés :", snap.size);
  } catch (error) {
    console.error("Erreur Firestore :", error);
  }
}

verifierConnexion();