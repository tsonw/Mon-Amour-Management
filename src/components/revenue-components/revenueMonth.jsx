import React, { useEffect, useState } from "react";

import "../../styles/components-styles/revenue/revenueMonth.css";
import { collection, onSnapshot, orderBy, query, where, getDocs } from "firebase/firestore";
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
            text: "Biểu đồ doanh thu",
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

export default function RevenueMonth () {

    // Data doanh thu theo tháng
    const [dataRevenue6MonthsAgo, setdataRevenue6MonthsAgo] = useState([]);

    // Lấy dự liêu ban đầu
    // Tự cập nhật lại dự liệu khi phát hiện thay đổi
    useEffect(() => {
        const today = new Date();
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(today.getMonth() - 6);

        // Truy vấn có điều kiện
        const q = query(
            collection(db, "Revenue"),
            where("dateRevenue", ">=", sixMonthsAgo)
        );

        const unsub = onSnapshot(q, (snapshot) => {
            
            // List tên các tháng
            const months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];

            // Chia data thành từng tháng
            const monthMap = {}; // key: yyyy-mm, value: tổng revenue

            snapshot.docs.forEach((doc) => {
                const data = doc.data();
                const dateRaw = data.dateRevenue;

                // Chuyển date sang string
                const dateObj = dateRaw.toDate ? dateRaw.toDate() : new Date(dateRaw);
                const year = dateObj.getFullYear();
                const month = String(dateObj.getMonth() + 1).padStart(2, "0");

                // Tạo key cho list
                const monthKey = `${year}-${month}`;

                // Lần đầu gặp thì tạo một object mới với dữ liệu ban đầu là 0
                if (!monthMap[monthKey]) {
                    monthMap[monthKey] = {
                        month: monthKey,
                        totalRevenue: 0,
                        cash: 0,
                        card: 0,
                        monthLabel: months[dateObj.getMonth()] + " - " + dateObj.getFullYear()
                    };
                }

                // Cập nhật lại số liệu
                monthMap[monthKey].totalRevenue += data.revenueTotal;
                monthMap[monthKey].cash += data.cash;
                monthMap[monthKey].card += data.card;
            });

            const groupedByMonth = Object.values(monthMap);
            groupedByMonth.sort((a, b) => b.month.localeCompare(a.month));
            setdataRevenue6MonthsAgo(groupedByMonth); // cập nhật state đã nhóm
        })

        return () => unsub();
    },[]);

    return (
        <>
            <div className="main-table-revenue-month">
                <h1 className="title-table-revenue-month">Doanh thu 6 tháng gần nhất Mon Amour</h1>
                <div className="table-revenue-month">
                    <div className="chart-graphic-revenue-detail">
                        <Bar 
                            data={{
                                labels: dataRevenue6MonthsAgo.map((data) => data.monthLabel),
                                datasets: [
                                    {
                                        label: "Tiền mặt",
                                        data: dataRevenue6MonthsAgo.map((data) => data.cash),
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
                                        data: dataRevenue6MonthsAgo.map((data) => data.card),
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
                                {dataRevenue6MonthsAgo.map((item, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td className="table-label-revenue-detail">{item.monthLabel}</td>
                                        <td>{item.cash} €</td>
                                        <td>{item.card} €</td>
                                        <td id="table-total-revenue-detail">{item.totalRevenue} €</td>
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