import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "/scripts/firebase-config.js"; // Import app from your firebase-config.js

export const auth = getAuth(app);

export function mySignInWithEmailAndPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Login thành công:", user.email);
      window.location.href = 'pages/home.html';
    })
    .catch((error) => {
      console.error(error.code, error.message);
      alert("Sai tài khoản hoặc mật khẩu!");
    });
}

