import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div>
            <h1>Giới thiệu về Mon Amour 💖</h1>
            <p>Mon Amour là một ứng dụng quản lý tình yêu và mối quan hệ.</p>
            <p>Nơi bạn có thể lưu giữ những kỷ niệm đẹp và chia sẻ với người thân yêu.</p>
            <p>Hãy cùng khám phá và trải nghiệm nhé!</p>
            <Link to="/"> Trở về Trang chủ</Link>
        </div>
    );
}