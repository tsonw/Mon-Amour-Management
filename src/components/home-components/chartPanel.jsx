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

    const [dataWeek, setDataWeek] = useState([]);
    const [dataMonth, setdataMonth] = useState([]);
    
    // Lấy dữ liệu từ Firestore (Chart)
    useEffect(() => {
        const fetchData = async () => {
            const qW = query(
                collection(db, "RevenueWeek")
            );
            const qM = query(
                collection(db, "RevenueMonth"),
                orderBy("idM", "asc")
            );
            
            const querySnapshotW = await getDocs(qW);
            const querySnapshotM = await getDocs(qM);

            const chartWeek = querySnapshotW.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            const chartMonth = querySnapshotM.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setDataWeek(chartWeek);
            setdataMonth(chartMonth);
        };
        fetchData();
    }, []);

    console.log(dataMonth);

    return (
        <>
            <div className="main-chart-panel">
                <div className="chart-panel">
                    <div className="chart-graphic">
                        <Line
                            data={{
                                labels: dataWeek.map((data) => data.Label),
                                datasets: [
                                    {
                                        label: "Compte",
                                        data: dataWeek.map((data) => data.Compte),
                                        backgroundColor: "#263767",
                                        borderColor: "#1f618dff",
                                    },
                                    {
                                        label: "Cash",
                                        data: dataWeek.map((data) => data.Cash),
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
                                labels: dataMonth.map((data) => data.Label),
                                datasets: [
                                    {
                                        label: "Compte",
                                        data: dataMonth.map((data) => data.Compte),
                                        backgroundColor: "#263767",
                                        borderColor: "#1f618dff",
                                    },
                                    {
                                        label: "Cash",
                                        data: dataMonth.map((data) => data.Cash),
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
                    <a href="/Revenue" className="btn-shortcut-bussiness">Chi tiết doanh thu</a>
                </div>
            </div>
        </>
    );
}