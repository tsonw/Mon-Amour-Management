import React from "react";
import { db } from '../../scripts/get-document'; 
import "../../styles/components-styles/home/topSellersPanel.css"; 
import CardProductSellers from "./cardProductSellers";

export default function TopSellersPanel () {

    return (
        <>
            <div className="main-topSellers-Panel">
                <h1 className="title-topSellers-Panel">TOP 3 SELLERS</h1>
                <div className="card-product-panel">
                    <CardProductSellers />
                </div>
            </div>
        </>
    );
}