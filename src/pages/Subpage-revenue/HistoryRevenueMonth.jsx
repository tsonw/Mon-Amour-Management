import React from "react";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import HistoryTableRevenue from "../../components/revenue-components/historyTableRevenue";

export default function HistoryRevenueMonth () {

    document.title = "History Enter Revenue | Mon Amour";

    return (
        <>
            <div id="EnterDailyRevenue">                
                <Navigation />
                <HistoryTableRevenue />
                <Footer />
            </div>
        </>
    );
}