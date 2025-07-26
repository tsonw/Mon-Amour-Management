import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../scripts/get-document";
import TableDetailProduct from "../../components/product-components/tableDetailProduct";

export default function DetailProduct () {

    const { code } = useParams();
    
    window.scrollTo({ top: 0, behavior: "smooth" });

    document.title = `Details | ${code} | Mon Amour`;

    return (
        <>
            <div id="DetailProduct">
                <Navigation />
                <TableDetailProduct code={code} />
                <Footer />
            </div>
        </>
    );
}