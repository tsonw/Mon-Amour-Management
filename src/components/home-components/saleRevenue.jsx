import React, { useEffect, useState } from "react";
import "../../styles/components-styles/home/saleRevenue.css";
import { collection, getDocs, query, limit, orderBy , doc , updateDoc } from 'firebase/firestore';
import { db } from '../../scripts/get-document'; 
import ChartPanel from "./chartPanel";

export default function SaleRevenue () {

    const handleClick = async () => {
        const cash = document.getElementById("getData").value;
        const ref = doc(db, "RevenueWeek", "1");
        await updateDoc(ref, {
            Cash: cash
        });
    };

    return (
        <>
            <div className="main-sale-revenue-Panel">
                <h1 className="title-sale-revenue-Panel">SALES REVENUE</h1>
                <div className="chart-sale-revenue-panel">
                    <ChartPanel />
                </div>
            </div>
        </>
    );
}