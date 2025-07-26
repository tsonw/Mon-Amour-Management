import React, { useState, useEffect } from "react";
import { query, collection, orderBy, where, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "../../scripts/get-document";
import { useNavigate } from "react-router-dom";

import "../../styles/components-styles/product/listProduct.css";

// Cafe
import CafeAuLait from "../../assets/ImageProduct/cafe/cfsua.jpg";
import CafePhomai from "../../assets/ImageProduct/cafe/cfphomai.jpg";
import CafeDauPhong from "../../assets/ImageProduct/cafe/cfdauphong.jpg";
import CafeDen from "../../assets/ImageProduct/cafe/cafeden.jpg";
import Bacxiu from "../../assets/ImageProduct/cafe/bacxiu.jpg";

// Frappe
import MangueFrappe from "../../assets/ImageProduct/frappe/mango.jpg";
import FraiseFrappe from "../../assets/ImageProduct/frappe/fraise.jpg";
import DragonFrappe from "../../assets/ImageProduct/frappe/dragon.jpg";
import AnanasFrappe from "../../assets/ImageProduct/frappe/pineapple.jpg";

// Thé au lait
import TheAuLaitMatcha from "../../assets/ImageProduct/TheAuLait/matcha.jpg";
import TheAuLaitNoir from "../../assets/ImageProduct/TheAuLait/black.jpg";
import TheAuLaitCafe from "../../assets/ImageProduct/TheAuLait/cafe.jpg";
import TheAuLaitChoco from "../../assets/ImageProduct/TheAuLait/choco.jpg";
import TheAuLaitHokkaido from "../../assets/ImageProduct/TheAuLait/hokkaido.jpg";
import TheAuLaitJasmin from "../../assets/ImageProduct/TheAuLait/jasmin.jpg";
import TheAuLaitTaro from "../../assets/ImageProduct/TheAuLait/taro.jpg";
import TheAuLaitThai from "../../assets/ImageProduct/TheAuLait/thai.jpg";
import TheAuLaitVani from "../../assets/ImageProduct/TheAuLait/vanila.jpg";
import TheAuLaitCoco from "../../assets/ImageProduct/TheAuLait/coco.jpg";

// Thé au fruit
import ThePeach from "../../assets/ImageProduct/fruit/peche.jpg";
import TheMango from "../../assets/ImageProduct/fruit/mango.jpg";
import ThePassion from "../../assets/ImageProduct/fruit/passion.jpg";
import TheFraise from "../../assets/ImageProduct/fruit/fraise.jpg";
import TheLitchi from "../../assets/ImageProduct/fruit/litchi.jpg";
import TheRoseLitchi from "../../assets/ImageProduct/fruit/roselichi.jpg";
import TheDragon from "../../assets/ImageProduct/fruit/dragon.jpg";
import TheAnanas from "../../assets/ImageProduct/fruit/pineapple.jpg";
import TheKumquat from "../../assets/ImageProduct/fruit/kumquat.jpg";
import TheMelon from "../../assets/ImageProduct/fruit/melon.jpg";
import TheCorossol from "../../assets/ImageProduct/fruit/mangcau.jpg";

// Matcha
import MatchaLatte from "../../assets/ImageProduct/matcha/latte.jpg";
import MatchaFrappe from "../../assets/ImageProduct/matcha/daxay.jpg";
import MatchaRedBean from "../../assets/ImageProduct/matcha/daudo.jpg";
import MatchaCoco from "../../assets/ImageProduct/matcha/coco.jpg";

// Brun Sugar
import MatchaBrunSugar from "../../assets/ImageProduct/brunsugar/matcha.jpg";
import BrunSugar from "../../assets/ImageProduct/brunsugar/normal.jpg";

// Yaourt
import YaourtMixe from "../../assets/ImageProduct/suachua/mixe.jpg";
import YaourtTapioca from "../../assets/ImageProduct/suachua/tapioca.jpg";

const ListProductImage = {
    // Cafe
    "Café au lait": CafeAuLait,
    "Café au fromage": CafePhomai,
    "Café aux cacahuète": CafeDauPhong,
    "Café noir": CafeDen,
    "Bạc xỉu": Bacxiu,
    // Frappe
    "Mangue frappé": MangueFrappe,
    "Fraise frappé": FraiseFrappe,
    "Dragon fruit frappé": DragonFrappe,
    "Ananas frappé": AnanasFrappe,
    // The au fruit
    "Thé à la peach": ThePeach,
    "Thé à la mangue": TheMango,
    "Thé à la passion": ThePassion,
    "Thé à la fraise": TheFraise,
    "Thé au litchi": TheLitchi,
    "Thé rose mixe litchi": TheRoseLitchi,
    "Thé au fruit de dragon": TheDragon,
    "Thé à l'ananas": TheAnanas,
    "Thé au kumquat": TheKumquat,
    "Thé au melon": TheMelon,
    "Thé au corossol": TheCorossol,
    // Matcha
    "Matcha latte": MatchaLatte,
    "Matcha frappé": MatchaFrappe,
    "Matcha haricot rouge": MatchaRedBean,
    "Matcha au coco": MatchaCoco,
    // Thé au lait
    "Thé matcha au lait": TheAuLaitMatcha,
    "Thé noir au lait": TheAuLaitNoir,
    "Thé jasmin au lait": TheAuLaitJasmin,
    "Vanessa's Vanilla": TheAuLaitVani,
    "Thé Bangkok au lait": TheAuLaitThai,
    "Thé au lait au taro": TheAuLaitTaro,
    "Thé au lait au café": TheAuLaitCafe,
    "Thé au lait au coco": TheAuLaitCoco,
    "Thé Hokkaido au lait": TheAuLaitHokkaido,
    "Thé au lait au chocolat": TheAuLaitChoco,
    // Sucre Brun
    "Sucre brun": BrunSugar,
    "Matcha sucre brun": MatchaBrunSugar,
    // Yaourt
    "Yaourt mixé (jam/ fruits)": YaourtMixe,
    "Yaourt aux perles de tapioca": YaourtTapioca
}

export default function ListProduct () {

    const navigate = useNavigate();

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

        // Xoá nội dung tìm kiếm sau khi nhận search
        document.getElementById("textBoxSearch").value = "";

    }

    const ToDetailPage = (code) => {
        navigate(`/product/detail/${code}`);
    }

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
                                <div className="panel-price-product-card">
                                    <div className="sub-top-price-product-card"></div>
                                    <h2 className="price-product-card">€ {item.priceM} {item.priceL ? ` - € ${item.priceL}` : ""}</h2>
                                    <div className="sub-bottom-price-product-card"></div>
                                </div>
                            </div>
                            <div className="panel-text-card-product">
                                <h2 className="title-product-card">{item.name}</h2>
                                <div className="detail-info-product-card">
                                    <h4 className="code-product-card">Code : {item.code}</h4>
                                    <button 
                                        className="link-detail-product-card"
                                        onClick={() => ToDetailPage(item.code)}
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}