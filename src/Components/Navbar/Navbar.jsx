import React, { useState } from "react";
import "./Navbar.css"
import mainLogo from "../asset/main-logo.png"
import profileImage from "../asset/profile.png"
import dropDownArrow from "../asset/dropdown-blue-arrow.png"
import phoneIcon from "../asset/telephone.png"
import mailIcon from "../asset/email.png"
import profileIcon from "../asset/my-profile.png"
import fdsIcon from "../asset/fds.png"
import transacctionIcon from "../asset/transactions.png"
import logoutIcon from "../asset/logout.png"

const  NavBar = () => {
    const [supportVisible, setSupportVisible] = useState(false);
    const [profileDivVisible, setProfileDivVisible] = useState(false);

    const toggleProfileDiv = () => {
        setProfileDivVisible(!profileDivVisible);
    };

    const toggleSupport = () => {
        setSupportVisible(!supportVisible);
    };

    return(
        <div className="navbar">
            <div className="nav-left">
                <img src={mainLogo} alt="logo" />
            </div>

            <div className="nav-right">
                <ul>
                    <li>Dashboard</li>
                    <li>FAQs</li>
                    <li className="support-li" onClick={toggleSupport} >Support</li>
                    <div className={`support-div ${supportVisible ? "" : "hidden"}`}>
                        <div className="support-1">
                            <div className="support-logo">
                                <img src={phoneIcon} alt="" />
                            </div>
                            <div className="support-contact">
                                <span>+91 88777 37777</span>
                                <span>+91 88777 5666</span>
                            </div>
                        </div>
                        <div className="support-2">
                        <div className="support-logo">
                            <img src={mailIcon} alt="" />
                        </div>
                            <div className="support-email">
                                <span>support@silverbullet.in</span>
                                <span>info@silverbullet.in</span>
                            </div>
                        </div>
                    </div>
                    <li className="profile-li" onClick={toggleProfileDiv}>
                        <img className="profile" src={profileImage} alt="profile" />
                        <img className={`arrow ${profileDivVisible ? "rotate" : ""}`} src={dropDownArrow} alt="" />
                    </li>

                    {profileDivVisible && <div className="profile-div">
                        <div className="my-profile">
                            <img src={profileIcon} alt="" />

                            <span>My Profile</span>
                        </div>
                        <div className="my-fds">
                            <img src={fdsIcon} alt="" />

                            <span>My FDs</span>
                        </div>
                        <div className="my-transactions">
                            <img src={transacctionIcon} alt="" />

                            <span>My Transactions</span>
                        </div>
                        <div className="logout">
                            <img src={logoutIcon} alt="" />

                            <span>Logout</span>
                        </div>
                    </div>}
                </ul>
            </div>
        </div>
    );
}

export default NavBar