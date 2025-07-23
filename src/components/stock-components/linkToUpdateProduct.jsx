import React from "react";

import "../../styles/components-styles/stock/linkUpdateProduct.css";

export default function LinkToUpdateProduct () {

    return (
        <>
            <div className="main-link-update-product">
                <a className="link-update-product" href="/Stock/Update">Update product quantity</a>
                <a className="link-update-product" href="/stock">Update history</a>
            </div>
        </>
    );
}