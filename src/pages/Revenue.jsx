import React from "react";
import Navigation from "../components/navigation";
import Footer from '../components/footer';

import "../styles/pages-styles/Revenue.css";
import RevenueMonth from "../components/revenue-components/revenueMonth";
import RevenueWeek from "../components/revenue-components/revenueWeek";
import PanelBtnRevenue from "../components/revenue-components/panelBtnRevenue";

export default function Revenue () {

    document.title = "Revenue | Mon Amour";

    return (
        <>
            <div id="Revenue">
                <Navigation />
                <RevenueMonth />
                <RevenueWeek />
                <PanelBtnRevenue />
                <Footer />
            </div>
        </> 
    );
}