import React from "react";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import FormEnterDailyRevenue from "../../components/revenue-components/formEnterDailyRevenue";

export default function EnterDailyRevenue () {
    
    // Set Title
    document.title = "Enter Revenue | Mon Amour";

    return (
        <>
            <div id="EnterDailyRevenue">                
                <Navigation />
                <FormEnterDailyRevenue />
                <Footer />
            </div>
        </>
    );
}