import React, { useState, useEffect } from "react";
import "../../styles/components-styles/home/chartPanel.css";
import { collection, getDocs, query, limit, orderBy } from 'firebase/firestore';
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

    const [data, setData] = useState([]);
    
    // Lấy dữ liệu từ Firestore (Chart)
    useEffect(() => {
        const fetchData = async () => {
            const q = query(
                collection(db, "RevenueWeek")
            ); 
            const querySnapshot = await getDocs(q);
            const chartWeek = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setData(chartWeek);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="main-chart-panel">
                <div className="chart-panel">
                    <div className="chart-graphic">
                        <Line
                            data={{
                                labels: data.map((data) => data.Label),
                                datasets: [
                                    {
                                        label: "Compte",
                                        data: data.map((data) => data.Compte),
                                        backgroundColor: "#263767",
                                        borderColor: "#1f618dff",
                                    },
                                    {
                                        label: "Cash",
                                        data: data.map((data) => data.Cash),
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
                                    legend: {
                                        display: true,
                                        position: 'bottom',
                                        padding: 20,
                                        boxWidth: 50,
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
                    <h2 className="title-chart-sale-revenue">Doanh thu theo tuần</h2>
                </div>
                <div className="chart-panel">
                    <div className="chart-graphic">
                        <Line
                            data={{
                                labels: data.map((data) => data.Label),
                                datasets: [
                                    {
                                        label: "Compte",
                                        data: data.map((data) => data.Compte),
                                        backgroundColor: "#263767",
                                        borderColor: "#1f618dff",
                                    },
                                    {
                                        label: "Cash",
                                        data: data.map((data) => data.Cash),
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
                                    legend: {
                                        display: true,
                                        position: 'bottom',
                                        padding: 20,
                                        boxWidth: 50,
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
                    <h2 className="title-chart-sale-revenue">Doanh thu theo tháng</h2>
                </div>
                <div className="shortcut-bussiness">
                    <button className="btn-shortcut-bussiness">Doanh thu</button>
                </div>
            </div>
        </>
    );
}