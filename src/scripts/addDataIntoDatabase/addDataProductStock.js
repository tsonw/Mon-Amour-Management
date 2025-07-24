import { addDoc, collection } from "firebase/firestore";
import { db } from "../get-document";

// add code : Powder
const addDataProductStockPW = async () => {
    try {
        const docRef1 = await addDoc(collection(db, "ProductStock"), {
            code: "PW-01",
            name: "Non-Dairy Creme",
            category: "powder",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef2 = await addDoc(collection(db, "ProductStock"), {
            code: "PW-02",
            name: "Creme Fouettee",
            category: "powder",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef3 = await addDoc(collection(db, "ProductStock"), {
            code: "PW-03",
            name: "Vanille",
            category: "powder",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef4 = await addDoc(collection(db, "ProductStock"), {
            code: "PW-04",
            name: "Chocolat",
            category: "powder",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef5= await addDoc(collection(db, "ProductStock"), {
            code: "PW-05",
            name: "Taro",
            category: "powder",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef6 = await addDoc(collection(db, "ProductStock"), {
            code: "PW-06",
            name: "Matcha",
            category: "powder",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef7 = await addDoc(collection(db, "ProductStock"), {
            code: "PW-07",
            name: "Cafe",
            category: "powder",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef8 = await addDoc(collection(db, "ProductStock"), {
            code: "PW-08",
            name: "Thai",
            category: "powder",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef9 = await addDoc(collection(db, "ProductStock"), {
            code: "PW-09",
            name: "Hokkaido",
            category: "powder",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef10 = await addDoc(collection(db, "ProductStock"), {
            code: "PW-10",
            name: "Mẵng Cầu",
            category: "powder",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "Vietnam"
        });
        const docRef11 = await addDoc(collection(db, "ProductStock"), {
            code: "PW-11",
            name: "Kumquat",
            category: "powder",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "Vietnam"
        });
        const docRef12 = await addDoc(collection(db, "ProductStock"), {
            code: "PW-12",
            name: "Melon",
            category: "powder",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "Vietnam"
        });
        const docRef13 = await addDoc(collection(db, "ProductStock"), {
            code: "PW-13",
            name: "Ananas",
            category: "powder",
            packaging: "bag",
            weight: 1,
            quantity: 0,
        });
        const docRef14 = await addDoc(collection(db, "ProductStock"), {
            code: "PW-14",
            name: "Cóc",
            category: "powder",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "Vietnam"
        });
        const docRef15= await addDoc(collection(db, "ProductStock"), {
            code: "PW-15",
            name: "Coco",
            category: "powder",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef16 = await addDoc(collection(db, "ProductStock"), {
            code: "PW-16",
            name: "Matcha Boduo",
            category: "powder",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "Boduo"
        });
        const docRef17 = await addDoc(collection(db, "ProductStock"), {
            code: "PW-17",
            name: "Toro Boduo",
            category: "powder",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "Boduo"
        });
        console.log("Document thêm thành công với ID:", docRef1.id);
        console.log("Document thêm thành công với ID:", docRef2.id);
        console.log("Document thêm thành công với ID:", docRef3.id);
        console.log("Document thêm thành công với ID:", docRef4.id);
        console.log("Document thêm thành công với ID:", docRef5.id);
        console.log("Document thêm thành công với ID:", docRef6.id);
        console.log("Document thêm thành công với ID:", docRef7.id);
        console.log("Document thêm thành công với ID:", docRef8.id);
        console.log("Document thêm thành công với ID:", docRef9.id);
        console.log("Document thêm thành công với ID:", docRef10.id);
        console.log("Document thêm thành công với ID:", docRef11.id);
        console.log("Document thêm thành công với ID:", docRef12.id);
        console.log("Document thêm thành công với ID:", docRef13.id);
        console.log("Document thêm thành công với ID:", docRef14.id);
        console.log("Document thêm thành công với ID:", docRef15.id);
        console.log("Document thêm thành công với ID:", docRef16.id);
        console.log("Document thêm thành công với ID:", docRef17.id);
    } catch (error) {
        console.error("Lỗi khi thêm document:", error);
    }
}

// add code : Siro
const addDataProductStockSR = async () => {
    try {
        const docRef1 = await addDoc(collection(db, "ProductStock"), {
            code: "SR-01",
            name: "Peach",
            category: "siro",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef2 = await addDoc(collection(db, "ProductStock"), {
            code: "SR-02",
            name: "Passion",
            category: "siro",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef3 = await addDoc(collection(db, "ProductStock"), {
            code: "SR-03",
            name: "Mangue",
            category: "siro",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef4 = await addDoc(collection(db, "ProductStock"), {
            code: "SR-04",
            name: "Fraise",
            category: "siro",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef5 = await addDoc(collection(db, "ProductStock"), {
            code: "SR-05",
            name: "Rose",
            category: "siro",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef6 = await addDoc(collection(db, "ProductStock"), {
            code: "SR-06",
            name: "Lychee",
            category: "siro",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef7 = await addDoc(collection(db, "ProductStock"), {
            code: "SR-07",
            name: "Dragon",
            category: "siro",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef8 = await addDoc(collection(db, "ProductStock"), {
            code: "SR-08",
            name: "Watermelon",
            category: "siro",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "Boduo"
        });
        const docRef9 = await addDoc(collection(db, "ProductStock"), {
            code: "SR-09",
            name: "grape",
            category: "siro",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "Boduo"
        });
        const docRef10 = await addDoc(collection(db, "ProductStock"), {
            code: "SR-10",
            name: "Lychee",
            category: "siro",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "Boduo"
        });
        const docRef11 = await addDoc(collection(db, "ProductStock"), {
            code: "SR-11",
            name: "Peach",
            category: "siro",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "Boduo"
        });
        const docRef12 = await addDoc(collection(db, "ProductStock"), {
            code: "SR-12",
            name: "Passion",
            category: "siro",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "Boduo"
        });
        const docRef13 = await addDoc(collection(db, "ProductStock"), {
            code: "SR-13",
            name: "Mangue",
            category: "siro",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "Boduo"
        });
        console.log("Document thêm thành công với ID:", docRef1.id);
        console.log("Document thêm thành công với ID:", docRef2.id);
        console.log("Document thêm thành công với ID:", docRef3.id);
        console.log("Document thêm thành công với ID:", docRef4.id);
        console.log("Document thêm thành công với ID:", docRef5.id);
        console.log("Document thêm thành công với ID:", docRef6.id);
        console.log("Document thêm thành công với ID:", docRef7.id);
        console.log("Document thêm thành công với ID:", docRef8.id);
        console.log("Document thêm thành công với ID:", docRef9.id);
        console.log("Document thêm thành công với ID:", docRef10.id);
        console.log("Document thêm thành công với ID:", docRef11.id);
        console.log("Document thêm thành công với ID:", docRef12.id);
        console.log("Document thêm thành công với ID:", docRef13.id);
    } catch (error) {
        console.error("Lỗi khi thêm document:", error);
    }
}


// add code : Jam
const addDataProductStockJM = async () => {
    try {
        const docRef1 = await addDoc(collection(db, "ProductStock"), {
            code: "JM-01",
            name: "Mangue",
            category: "jam",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef2 = await addDoc(collection(db, "ProductStock"), {
            code: "JM-02",
            name: "Peach",
            category: "jam",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef3 = await addDoc(collection(db, "ProductStock"), {
            code: "JM-03",
            name: "Fraise",
            category: "jam",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef4 = await addDoc(collection(db, "ProductStock"), {
            code: "JM-04",
            name: "Ananas",
            category: "jam",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef5 = await addDoc(collection(db, "ProductStock"), {
            code: "JM-05",
            name: "Passion",
            category: "jam",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef6 = await addDoc(collection(db, "ProductStock"), {
            code: "JM-06",
            name: "Passion",
            category: "jam",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "Boduo"
        });
        const docRef7 = await addDoc(collection(db, "ProductStock"), {
            code: "JM-07",
            name: "Lychee",
            category: "jam",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "Boduo"
        });
        const docRef8 = await addDoc(collection(db, "ProductStock"), {
            code: "JM-08",
            name: "Ananas",
            category: "jam",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "Boduo"
        });
        const docRef9 = await addDoc(collection(db, "ProductStock"), {
            code: "JM-09",
            name: "Mangue",
            category: "jam",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "Boduo"
        });
        const docRef10 = await addDoc(collection(db, "ProductStock"), {
            code: "JM-10",
            name: "Dragon",
            category: "jam",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "Boduo"
        });
        const docRef11 = await addDoc(collection(db, "ProductStock"), {
            code: "JM-11",
            name: "Fraise",
            category: "jam",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "Boduo"
        });
        console.log("Document thêm thành công với ID:", docRef1.id);
        console.log("Document thêm thành công với ID:", docRef2.id);
        console.log("Document thêm thành công với ID:", docRef3.id);
        console.log("Document thêm thành công với ID:", docRef4.id);
        console.log("Document thêm thành công với ID:", docRef5.id);
        console.log("Document thêm thành công với ID:", docRef6.id);
        console.log("Document thêm thành công với ID:", docRef7.id);
        console.log("Document thêm thành công với ID:", docRef8.id);
        console.log("Document thêm thành công với ID:", docRef9.id);
        console.log("Document thêm thành công với ID:", docRef10.id);
        console.log("Document thêm thành công với ID:", docRef11.id);
    } catch (error) {
        console.error("Lỗi khi thêm document:", error);
    }
}

// add code : Tea
const addDataProductStockTE = async () => {
    try {
        const docRef1 = await addDoc(collection(db, "ProductStock"), {
            code: "TE-01",
            name: "Green tea (jasmin)",
            category: "tea",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "blank"
        });
        const docRef2 = await addDoc(collection(db, "ProductStock"), {
            code: "TE-02",
            name: "Black tea (Ceylon | O long)",
            category: "tea",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "Boduo"
        });
        console.log("Document thêm thành công với ID:", docRef1.id);
        console.log("Document thêm thành công với ID:", docRef2.id);
    } catch (error) {
        console.error("Lỗi khi thêm document:", error);
    }
}

// add code : Sugar
const addDataProductStockSG = async () => {
    try {
        const docRef1 = await addDoc(collection(db, "ProductStock"), {
            code: "SG-01",
            name: "Fructose",
            category: "sugar",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef2 = await addDoc(collection(db, "ProductStock"), {
            code: "SG-02",
            name: "Sucre Brun",
            category: "sugar",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef3 = await addDoc(collection(db, "ProductStock"), {
            code: "SG-03",
            name: "Sucre Brun",
            category: "sugar",
            packaging: "bag",
            weight: 1,
            quantity: 0,
            supplier: "Boduo"
        });
        
        console.log("Document thêm thành công với ID:", docRef1.id);
        console.log("Document thêm thành công với ID:", docRef2.id);
        console.log("Document thêm thành công với ID:", docRef3.id);
    } catch (error) {
        console.error("Lỗi khi thêm document:", error);
    }
}

// add code : Boba
const addDataProductStockBB = async () => {
    try {
        const docRef1 = await addDoc(collection(db, "ProductStock"), {
            code: "BB-01",
            name: "Mangue",
            category: "boba",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef2 = await addDoc(collection(db, "ProductStock"), {
            code: "BB-02",
            name: "Peach",
            category: "boba",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef3 = await addDoc(collection(db, "ProductStock"), {
            code: "BB-03",
            name: "Passion",
            category: "boba",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef4 = await addDoc(collection(db, "ProductStock"), {
            code: "BB-04",
            name: "Lychee",
            category: "boba",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef5 = await addDoc(collection(db, "ProductStock"), {
            code: "BB-05",
            name: "Cherry",
            category: "boba",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef6 = await addDoc(collection(db, "ProductStock"), {
            code: "BB-06",
            name: "Fraise",
            category: "boba",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef7 = await addDoc(collection(db, "ProductStock"), {
            code: "BB-07",
            name: "Framboise",
            category: "boba",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef8 = await addDoc(collection(db, "ProductStock"), {
            code: "BB-08",
            name: "Pomme",
            category: "boba",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef9 = await addDoc(collection(db, "ProductStock"), {
            code: "BB-09",
            name: "Melon",
            category: "boba",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef10 = await addDoc(collection(db, "ProductStock"), {
            code: "BB-10",
            name: "Mytille",
            category: "boba",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef11 = await addDoc(collection(db, "ProductStock"), {
            code: "BB-11",
            name: "Jelly Coco",
            category: "boba",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "Boduo"
        });
        const docRef12 = await addDoc(collection(db, "ProductStock"), {
            code: "BB-12",
            name: "Jelly Ball",
            category: "boba",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef13 = await addDoc(collection(db, "ProductStock"), {
            code: "BB-13",
            name: "Citron",
            category: "boba",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef14 = await addDoc(collection(db, "ProductStock"), {
            code: "BB-14",
            name: "Ananas",
            category: "boba",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "BonBonCha"
        });
        const docRef15 = await addDoc(collection(db, "ProductStock"), {
            code: "BB-15",
            name: "Tapioca",
            category: "boba",
            packaging: "plastic jar",
            weight: 1,
            quantity: 0,
            supplier: "Boduo"
        });
        
        console.log("Document thêm thành công với ID:", docRef1.id);
        console.log("Document thêm thành công với ID:", docRef2.id);
        console.log("Document thêm thành công với ID:", docRef3.id);
        console.log("Document thêm thành công với ID:", docRef4.id);
        console.log("Document thêm thành công với ID:", docRef5.id);
        console.log("Document thêm thành công với ID:", docRef6.id);
        console.log("Document thêm thành công với ID:", docRef7.id);
        console.log("Document thêm thành công với ID:", docRef8.id);
        console.log("Document thêm thành công với ID:", docRef9.id);
        console.log("Document thêm thành công với ID:", docRef10.id);
        console.log("Document thêm thành công với ID:", docRef11.id);
        console.log("Document thêm thành công với ID:", docRef12.id);
        console.log("Document thêm thành công với ID:", docRef13.id);
        console.log("Document thêm thành công với ID:", docRef14.id);
        console.log("Document thêm thành công với ID:", docRef15.id);
    } catch (error) {
        console.error("Lỗi khi thêm document:", error);
    }
}

/*
addDataProductStockPW();
addDataProductStockSR();
addDataProductStockJM();
addDataProductStockTE();
addDataProductStockSG();
addDataProductStockBB();
*/

export { 
    addDataProductStockPW, 
    addDataProductStockSR, 
    addDataProductStockJM,
    addDataProductStockTE,
    addDataProductStockSG,
    addDataProductStockBB
};

// 17 + 13 + 11 + 2 + 3 + 15