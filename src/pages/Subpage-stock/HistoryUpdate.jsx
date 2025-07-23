import React from "react";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import FormUpdateProduct from "../../components/stock-components/formUpdateProduct";
import TableHistoryUpdate from "../../components/stock-components/tableHistoryUpdate";

export default function HistoryUpdate () {

    document.title = "History Update | Mon Amour"

    return (
        <>
            <div id="HistoryUpdate">
                <Navigation />
                <TableHistoryUpdate />
                <Footer />
            </div>
        </>
    );
}