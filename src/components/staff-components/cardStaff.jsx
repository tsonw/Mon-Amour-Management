import React, { useState, useEffect } from "react";
import { collection, getDocs, query, limit, orderBy } from 'firebase/firestore';
import { db } from "../../scripts/get-document";
import "../../styles/components-styles/staff/cardStaff.css";

import iconMA from "../../assets/iconMA.png";
import avtTony from "../../assets/profile-avatar.jpg";

const avatarMap = {
    Tony: avtTony
};


export default function CardStaff () {

    const [dataStaff, setDataStaff] = useState([]);

    // Lấy dữ liệu từ Firestore (Chart)
    useEffect(() => {
        const fetchData = async () => {
            const qS = query(
                collection(db, "Staffs")
            );

            const querySnapshotS = await getDocs(qS);

            const dataS = querySnapshotS.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setDataStaff(dataS);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="main-card-staff">
                {dataStaff.map((item) => (
                    <div key={item.id} className="item-card-staff">
                        <img className="avt-card-staff" src={avatarMap[item.Avatar]} alt="avt" draggable="false" />
                        <div className="text-content-card-staff">
                            <img className="mini-icon-card-staff" src={iconMA} alt="avt" draggable="false"/>
                            <div className="info-card-staff">
                                <h3 className="name-card-staff">{item.Name}</h3>
                                <p className="nickname-card-staff">@{item.Nickname}</p>
                            </div>
                            <button className="btn-card-staff">Chi tiết</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}