import React from "react";
import "./hero.css"
import blackArrow from "../asset/dropdown-black-arrow.png"
import pieChart from "../asset/piechart.png"
import timeline from "../asset/timeline.png"

const Hero = () =>{
    return(
        <div className="hero">
            <div className="heading">
                <h2>Welcome, Johan Paul</h2>
            </div>

            <div className="diagrams">
                <div className="pie-chart">
                    <div className="diag-heading">
                        <h3>Your FD Portfolio</h3>

                        <span>Deposit Amt <img src={blackArrow} alt="arrow" /></span>
                    </div>

                    <div className="chart">
                        <img src={pieChart} alt="" />
                    </div>
                </div>

                <div className="timeline">
                    <h3>FD Maturity Timeline</h3>

                    <img src={timeline} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Hero;