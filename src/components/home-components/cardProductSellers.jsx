import React, { useEffect, useState } from "react";
import "../../styles/components-styles/home/cardProductSellers.css";
import { collection, getDocs, query, limit, orderBy } from 'firebase/firestore';
import { db } from '../../scripts/get-document'; 

export default function CardProductSellers () {

    const img = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/f8/5c/05/picture-lake.jpg?w=900&h=500&s=1";

    const [data, setData] = useState([]);
    
    // Lấy dữ liệu từ Firestore (Top 3)
    useEffect(() => {
        const fetchData = async () => {
            const q = query(
                collection(db, "Stastiques"), 
                orderBy("quantite", "desc"),
                limit(3)
            ); 
            const querySnapshot = await getDocs(q);
            const top3 = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setData(top3);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="main-card-product-sellers">
                {data.map((item) => (
                    <div key={item.id} className="card-product-sellers">
                        <img src={img} className="img-product-sellers" alt="image product" draggable="false" />
                        <div className="descript-card-product-sellers">
                            <h2 className="name-product-sellers">{item.name}</h2>
                            <p className="price-product-sellers">Giá : <br />Size M - <strong>{item.priceM} €</strong><br />Size L - <strong>{item.priceL} €</strong></p>
                            <p className="quantite-product-sellers">Số lượng : <strong>{item.quantite}</strong></p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}