import React, { useState, useEffect } from "react";
import "../../styles/components-styles/home/chartPanel.css";
import { collection, getDocs, query, limit, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../scripts/get-document'; 
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2"; 

// Đăng kí biểu đồ để sử dụng
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function ChartPanel () {

    // Data doanh thu theo tháng
    const [dataProduct, setDataProduct] = useState([]);
    
    // Lấy dự liêu ban đầu
    // Tự cập nhật lại dự liệu khi phát hiện thay đổi
    useEffect(() => {
        const today = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(today.getDate() - 7);

        const q = query(
            collection(db, "Product"),
            orderBy("code", "asc")
        );

        const unsub = onSnapshot(q, (snapshot) => {
            const updatedData = snapshot.docs.map(doc => ({
                ...doc.data()
            }))
            setDataProduct(updatedData);
        })

        return () => unsub();
    },[]);

    const dateToString = (input) => {
        const dateObj = input instanceof Date ? input : input.toDate?.() || new Date(input);
        const day = String(dateObj.getDate()).padStart(2, "0");
        const month = String(dateObj.getMonth() + 1).padStart(2, "0");
        const year = dateObj.getFullYear();
        return `${day} - ${month} - ${year}`;
    };

    return (
        <>
            <div className="main-chart-panel">
                <div className="chart-panel">
                    <div className="chart-graphic">
                        <Line
                            data={{
                                labels: dataProduct.map((data) => data.name),
                                datasets: [
                                    {
                                        label: "Compte",
                                        data: dataProduct.map((data) => data.quantitySoldM),
                                        backgroundColor: "#263767",
                                        borderColor: "#1f618dff",
                                    },
                                    {
                                        label: "Cash",
                                        data: dataProduct.map((data) => data.quantitySoldL),
                                        backgroundColor: "#EC1C24",
                                        borderColor: "#ff4000ff",
                                    },
                                ],
                            }}
                            options={{
                                maintainAspectRatio: false,
                                elements: {
                                    line: {
                                        tension: 0.5,
                                    },
                                },
                                plugins: {
                                    title: {
                                        display: true,
                                        text: "Biểu đồ doanh thu theo sản phẩm Mon Amour",
                                        font: {
                                            size: 20,
                                            family: "Lexend Deca",
                                        }
                                    },
                                    legend: {
                                        position: 'bottom'
                                    }
                                },
                                animations: {
                                    tension: {
                                        duration: 1000,
                                        easing: 'ease-out',
                                        from: 0.5,
                                        to: 0.2,
                                        loop: true
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
                <div className="shortcut-bussiness">
                    <a href="/Revenue" className="btn-shortcut-bussiness">Chi tiết doanh thu</a>
                </div>
            </div>
        </>
    );
}