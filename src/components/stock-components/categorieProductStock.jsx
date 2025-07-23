import React, { useEffect, useState } from "react";
import { db } from "../../scripts/get-document";
import { getDocs, collection, onSnapshot, query, where, orderBy } from "firebase/firestore";

import "../../styles/components-styles/stock/categorie.css";

const test = () => {
    console.log("OK");
    return ["1"];
}

export default function CategorieProductStock () {

    // Data product
    const [dataProductStock, setDataProductStock] = useState([]);

    // Data Filter
    const [dataProductStockFilter, setDataProductStockFilter] = useState([]);

    useEffect(() => {
        const q = query(
            collection(db, "ProductStock"),
            orderBy("code", "asc")
        );

        const unsub = onSnapshot(q, (snapshot) => {
            const updatedData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setDataProductStock(updatedData);
        });

        return () => unsub();
    }, []);

    // Cập nhật filter với giá trị ban đầu là all
    useEffect(() => {
        setDataProductStockFilter(dataProductStock);
    },[dataProductStock])


    // Hàm lấy dữ liệu với truy vấn được gửi trong tham số
    const fetchData = async (q) => { 
        const querySnapshot = await getDocs(q);
        const dataFilter = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setDataProductStockFilter(dataFilter);
    };

    // Hàm tìm theo type của sản phẩm trong ComboBox
    const searchByNameType = (e) => {
        // Lấy type được chọn
        const selectedType = e.target.value;

        // Nếu All thì không thực hiện truy vấn có where
        if (selectedType === "all") {
            // Lấy toàn bộ mà không filter
            const q = query(
                collection(db, "ProductStock"),
                orderBy("code", "asc")
            );
            fetchData(q);
            return;
        }

        const q = query(
            collection(db, "ProductStock"), 
            orderBy("code", "asc"),
            where("category", "==", e.target.value)
        ); 
        fetchData(q);
    }

    // Search box by name
    const searchByNameProduct = () => {

        // Lấy text cần tìm kiếm
        const input = document.getElementById("textBoxSearch").value;

        // Viết hoa chữ cái đầu của mỗi giá trị tìm kiếm
        const textSearch = input.charAt(0).toUpperCase() + input.slice(1);

        // Thực hiện truy vấn với giá trị tìm kiếm
        const q = query(
        collection(db, "ProductStock"),
            orderBy("name"),

            // Thực hiện truy vấn có điều kiến khi chỉ nhập một phần của giá trị
            // Ex : Man -> Mangue
            // Giống Like trong SQL
            where("name", ">=", textSearch),
            where("name", "<", textSearch + "\uf8ff")
        );
        fetchData(q);
    }

    return (
        <>
            <div className="main-categorie-product-stock">
                <div className="panel-search-categorie-product-stock">
                    <div className="type-box">
                        <label className="label-text" htmlFor="type">Type :</label>
                        <select 
                            className="select-type"
                            id="type-categorie-select"
                            onChange={searchByNameType}
                        >
                            <option value="all">Tất cả</option>
                            <option value="powder">Bột</option>
                            <option value="siro">Siro</option>
                            <option value="jam">Jam</option>
                            <option value="tea">Trà</option>
                            <option value="sugar">Đường</option>
                            <option value="boba">Boba (Topping)</option>
                        </select>
                    </div>
                    <div className="search-box">    
                        <label className="label-text" htmlFor="name">Name product :</label>
                        <input className="input-search" id="textBoxSearch" type="text" />
                        <button className="button-search" onClick={searchByNameProduct}>Search</button>
                    </div>
                </div>
                <div className="table-product-stock">
                    <table>
                        <thead>
                            <tr>
                                <td>Code</td>
                                <td>Name</td>
                                <td>Supplier Name</td>
                                <td>Remaining quantity</td>
                            </tr>
                        </thead>
                        <tbody>
                            {dataProductStockFilter.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.code}</td>
                                    <td>{item.name}</td>
                                    <td>{item.supplier}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export { test };