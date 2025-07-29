import React, { useEffect, useState } from "react";

import "../../styles/components-styles/revenue/revenueWeek.css";
import { collection, limit, onSnapshot, orderBy, query, where, getDocs } from "firebase/firestore";
import { db } from "../../scripts/get-document";

import { Bar } from "react-chartjs-2";

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

export default function RevenueWeek () {

    // Data doanh thu theo tháng
    const [dataRevenue7DaysAgo, setDataRevenue7DaysAgo] = useState([]);
    
    // Lấy dự liêu ban đầu
    // Tự cập nhật lại dự liệu khi phát hiện thay đổi
    useEffect(() => {
        const today = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(today.getDate() - 7);

        const q = query(
            collection(db, "Revenue"),
            where("dateRevenue", ">=", sevenDaysAgo)
        );

        const unsub = onSnapshot(q, (snapshot) => {
            const updatedData = snapshot.docs.map(doc => ({
                ...doc.data()
            }))
            setDataRevenue7DaysAgo(updatedData);
        })

        return () => unsub();
    },[]);

    console.log("🔥 Doanh thu 7 ngày gần nhất:", dataRevenue7DaysAgo);

    const dateToString = (input) => {
        const dateObj = input instanceof Date ? input : input.toDate?.() || new Date(input);
        const day = String(dateObj.getDate()).padStart(2, "0");
        const month = String(dateObj.getMonth() + 1).padStart(2, "0");
        const year = dateObj.getFullYear();
        return `${day} - ${month} - ${year}`;
    };

    return (
        <>
            <div className="main-table-revenue-month">
                <h1 className="title-table-revenue-month">Doanh thu 7 ngày gần nhất Mon Amour</h1>
                <div className="table-revenue-month">
                    <div className="chart-graphic-revenue-detail">
                        <Bar 
                            data={{
                                labels: dataRevenue7DaysAgo.map((data) => dateToString(data.dateRevenue)),
                                datasets: [
                                    {
                                        label: "Tiền mặt",
                                        data: dataRevenue7DaysAgo.map((data) => data.cash),
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
                                        label: "Thẻ",
                                        data: dataRevenue7DaysAgo.map((data) => data.card),
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
                            options={options} 
                        />
                    </div>
                    <div className="table-revenue-detail">
                        <h3 className="title-table-revenue-detail">Bảng doanh thu chi tiết</h3>
                        <table>
                            <thead>
                                <tr>
                                    <td>STT</td>
                                    <td>Date</td>
                                    <td>Cash</td>
                                    <td>Card</td>
                                    <td>Total</td>
                                </tr>
                            </thead>
                            <tbody>
                                {dataRevenue7DaysAgo.map((item, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td className="table-label-revenue-detail">{dateToString(item.dateRevenue)}</td>
                                        <td>{item.cash}</td>
                                        <td>{item.card}</td>
                                        <td id="table-total-revenue-detail">{item.card + item.cash}</td>
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