import React from 'react';

import "../styles/pages-styles/Staff.css";
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import ListStaff from '../components/staff-components/listStaff';
import WorkSchedule from '../components/staff-components/workSchedule';

export default function Staff() {
    
    // Thay đổi tiêu đề của trang hiện tại
    document.title = "Staffs | Mon Amour"

    return (
        <div id='Staff'>
            <Navigation />
            <ListStaff />
            <WorkSchedule />
            <Footer />
        </div>
    );
}