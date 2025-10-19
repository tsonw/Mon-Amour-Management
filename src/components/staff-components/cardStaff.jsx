import React, { useState, useEffect } from "react";
import { collection, getDocs, query, limit, orderBy } from 'firebase/firestore';
import { db } from "../../scripts/get-document";
import "../../styles/components-styles/staff/cardStaff.css";

import iconMA from "../../assets/iconMA.png";
import avtTony from "../../assets/profile-avatar-tony.jpg";
import avtLily from "../../assets/profile-avatar-lily.jpg";
import avtLucy from "../../assets/profile-avatar-lucy.png";

const avatarMap = {
    Tony: avtTony,
    Lily: avtLily,
    Lucy: avtLucy
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
                                <h2 className="name-card-staff">{item.Name}</h2>
                                <p className="nickname-card-staff">@{item.Nickname}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}