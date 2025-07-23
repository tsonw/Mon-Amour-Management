import React, { useEffect, useRef, useState } from "react";

import "../../styles/components-styles/stock/formUpdateProduct.css";
import { collection, onSnapshot, orderBy, query, where, getDocs, doc, updateDoc, addDoc } from "firebase/firestore";
import { useAuth } from "../../scripts/onAuthStateChanged";
import { db } from "../../scripts/get-document";

export default function FormUpdateProduct () {

    const { user, loading } = useAuth();

    // Data product
    const [dataProductStock, setDataProductStock] = useState([]);

    useEffect(() => {
        const q = query(
            collection(db, "ProductStock"),
            orderBy("code", "asc")
        );

        const unsub = onSnapshot(q, (snapshot) => {
            const updatedData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setDataProductStock(updatedData);
        });

        return () => unsub();
    }, []);

    // Hàm sự kiện của button Submit => sau khi hoàn thiện form
    const submitFormEvent = async () => {
        
        const dataUpdate = dataProductStock.map(doc => ({
            id: doc.id,
            code: doc.code,
            name: doc.name,
            update: Number(document.getElementById(doc.id).value)
        }));

        let count = 0;
        for (const item of dataUpdate) {
            if (item.update != 0) {
                count++;
            }
        }

        // Hàm cho phép thêm thông tin vào trong nhật ký
        const addDataHistoryUpdateStock = async (userEmail, code, nameProduct, quantityUpdate) => {
            try {
                const docRef = await addDoc(collection(db, "HistoryUpdateStock"), {
                    userEmail: userEmail,
                    code: code,
                    nameProduct: nameProduct,
                    quantityUpdate: quantityUpdate
                });
            } catch (error) {
                console.error(error);
            }
        }

        if (count === 0) {
            window.alert("Cần có ít nhất một thay đổi về số lượng !!!");
        } else {

            // Confirm trước khi thay đổi trong database
            if (window.confirm("Bạn chắc chắn muốn Update")) {
                for (const item of dataUpdate) {
                    // Chỉ thực hiện thay đổi những nơi có giá trị update != 0
                    if (item.update != 0) {
                        const docRef = doc(db, "ProductStock", item.id);
                        await updateDoc(docRef, {
                            quantity: item.update
                        });

                        // Lưu vào nhật ký thay đổi
                        addDataHistoryUpdateStock(user.email, item.code, item.name, item.update);
                    }
                }
            }

            // Clear content trong input
            for (const item of dataUpdate) {
                document.getElementById(item.id).value = "";
            }
        }
    }

    // Hàm sự kiện của button Submit => sau khi hoàn thiện form
    const clearFormEvent = async () => {
        
        // Clear content trong input
        for (const item of dataProductStock) {
            document.getElementById(item.id).value = "";
        }
    }

    return (
        <>
            <div className="main-form-update-product">
                <div className="header-form-update-product">
                    <h1 className="title-form-update-product">Form update số lượng nguyên liệu trong kho</h1>
                    <a className="return-btn" href="/stock">Trở về</a>
                </div>
                <div className="table-form-update-product">
                    <table>
                        <thead>
                            <tr>
                                <td>Code</td>
                                <td>Name</td>
                                <td>Type</td>
                                <td>Remaining quantity</td>
                                <td>Updated quantity</td>
                            </tr>
                        </thead>
                        <tbody>
                            {dataProductStock.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.code}</td>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <input className="input-quantity" type="number" id={item.id} required/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="btn-panel-form-update-product">
                    <button className="btn-form-update-product" onClick={submitFormEvent}>Submit</button>
                    <button className="btn-form-update-product" onClick={clearFormEvent}>Clear</button>
                </div>
            </div>
        </>
    );
}