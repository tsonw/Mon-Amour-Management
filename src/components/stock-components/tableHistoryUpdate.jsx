import React, { useEffect, useRef, useState } from "react";

import "../../styles/components-styles/stock/formUpdateProduct.css";
import { collection, onSnapshot, orderBy, query, where, getDocs, doc, updateDoc, addDoc } from "firebase/firestore";
import { useAuth } from "../../scripts/onAuthStateChanged";
import { db } from "../../scripts/get-document";

export default function TableHistoryUpdate () {

    // Data History
    const [dataHistory, setdataHistory] = useState([]);
    // Data User
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        const qH = query(
            collection(db, "HistoryUpdateStock"),
            orderBy("date", "desc")
        );
        const qU = query(
            collection(db, "Staffs")
        );

        const unsubH = onSnapshot(qH, (snapshot) => {
            const updatedDataH = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setdataHistory(updatedDataH);
        });
        const unsubU = onSnapshot(qU, (snapshot) => {
            const updatedDataU = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setDataUser(updatedDataU);
        });

        return () => {
            unsubH();
            unsubU();
        }
    }, []);

    const findNameUserByEmail = (email) => {
        for (const item of dataUser) {
            if (item.email == email) {
                return item.Name + (item.Nickname ? ` (${item.Nickname})` : "");
            }
        }
    }

    return (
        <>
            <div className="main-form-update-product">
                <div className="header-form-update-product">
                    <h1 className="title-form-update-product">Nhật ký update số lượng nguyên liệu trong kho</h1>
                    <a className="return-btn" href="/stock">Trở về</a>
                </div>
                <div className="table-form-update-product">
                    <table>
                        <thead>
                            <tr>
                                <td>STT</td>
                                <td>User</td>
                                <td>Email</td>
                                <td>Date</td>
                                <td>Code Product</td>
                                <td>Name Product Update</td>
                                <td>Quantity Update</td>
                            </tr>
                        </thead>
                        <tbody>
                            {dataHistory.map((item, i) => (
                                <tr key={item.id}>
                                    <td>{i + 1}</td>
                                    <td>{findNameUserByEmail(item.userEmail)}</td>
                                    <td>{item.userEmail}</td>
                                    <td>{item.date}</td>
                                    <td>{item.code}</td>
                                    <td>{item.nameProduct}</td>
                                    <td>{item.quantityUpdate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}