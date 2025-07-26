import React, { useState, useEffect} from "react";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import { db } from "../../scripts/get-document";

import "../../styles/components-styles/product/tableDetailProduct.css";

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

export default function TableDetailProduct ({code}) {
    
    // Data Product
    const [dataProduct, setDataProduct] = useState([]);

    useEffect(() => {
        const q = query(
            collection(db, "Product"),
            where("code", "==", code)
        );

        const unsub = onSnapshot(q, (snapshot) => {
            const updatedData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setDataProduct(updatedData);
        })

        return () => unsub();
    },[]);

    const formula = dataProduct[0]?.formula;

    return (
        <>
            <div className="main-table-detail-product">
                <a className="btn-return-detail-product" href="/Product">Return</a>
                <h1 className="title-table-detail-product">Chi tiết sản phẩm</h1>
                {dataProduct.map(item => (
                    <div key={item.id} className="table-detail-product">
                        <div className="panel-image-detail-product">
                            <img className="image-detail-product" src={ListProductImage[item.name]} alt="image" draggable="false" />
                        </div>
                        <div className="panel-text-detail-product">
                            <h2 className="name-detail-product">{item.name}</h2>
                            <p className="category-detail-product">{item.category}</p>
                            <div className="panel-size-detail-product">
                                <p className="price-M-detail-product">€ {item.priceM}</p>
                                {item.priceL && <p className="price-L-detail-product">€ {item.priceL}</p>}
                            </div>
                            <div className="formula-detail-product">
                                <h5 className="title-formula-detail-product">Công thức :</h5>
                                <ul>
                                    {formula.split(' ').map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="panel-btn-detail-product">
                                <button className="btn-detail-product">Edit</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}