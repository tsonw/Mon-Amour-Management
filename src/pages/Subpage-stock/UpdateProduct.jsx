import React from "react";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import FormUpdateProduct from "../../components/stock-components/formUpdateProduct";

export default function UpdateProduct () {

    document.title = "Form Update | Mon Amour"


    return (
        <>
            <div id="UpdateProduct">
                <Navigation />
                <FormUpdateProduct />
                <Footer />
            </div>
        </>
    );
}