import React from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

import "../styles/pages-styles/Product.css";
import ListProduct from "../components/product-components/listProduct";

//import { addDataProductCoffee } from "../scripts/addDataIntoDatabase/addDataProduct";

export default function Product () {

    document.title = "Product | Mon Amour"

    return (
        <>
            <div id="Product">
                <Navigation />
                <ListProduct />
                <Footer />
            </div>
        </>
    );
}