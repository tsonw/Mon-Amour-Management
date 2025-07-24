import { collection, addDoc } from "firebase/firestore";
import { db } from "../get-document";

// updateDoc để cập nhật một tài liệu đã tồn tại
// updateDoc sẽ chỉ cập nhật các trường đã chỉ định trong đối tượng dữ liệu
/*
    const washingtonRef = doc(db, "produit", "siro");
    await updateDoc(washingtonRef, {
        name: "da thay doi"
    });
*/

// Add data : Coffee
const addDataProductCoffee = async () => {
    try {
        const docRef1 = await addDoc(collection(db, "Product"), {
            code: "CF-01",
            name: "Café noir",
            category: "coffee",
            priceM: 6, 
            priceL: 6,
            quantitySold: 0
        });
        const docRef2 = await addDoc(collection(db, "Product"), {
            code: "CF-02",
            name: "Café au lait",
            category: "coffee",
            priceM: 6, 
            priceL: 6,
            quantitySold: 0
        });
        const docRef3 = await addDoc(collection(db, "Product"), {
            code: "CF-03",
            name: "Café au fromage",
            category: "coffee",
            priceM: 6, 
            priceL: 6,
            quantitySold: 0
        });
        const docRef4 = await addDoc(collection(db, "Product"), {
            code: "CF-04",
            name: "Café aux cacahuète",
            category: "coffee",
            priceM: 6, 
            priceL: 6,
            quantitySold: 0
        });
        const docRef5 = await addDoc(collection(db, "Product"), {
            code: "CF-05",
            name: "Bạc xỉu",
            category: "coffee",
            priceM: 6, 
            priceL: 6,
            quantitySold: 0
        });
        console.log("Coffee thêm thành công với ID:", docRef1.id);
        console.log("Coffee thêm thành công với ID:", docRef2.id);
        console.log("Coffee thêm thành công với ID:", docRef3.id);
        console.log("Coffee thêm thành công với ID:", docRef4.id);
        console.log("Coffee thêm thành công với ID:", docRef5.id);
    } catch (error) {
        console.error("Lỗi khi thêm document:", error);
    }
}

