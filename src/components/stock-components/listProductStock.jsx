import React, { use, useEffect, useState } from "react";
import { query, collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../scripts/get-document";

import "../../styles/components-styles/stock/listProductStock.css";
import CategorieProductStock, { test } from "./categorieProductStock";


export default function ListProductStock () {

    return (
        <>
            <div className="main-list-product-stock">
                <h1 className="title-list-product-stock">Danh sách nguyên liêu trong kho</h1>
                <div className="categorie-list-product-stock">
                    <CategorieProductStock />
                </div>
            </div>
        </>
    );
}