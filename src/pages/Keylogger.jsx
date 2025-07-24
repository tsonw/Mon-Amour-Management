import React, { useState, useEffect } from "react";
import { collection, getDocs, query, limit, orderBy } from 'firebase/firestore';
import { db } from "../scripts/get-document";

import avtTony from "../assets/profile-avatar-tony.jpg";

const avatarMap = {
    Tony: avtTony
};

function GlobalKeyLogger() {
    const [key, setKey] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        const handleKeyDown = (e) => {
            setKey(e.key);
            setText(prev => prev + e.key);
            console.log('Toàn trang bắt được:', e.key);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const [imgSrc, setImgSrc] = useState("");

    function testparametre (name) {
        const img = document.getElementById("img_test");
        if (name === "Tony") {
            setImgSrc(avatarMap[name]); // link ảnh mẫu
        }
    }

    return (
        <div>
            <h1>Gõ bất kỳ đâu cũng bắt được luôn 🤖</h1>
            <p>Ký tự bạn vừa nhấn: {text}</p>
            <button id="btn_test" onClick={() => testparametre("Tony")}>
                Bấm để đổi ảnh
            </button>

            <img id="img_test" src={imgSrc} alt="Ảnh demo" />
        </div>
    );
}

export default GlobalKeyLogger;