// Add data : Milk tea
const addDataProductMilkTea = async () => {
    try {
        const docRef1 = await addDoc(collection(db, "Product"), {
            code: "MT-01",
            name: "Thé noir au lait",
            category: "milktea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef2 = await addDoc(collection(db, "Product"), {
            code: "MT-02",
            name: "Thé jasmin au lait",
            category: "milktea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef3 = await addDoc(collection(db, "Product"), {
            code: "MT-03",
            name: "Vanessa's Vanilla",
            category: "milktea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef4 = await addDoc(collection(db, "Product"), {
            code: "MT-04",
            name: "Thé Bangkok au lait",
            category: "milktea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef5 = await addDoc(collection(db, "Product"), {
            code: "MT-05",
            name: "Thé au lait au taro",
            category: "milktea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef6 = await addDoc(collection(db, "Product"), {
            code: "MT-06",
            name: "Thé au lait au café",
            category: "milktea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef7 = await addDoc(collection(db, "Product"), {
            code: "MT-07",
            name: "Thé au lait au coco",
            category: "milktea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef8 = await addDoc(collection(db, "Product"), {
            code: "MT-08",
            name: "Thé Hokkaido au lait",
            category: "milktea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef9 = await addDoc(collection(db, "Product"), {
            code: "MT-09",
            name: "Thé matcha au lait",
            category: "milktea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef10 = await addDoc(collection(db, "Product"), {
            code: "MT-10",
            name: "Thé au lait au chocolat",
            category: "milktea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        
        console.log("Milk tea thêm thành công với ID:", docRef1.id);
        console.log("Milk tea thêm thành công với ID:", docRef2.id);
        console.log("Milk tea thêm thành công với ID:", docRef3.id);
        console.log("Milk tea thêm thành công với ID:", docRef4.id);
        console.log("Milk tea thêm thành công với ID:", docRef5.id);
        console.log("Milk tea thêm thành công với ID:", docRef6.id);
        console.log("Milk tea thêm thành công với ID:", docRef7.id);
        console.log("Milk tea thêm thành công với ID:", docRef8.id);
        console.log("Milk tea thêm thành công với ID:", docRef9.id);
        console.log("Milk tea thêm thành công với ID:", docRef10.id);
    } catch (error) {
        console.error("Lỗi khi thêm document:", error);
    }
}

// Add data : Frappe
const addDataProductFrappe = async () => {
    try {
        const docRef1 = await addDoc(collection(db, "Product"), {
            code: "FP-01",
            name: "Mangue frappé",
            category: "frappe",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef2 = await addDoc(collection(db, "Product"), {
            code: "FP-02",
            name: "Fraise frappé",
            category: "frappe",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef3 = await addDoc(collection(db, "Product"), {
            code: "FP-03",
            name: "Dragon fruit frappé",
            category: "frappe",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef4 = await addDoc(collection(db, "Product"), {
            code: "FP-04",
            name: "Ananas frappé",
            category: "frappe",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        
        console.log("Frappe thêm thành công với ID:", docRef1.id);
        console.log("Frappe thêm thành công với ID:", docRef2.id);
        console.log("Frappe thêm thành công với ID:", docRef3.id);
        console.log("Frappe thêm thành công với ID:", docRef4.id);
    } catch (error) {
        console.error("Lỗi khi thêm document:", error);
    }
}

// Add data : Fruit Tea
const addDataProductFruitTea = async () => {
    try {
        const docRef1 = await addDoc(collection(db, "Product"), {
            code: "FT-01",
            name: "Thé à la peach",
            category: "fruittea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef2 = await addDoc(collection(db, "Product"), {
            code: "FT-02",
            name: "Thé à la mangue",
            category: "fruittea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef3 = await addDoc(collection(db, "Product"), {
            code: "FT-03",
            name: "Thé à la passion",
            category: "fruittea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef4 = await addDoc(collection(db, "Product"), {
            code: "FT-04",
            name: "Thé à la fraise",
            category: "fruittea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef5 = await addDoc(collection(db, "Product"), {
            code: "FT-05",
            name: "Thé au litchi",
            category: "fruittea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef6 = await addDoc(collection(db, "Product"), {
            code: "FT-06",
            name: "Thé rose mixe litchi",
            category: "fruittea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef7 = await addDoc(collection(db, "Product"), {
            code: "FT-07",
            name: "Thé au fruit de dragon",
            category: "fruittea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef8 = await addDoc(collection(db, "Product"), {
            code: "FT-08",
            name: "Thé à l'ananas",
            category: "fruittea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef9 = await addDoc(collection(db, "Product"), {
            code: "FT-09",
            name: "Thé au kumquat",
            category: "fruittea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef10 = await addDoc(collection(db, "Product"), {
            code: "FT-10",
            name: "Thé au melon",
            category: "fruittea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef11 = await addDoc(collection(db, "Product"), {
            code: "FT-11",
            name: "Thé au corossol",
            category: "fruittea",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        
        console.log("Thé au fruit thêm thành công với ID:", docRef1.id);
        console.log("Thé au fruit thêm thành công với ID:", docRef2.id);
        console.log("Thé au fruit thêm thành công với ID:", docRef3.id);
        console.log("Thé au fruit thêm thành công với ID:", docRef4.id);
        console.log("Thé au fruit thêm thành công với ID:", docRef5.id);
        console.log("Thé au fruit thêm thành công với ID:", docRef6.id);
        console.log("Thé au fruit thêm thành công với ID:", docRef7.id);
        console.log("Thé au fruit thêm thành công với ID:", docRef8.id);
        console.log("Thé au fruit thêm thành công với ID:", docRef9.id);
        console.log("Thé au fruit thêm thành công với ID:", docRef10.id);
        console.log("Thé au fruit thêm thành công với ID:", docRef11.id);
    } catch (error) {
        console.error("Lỗi khi thêm document:", error);
    }
}

// Add data : Matcha
const addDataProductMatcha = async () => {
    try {
        const docRef1 = await addDoc(collection(db, "Product"), {
            code: "MC-01",
            name: "Matcha latte",
            category: "matcha",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef2 = await addDoc(collection(db, "Product"), {
            code: "MC-02",
            name: "Matcha frappé",
            category: "matcha",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef3 = await addDoc(collection(db, "Product"), {
            code: "MC-03",
            name: "Thé au lait au matcha",
            category: "matcha",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef4 = await addDoc(collection(db, "Product"), {
            code: "MC-04",
            name: "Matcha haricot. rouge",
            category: "matcha",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef5 = await addDoc(collection(db, "Product"), {
            code: "MC-05",
            name: "Matcha au coco",
            category: "matcha",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        
        console.log("Matcha thêm thành công với ID:", docRef1.id);
        console.log("Matcha thêm thành công với ID:", docRef2.id);
        console.log("Matcha thêm thành công với ID:", docRef3.id);
        console.log("Matcha thêm thành công với ID:", docRef4.id);
        console.log("Matcha thêm thành công với ID:", docRef5.id);
    } catch (error) {
        console.error("Lỗi khi thêm document:", error);
    }
}

// Add data : Sucre Brun
const addDataProductSucreBrun = async () => {
    try {
        const docRef1 = await addDoc(collection(db, "Product"), {
            code: "SB-01",
            name: "Sucre brun",
            category: "brownsugar",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef2 = await addDoc(collection(db, "Product"), {
            code: "SB-02",
            name: "Matcha sucre brun",
            category: "brownsugar",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        
        console.log("Sucre Brun thêm thành công với ID:", docRef1.id);
        console.log("Sucre Brun thêm thành công với ID:", docRef2.id);
    } catch (error) {
        console.error("Lỗi khi thêm document:", error);
    }
}

// Add data : Yaourt
const addDataProductYaourt = async () => {
    try {
        const docRef1 = await addDoc(collection(db, "Product"), {
            code: "YO-01",
            name: "Yaourt mixé (jam/ fruits)",
            category: "yogurt",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        const docRef2 = await addDoc(collection(db, "Product"), {
            code: "YO-02",
            name: "Yaourt aux perles de tapioca",
            category: "yogurt",
            priceM: 5.5, 
            priceL: 6.5,
            quantitySold: 0
        });
        
        console.log("Yaourt thêm thành công với ID:", docRef1.id);
        console.log("Yaourt thêm thành công với ID:", docRef2.id);
    } catch (error) {
        console.error("Lỗi khi thêm document:", error);
    }
}
/*
addDataProductCoffee();
addDataProductMilkTea();
addDataProductFrappe();
addDataProductFruitTea();
addDataProductMatcha();
addDataProductSucreBrun();
addDataProductYaourt();
*/
export {
    addDataProductCoffee,
    addDataProductMilkTea,
    addDataProductFrappe,
    addDataProductFruitTea,
    addDataProductMatcha,
    addDataProductSucreBrun,
    addDataProductYaourt
}