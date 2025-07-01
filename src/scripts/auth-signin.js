import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../config/firebase-config";

export const auth = getAuth(app);

export function mySignInWithEmailAndPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return true;
    })
    .catch((error) => {
      alert("Wrong username or password! Please try again.");
      return false;
    });
}

