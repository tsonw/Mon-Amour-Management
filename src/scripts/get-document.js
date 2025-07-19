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

/*
const updateDocument = async () => {
    const docRef1 = doc(db, "RevenueMonth", "1");
    const docRef2 = doc(db, "RevenueMonth", "2");
    const docRef3 = doc(db, "RevenueMonth", "3");
    const docRef4 = doc(db, "RevenueMonth", "4");
    const docRef5 = doc(db, "RevenueMonth", "5");
    const docRef6 = doc(db, "RevenueMonth", "6");
    const docRef7 = doc(db, "RevenueMonth", "7");
    const docRef8 = doc(db, "RevenueMonth", "8");
    const docRef9 = doc(db, "RevenueMonth", "9");
    const docRef10 = doc(db, "RevenueMonth", "10");
    const docRef11 = doc(db, "RevenueMonth", "11");
    const docRef12 = doc(db, "RevenueMonth", "12");

    try {
        await updateDoc(docRef1, {
            Label: "January",
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
        await updateDoc(docRef8, {
            Label: "August",
            Compte: 123,
            Cash: 100,
            idM: 8
        });
        await updateDoc(docRef9, {
            Label: "September",
            Compte: 123,
            Cash: 100,
            idM: 9
        });
        await updateDoc(docRef10, {
            Label: "October",
            Compte: 123,
            Cash: 100,
            idM: 10
        });
        await updateDoc(docRef11, {
            Label: "November",
            Compte: 123,
            Cash: 100,
            idM: 11
        });
        await updateDoc(docRef12, {
            Label: "December",
            Compte: 123,
            Cash: 100,
            idM: 12
        });
        console.log("🟢 Document updated successfully!");
    } catch (err) {
        console.error("🔴 Error updating document:", err);
    }
};

updateDocument();
*/