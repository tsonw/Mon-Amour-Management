import React from "react";
import "../../styles/components-styles/home/helloPanel.css";

export default function HelloPanel () {

    return (
        <>
            <div className="main-hello-panel">
                <div className="text-hello-panel">
                    <h1 className="title-hello-panel">TRANG QUẢN LÝ NỘI BỘ MON AMOUR</h1>
                    <p className="content-hello-panel">Trang web quản lý thông tin nội bộ trong cửa hàng dành riêng cho nhân viên quán</p>
                </div>
                <div className="shortcut-btn">
                    <a href="/Home" className="item-shortcut-btn">Doanh số</a>
                    <a href="/Home" className="item-shortcut-btn">Giờ làm</a>
                    <a href="/Home" className="item-shortcut-btn">Quản lý kho</a>
                </div>
            </div>
        </>
    );
}