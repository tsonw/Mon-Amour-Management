import React from "react";
import { db } from "../scripts/get-document";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

import "../styles/pages-styles/Stock.css";
import ListProductStock from "../components/stock-components/listProductStock";

export default function Stock () {

    document.title = "Stock | Mon Amour";

    return (
        <>
            <div id="Stock">
                <Navigation />
                <ListProductStock />
                <Footer />
            </div>
        </>
    );
}