import React from "react";
import "../../styles/components-styles/staff/listStaff.css";
import CardStaff from "./cardStaff";

export default function ListStaff () {

    return (
        <>
            <div className="main-list-staff">
                <h1 className="title-list-staff">Danh sách nhân viên Mon Amour</h1>
                <div className="list-staff-card">
                    <CardStaff />
                </div>
            </div>
        </>
    );
}