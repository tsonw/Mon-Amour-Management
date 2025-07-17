import { getFirestore } from "firebase/firestore";
import { doc, getDocs, onSnapshot } from "firebase/firestore";
import { collection, setDoc } from "firebase/firestore"; 
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, addDoc, updateDoc } from "firebase/firestore";
import { app } from "../config/firebase-config.js";
import { auth } from "./auth-signin.js";

const db = getFirestore(app);

export { db };

// Form mẫu trích xuất dữ liệu từ Firestore
/*
    const docRef = doc(db, "produit", "siro");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const name = docSnap.data().name;
        document.getElementById("myH1").innerText = name;
    } else {
    // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
*/

// Trích xuất toàn bộ dữ liệu từ collection
/*
    const querySnapshot = await getDocs(collection(db, "produit"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data());

        // Ví dụ: hiển thị tên từng sản phẩm lên HTML
        const name = doc.data().name;
        const h1 = document.createElement("h1");    // Tạo một phần tử h1 mới
        h1.innerText = name;                        // Gán tên sản phẩm vào phần tử h1
        document.body.appendChild(h1);              // Thêm phần tử h1 vào body của trang HTML
    });
*/

// setDoc để thêm hoặc cập nhật tài liệu
// Nếu tài liệu đã tồn tại, nó sẽ được cập nhật với dữ liệu mới
// Nếu tài liệu không tồn tại, nó sẽ được tạo mới với dữ liệu đã cung cấp
// Nếu bạn muốn tạo mới tài liệu mà không cần quan tâm đến việc nó đã tồn tại
// hay chưa, bạn có thể sử dụng addDoc thay vì setDoc.
/*
    await setDoc(docRef, {
        name: "passion"
    });
*/

// addDoc để thêm một tài liệu mới vào bộ sưu tập
// addDoc sẽ tự động tạo một ID duy nhất cho tài liệu mới
// Nếu bạn muốn chỉ định ID cụ thể cho tài liệu, bạn có thể sử dụng setDoc
// với doc(db, "collectionName", "customId").
/*
    const docRef1 = await addDoc(collection(db, "produit"), {
        name: "mango",
    });
*/

// updateDoc để cập nhật một tài liệu đã tồn tại
// updateDoc sẽ chỉ cập nhật các trường đã chỉ định trong đối tượng dữ liệu
/*
    const washingtonRef = doc(db, "produit", "siro");
    await updateDoc(washingtonRef, {
        name: "da thay doi"
    });
*/