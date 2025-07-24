import React, { useState, useEffect } from "react";
import { query, collection, orderBy, where, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "../../scripts/get-document";

import "../../styles/components-styles/product/listProduct.css";

import photo1 from "../../assets/Raw/Raw_0000s_0008_Layer-23.png";

// Cafe
import CafeAuLait from "../../assets/ImageProduct/cafe/cfsua.jpg";

// Thé au lait
import TheAuLaitMatcha from "../../assets/ImageProduct/TheAuLait/matcha.jpg";

// Thé au fruit
import ThePeach from "../../assets/ImageProduct/fruit/peche.jpg";

// Brun Sugar
import MatchaBrunSugar from "../../assets/ImageProduct/brunsugar/matcha.jpg";

const ListProductImage = {
    // Cafe
    "Café au lait": CafeAuLait,
    // The au fruit
    "Thé à la peach":ThePeach,
    // Matcha
    "Thé au lait au café": TheAuLaitMatcha,
    "milktea": photo1,
    "coffee": photo1,
    "frappe": photo1,
    "fruittea": photo1,
    "matcha": TheAuLaitMatcha,
    "brownsugar": MatchaBrunSugar,
    "yogurt": photo1
}


export default function ListProduct () {

    // Data Product
    const [dataProduct, setDataProduct] = useState([]);

    // Data Filter
    const [dataProductFilter, setDataProductFilter] = useState([]);

    // Lấy Data + cập nhật lại data khi phát hiện thay đổi
    useEffect(() => {
        const q = query(
            collection(db, "Product"),
            orderBy("code", "asc")
        );

        const unsub = onSnapshot(q, (snapshot) => {
            const updatedData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setDataProduct(updatedData);
        });

        return () => unsub();
    }, []);

    // Cập nhật filter với giá trị ban đầu là all
    useEffect(() => {
        setDataProductFilter(dataProduct);
    },[dataProduct]);

    // Hàm lấy dữ liệu với truy vấn được gửi trong tham số
    const fetchData = async (q) => { 
        const querySnapshot = await getDocs(q);
        const dataFilter = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setDataProductFilter(dataFilter);
        console.log(dataProductFilter)
    };

    // Hàm tìm theo type của sản phẩm trong ComboBox
    const searchByNameType = (e) => {
        // Lấy type được chọn
        const selectedType = e.target.value;

        // Nếu All thì không thực hiện truy vấn có where
        if (selectedType === "all") {
            // Lấy toàn bộ mà không filter
            const q = query(
                collection(db, "Product"),
                orderBy("code", "asc")
            );
            fetchData(q);
            return;
        }

        const q = query(
            collection(db, "Product"), 
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

        if (textSearch != "") {
            // Thực hiện truy vấn với giá trị tìm kiếm
            const q = query(
            collection(db, "Product"),
                orderBy("name"),
    
                // Thực hiện truy vấn có điều kiến khi chỉ nhập một phần của giá trị
                // Ex : Man -> Mangue
                // Giống Like trong SQL
                where("name", ">=", textSearch),
                where("name", "<", textSearch + "\uf8ff")
            );
            fetchData(q);
        } else {
            // Thực hiện truy vấn với tất cả giá trị
            const q = query(
            collection(db, "Product"),
                orderBy("code"),
            );
            fetchData(q);
        }

    }
    
    console.log(dataProductFilter);

    return (
        <>
            <div className="main-list-product">
                <h1 className="title-list-product">Danh sách sản phẩm Mon Amour</h1>
                <div className="category-list-product">
                    <div className="panel-search-product">
                        <div className="search-box-list-product-type">
                            <label className="label-search-box-list-product" htmlFor="type">Type :</label>
                            <select className="select-search-box-list-product" name="type" id="" onChange={searchByNameType}>
                                <option value="all">Tất cả</option>
                                <option value="coffee">Café</option>
                                <option value="milktea">Thé au lait</option>
                                <option value="frappe">Frappé</option>
                                <option value="fruittea">Thé au fruit</option>
                                <option value="matcha">Matcha</option>
                                <option value="brownsugar">Sucre Brun</option>
                                <option value="yogurt">Yaourt</option>
                            </select>
                        </div>
                        <div className="search-box-list-product-name">
                            <label className="label-search-box-list-product" htmlFor="name">Name :</label>
                            <input className="input-search-box-list-product" id="textBoxSearch" type="text" name="name"/>
                            <button className="btn-search-box-list-product" onClick={searchByNameProduct}>Search</button>
                        </div>
                    </div>
                </div>
                <div className="list-product-card">
                    {dataProductFilter.map((item) => (
                        <div key={item.id} className="item-card-product" >
                            <div className="panel-image-card-product" >
                                <img className="image-card-product" src={ListProductImage[item.name]}  alt="image" draggable="false" />
                            </div>
                            <div className="panel-text-card-product">
                                <h2 className="title-product-card">{item.name}</h2>
                                <h5 className="code-product-card">Code : {item.code}</h5>
                                <h1 className="price-product-card">
                                    € {item.priceM} {item.priceL ? ` - € ${item.priceL}` : ""}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}