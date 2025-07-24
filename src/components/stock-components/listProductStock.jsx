import React, { use, useEffect, useState } from "react";
import { query, collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../scripts/get-document";

import "../../styles/components-styles/stock/listProductStock.css";
import CategorieProductStock from "./categorieProductStock";
import LinkToUpdateProduct from "./linkToUpdateProduct";


export default function ListProductStock () {

    return (
        <>
            <div className="main-list-product-stock">
                <h1 className="title-list-product-stock">Danh sách nguyên liệu trong kho</h1>
                <div className="categorie-list-product-stock">
                    <CategorieProductStock />
                </div>
                <div className="function-update-product-stock">
                    <LinkToUpdateProduct />
                </div>
            </div>
        </>
    );
}