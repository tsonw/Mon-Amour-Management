import { getFirestore } from "firebase/firestore";
import { doc, getDocs, onSnapshot } from "firebase/firestore";
import { collection, setDoc } from "firebase/firestore"; 
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, addDoc, updateDoc } from "firebase/firestore";
import { app } from "../config/firebase-config.js";
import { auth } from "./auth-signin.js";

const db = getFirestore(app);

export { db };

// API GGSheet INVENTORY
// https://sheets.googleapis.com/v4/spreadsheets/13Y_NqMix2uRCmQgRK8oilgzkTMVj0OD34b9PHlhW9iU/values/MONAMOUR!A1:I44?key=AIzaSyD1B5k5XHVh4gESIbdL5dIddl2AKur90uc

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


/*
    const [data, setData] = useState([]);
        
        // Lấy dữ liệu từ Firestore (Top 3)
        useEffect(() => {
            const fetchData = async () => {
                const q = query(
                    collection(db, "Stastiques"), 
                    orderBy("quantite", "desc"),
                    limit(3)
                ); 
                const querySnapshot = await getDocs(q);
                const top3 = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setData(top3);
            };
            fetchData();
        }, []);
*/

/*
    const handleClick = async () => {
        const cash = document.getElementById("getData").value;
        const ref = doc(db, "RevenueWeek", "1");
        await updateDoc(ref, {
            Cash: cash
        });
    };
*/

// Script thêm dữ liệu vào trong db

const updateDocument = async () => {
    const docRef1 = doc(db, "WorkTime", "1");
    const docRef2 = doc(db, "WorkTime", "2");
    const docRef3 = doc(db, "WorkTime", "3");
    const docRef4 = doc(db, "WorkTime", "4");
    const docRef5 = doc(db, "WorkTime", "5");
    const docRef6 = doc(db, "WorkTime", "6");
    const docRef7 = doc(db, "WorkTime", "7");

    try {
        await updateDoc(docRef1, {
            Day: "January",
            Compte: 123,
            Cash: 100,
            idM: 1
        });
        await updateDoc(docRef2, {
            Label: "February",
            Compte: 123,
            Cash: 100,
            idM: 2
        });
        await updateDoc(docRef3, {
            Label: "March",
            Compte: 123,
            Cash: 100,
            idM: 3
        });
        await updateDoc(docRef4, {
            Label: "April",
            Compte: 123,
            Cash: 100,
            idM: 4
        });
        await updateDoc(docRef5, {
            Label: "May",
            Compte: 123,
            Cash: 100,
            idM: 5
        });
        await updateDoc(docRef6, {
            Label: "June",
            Compte: 123,
            Cash: 100,
            idM: 6
        });
        await updateDoc(docRef7, {
            Label: "July",
            Compte: 123,
            Cash: 100,
            idM: 7
        });
        console.log("🟢 Document updated successfully!");
    } catch (err) {
        console.error("🔴 Error updating document:", err);
    }
};

// Them data vao database
/*
const docRef1 = await addDoc(collection(db, "produit"), {
        name: "mango",
});
*/

// Lắng nghe sự thay đổi của DB
/*
useEffect(() => {
    const unsub = onSnapshot(
        collection(db, "WorktimeStaff"),
        (snapshot) => {
            const updatedData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setData(updatedData);
        }
    );
    return () => unsub();
}, []);
*/