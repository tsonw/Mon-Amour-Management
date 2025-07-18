import React from "react";
import logoMA from "../assets/logoMonAmour.png";
import "../styles/components-styles/footer.css";

export default function Footer () {

    return (
        <>
            <div className="main-footer">
                <div className="content-footer">
                    <img className="logo-footer" src={logoMA} alt="Logo" draggable="false"/>
                    <div className="contact-footer">
                        <h2 className="title-text-footer">CONTACT</h2>
                        <p className="content-text-footer">email</p>
                        <p className="content-text-footer">8 Rue Vavin, 75006 Paris</p>
                        <p className="content-text-footer">Phone number</p>
                    </div>
                    <div className="social-media-footer">
                        <h2 className="title-text-footer">SOCIAL MEDIA</h2>
                        <p className="content-text-footer">name</p>
                        <p className="content-text-footer">name</p>
                        <p className="content-text-footer">name</p>
                    </div>
                </div>
                <div className="copyright-footer">
                    <p>&copy; 2025 Mon Amour - Les deux chatons. All rights reserved.</p>
                </div>
            </div>
        </>
    );
}