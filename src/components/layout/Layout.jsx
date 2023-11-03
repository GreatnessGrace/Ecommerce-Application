import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/navbar";
import HeroSection from "../heroSection/HeroSection";

function Layout({children}) {
    return (
        <div>
            <Navbar />
            {/* <div className="content">
                {children}
            </div> */}
            <HeroSection />
            <Footer />

        </div>
    )
    
}

export default Layout;