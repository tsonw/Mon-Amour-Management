import React, { useEffect, useState } from 'react';

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

    return (
        <div>
            <h1>Gõ bất kỳ đâu cũng bắt được luôn 🤖</h1>
            <p>Ký tự bạn vừa nhấn: {text}</p>
        </div>
    );
}

export default GlobalKeyLogger;
