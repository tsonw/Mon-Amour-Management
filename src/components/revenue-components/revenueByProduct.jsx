import React, { useEffect, useState } from "react";

import "../../styles/components-styles/revenue/revenueByProduct.css";
import { collection, limit, onSnapshot, orderBy, query, where, getDocs } from "firebase/firestore";
import { db } from "../../scripts/get-document";

import { Bar, Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    elements,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// Thuộc tính của BarChart
const options = {
    responsive: true,
    elements: {

    },
    plugins: {
        title: {
        display: true,
        text: "Biểu đồ doanh thu theo tuần",
        font: {
            size: 20
        }
        },
        legend: {
        position: 'bottom'
        }
    },
    scales: {
        x: {
            stacked: true
        },
        y: {
            stacked: true,
            beginAtZero: true,
            title: {
                display: true,
                text: "Doanh thu (€)"
            }
        }
    }
};

export default function RevenueByProduct () {

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

    console.log(dataProduct)

    const dateToString = (input) => {
        const dateObj = input instanceof Date ? input : input.toDate?.() || new Date(input);
        const day = String(dateObj.getDate()).padStart(2, "0");
        const month = String(dateObj.getMonth() + 1).padStart(2, "0");
        const year = dateObj.getFullYear();
        return `${day} - ${month} - ${year}`;
    };

    return (
        <>
            <div className="main-table-revenue-by-product">
                <h1 className="title-table-revenue-month">Doanh thu dựa trên sản phẩm</h1>
                <div className="chart-graphic-revenue-detail-by-product">
                    <Line 
                        data={{
                            labels: dataProduct.map((data) => data.name),
                            datasets: [
                                {
                                    label: "Size M",
                                    data: dataProduct.map((data) => data.quantitySoldM),
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgb(255, 99, 132)'
                                    ],
                                    borderWidth: 2,
                                    stack: 'doanhthu'
                                },
                                {
                                    label: "Size L",
                                    data: dataProduct.map((data) => data.quantitySoldL),
                                    backgroundColor: [
                                        'rgba(54, 162, 235, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgb(54, 162, 235)'
                                    ],
                                    borderWidth: 2,
                                    stack: 'doanhthu'
                                }
                            ]
                        }} 
                        options={{
                            responsive: true,
                            elements: {
                                line: {
                                    tension: 0.5,
                                },
                            },
                            plugins: {
                                title: {
                                    display: true,
                                    text: "Biểu đồ doanh thu",
                                    font: {
                                        size: 20,
                                        family: "Lexend Deca",
                                    }
                                },
                                legend: {
                                    position: 'bottom'
                                }
                            },
                            scales: {
                                x: {
                                    stacked: true
                                },
                                y: {
                                    stacked: true,
                                    beginAtZero: true,
                                    title: {
                                        display: true,
                                        text: "Doanh thu (€)"
                                    }
                                }
                            }
                        }} 
                    />
                </div>
            </div>
        </>
    );
}