import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../scripts/auth-signin';
import { Link } from 'react-router-dom';
import Navigation from '../components/navigation';
import HelloPanel from '../components/home-components/helloPanel';

import "../styles/pages-styles/Home.css";
import TopSellersPanel from '../components/home-components/topSellersPanel';
import SaleRevenue from '../components/home-components/saleRevenue';
import Footer from '../components/footer';

export default function Home() {
    
    // Thay đổi tiêu đề của trang hiện tại
    document.title = "Home | Mon Amour"

    return (
        <div id='Home'>
            <Navigation />
            <HelloPanel />
            <TopSellersPanel />
            <SaleRevenue />
            <Footer />
        </div>
    );
}