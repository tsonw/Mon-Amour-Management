import React, { useState, useEffect} from "react";
import { useAuth } from "../../scripts/onAuthStateChanged";
import { db } from "../../scripts/get-document";
import { query, collection, orderBy, onSnapshot, where, getDocs } from "firebase/firestore";

import "../../styles/components-styles/revenue/historyTableRevenue.css";

export default function HistoryTableRevenue () {

    // Data history
    const [dataHistoryRevenue, setDataHistoryRevenue] = useState([]);

    // Data history filter
    const [dataHistoryRevenueFilter, setDataHistoryRevenueFilter] = useState([]);

    useEffect(() => {
        const q = query(
            collection(db, "Revenue"),
            orderBy("dateEnter", "desc")
        );

        const unsub = onSnapshot(q, (snapshot) => {
            const updatedData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setDataHistoryRevenue(updatedData);
        });

        return () => unsub();
    }, []);

    const dateToString = (timestamp) => {
        if (!timestamp?.toDate) return "Invalid Date";
        const date = timestamp.toDate();
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    // Cập nhật filter với giá trị ban đầu là all
    useEffect(() => {
        setDataHistoryRevenueFilter(dataHistoryRevenue);
    },[dataHistoryRevenue]);

    // Hàm lấy dữ liệu với truy vấn được gửi trong tham số
    const fetchData = async (q) => { 
        const querySnapshot = await getDocs(q);
        const dataFilter = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setDataHistoryRevenueFilter(dataFilter);
    };

    // Search box by date revenue
    const searchByDateRevenu = () => {

        // Lấy text cần tìm kiếm
        const input = document.getElementById("input-date-revenue-search").value;
        const inputDate = new Date(input);

        if (!inputDate?.toDate) {
            // Thực hiện truy vấn với giá trị tìm kiếm
            const q = query(
            collection(db, "Revenue"),
                // Thực hiện truy vấn có điều kiến khi chỉ nhập một phần của giá trị
                // Ex : Man -> Mangue
                // Giống Like trong SQL
                where("dateRevenue", "==", inputDate)
            );
            fetchData(q);
        } else {
            window.alert(
                `Ngày tìm kiếm không hợp lệ !!!`
            )
        }

        // Xoá nội dung tìm kiếm sau khi nhận search
        document.getElementById("input-date-revenue-search").value = "";

    }

    return (
        <>
            <div className="main-history-table-revenue">
                <div className="panel-text-history-table-revenue">
                    <h1 className="title-history-table-revenue">Nhật ký doanh thu Mon Amour</h1>
                </div>
                <div className="panel-content-history-table-revenue">
                    <div className="research-date-history-table-revenue">
                        <label htmlFor="date">Doanh thu của ngày :</label>
                        <input id="input-date-revenue-search" type="date" />
                        <button onClick={searchByDateRevenu}>Tìm kiếm</button>
                    </div>
                    <div className="table-history-revenue">
                        <table>
                            <thead>
                                <tr>
                                    <td>STT</td>
                                    <td>Ngày nhập</td>
                                    <td>Doanh thu của ngày</td>
                                    <td>Tiền mặt</td>
                                    <td>Tiền thẻ</td>
                                    <td>Tổng doanh thu</td>
                                    <td>Email người nhập</td>
                                    <td>Lí do</td>
                                </tr>
                            </thead>
                            <tbody>
                                {dataHistoryRevenueFilter.map((item, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{dateToString(item.dateEnter)}</td>
                                        <td>{dateToString(item.dateRevenue)}</td>
                                        <td>{item.cash}</td>
                                        <td>{item.card}</td>
                                        <td>{item.revenueTotal}</td>
                                        <td id="table-data-user-email-history-table-revenue">{item.userEmail}</td>
                                        <td>{item.raison}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}