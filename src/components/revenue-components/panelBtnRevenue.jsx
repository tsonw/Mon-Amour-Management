import React from "react";

import "../../styles/components-styles/revenue/panelBtnRevenue.css";

export default function PanelBtnRevenue () {

    return (
        <>
            <div className="main-panel-btn-revenue">
                <a href="/revenue/HistoryMonthRevenue" className="btn-revenue">Nhật ký doanh thu</a>
                <a href="/revenue/EnterDailyRevenue" className="btn-revenue">Nhập doanh thu hằng ngày</a>
            </div>
        </>
    );
}