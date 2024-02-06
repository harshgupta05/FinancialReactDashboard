import React from "react";
import "./remsection.css";
import UtkarshLogo from "../asset/utkarsh-logo.png";
import violetTick from "../asset/voilte_tick.png";
import bajajLogo from "../asset/bajaj-logo.png";
import blueTick from "../asset/blue_tick.png";
import shriramLogo from "../asset/shriram-logo.png";
import blackTick from "../asset/black_tick.png";
import mahindraLogo from "../asset/mahindra-logo.png";
import redTick from "../asset/red_tick.png";
import dropdownBlackArrow from "../asset/dropdown-black-arrow.png";

const RemSection = () => {
  return (
    <div className="container">
      <div className="cont-left">
        <div className="cont-left-cards">
          <div className="card-item">
            <div className="utkarsh">
              <div className="card-heading">
                <img src={UtkarshLogo} alt="" />
                <h3>Utkarsh Small Finance Bank</h3>
              </div>

              <div className="features">
                <span>
                  <img src={violetTick} alt="" /> Highest Interest Rate
                </span>

                <span>
                  <img src={violetTick} alt="" /> RBI Insured
                </span>
              </div>

              <div className="interest-rate">
                <div className="interest">
                  <span>Interest Upto</span>
                  <span className="rate">9.10% p.a</span>
                </div>

                <button>Book Now</button>
              </div>
            </div>
          </div>

          <div className="card-item">
            <div className="bajaj">
              <div className="card-heading">
                <img src={bajajLogo} alt="" />
                <h3>Bajaj Finserv</h3>
              </div>

              <div className="features">
                <span>
                  <img src={blueTick} alt="" /> Crisill AAA rated
                </span>

                <span>
                  <img src={blueTick} alt="" /> No video KYC required
                </span>
              </div>

              <div className="interest-rate">
                <div className="interest">
                  <span>Interest Upto</span>
                  <span className="rate">9.10% p.a</span>
                </div>

                <button>Book Now</button>
              </div>
            </div>
          </div>

          <div className="card-item ">
            <div className="shriram">
              <div className="card-heading">
                <img src={shriramLogo} alt="" />
                <h3>Shriram Finance</h3>
              </div>

              <div className="features">
                <span>
                  <img src={blackTick} alt="" /> Crisill AAA rated
                </span>

                <span>
                  <img src={blackTick} alt="" /> No video KYC required
                </span>
              </div>

              <div className="interest-rate">
                <div className="interest">
                  <span>Interest Upto</span>
                  <span className="rate">9.10% p.a</span>
                </div>

                <button>Book Now</button>
              </div>
            </div>
          </div>

          <div className="card-item ">
            <div className="mahindra">
              <div className="card-heading">
                <img src={mahindraLogo} alt="" />
                <h3>Mahindra Finance</h3>
              </div>

              <div className="features">
                <span>
                  <img src={redTick} alt="" /> Crisill AAA rated
                </span>

                <span>
                  <img src={redTick} alt="" /> No video KYC required
                </span>
              </div>

              <div className="interest-rate">
                <div className="interest">
                  <span>Interest Upto</span>
                  <span className="rate">9.10% p.a</span>
                </div>

                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="get-ans">
          <div className="get-ans-heading">
            <div>
              <h3>Get Answers</h3>
              <p>to all your questions</p>
            </div>

            <div>
              <span className="back">
                <img src={dropdownBlackArrow} alt="" />
              </span>
              <span className="forth">
                <img src={dropdownBlackArrow} alt="" />
              </span>
            </div>
          </div>

          <div className="get-ans-cards">
            <div className="get-ans-cards-item">
              <div className="card-item-body">
                <h4>How FDs are taxed</h4>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Exercitationem quos sint dignissimos?
                </p>

                <span>
                  <a href="/">Read more...</a>
                </span>
              </div>
            </div>

            <div className="get-ans-cards-item">
              <div className="card-item-body">
                <h4>How FDs are taxed</h4>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Exercitationem quos sint dignissimos?
                </p>

                <span>
                  <a href="/">Read more...</a>
                </span>
              </div>
            </div>

            <div className="get-ans-cards-item">
              <div className="card-item-body">
                <h4>How FDs are taxed</h4>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Exercitationem quos sint dignissimos?
                </p>

                <span>
                  <a href="/">Read more...</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cont-right">
        <div className="cont-right-cards">
          <div className="right-card-item">
            <div className="right-card-heading">
              <h4>Video KYC</h4>
            </div>

            <div className="right-card-body">
              <div className="right-card-body-left">
                <span className="head">Schedule On</span>
                <span className="date">28</span>
                <span className="month">Oct,2023</span>
              </div>
              
              <div className="right-card-body-right">
                <div className="card-body-right-heading">
                  <h4>Utkarsh SF Bank FD plan 2</h4>
                </div>

                <div className="card-body-right-plan">
                  <div className="deposite">
                    <span className="text">Deposite Amt.</span>
                    <span className="amt">Rs. 20,000</span>
                  </div>
                  <div className="tennure">
                    <span className="text">Tennure</span>
                    <span className="yrs">2 Years</span>
                  </div>
                  <div className="int-rate">
                    <span className="text">Interest Rate</span>
                    <span className="irate">9.10%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-card-body-btn">
              <button className="complete">Complete now</button>
              <button className="reschedule">Reshedule</button>
            </div>
          </div>

          <div className="right-card-item">
            <div className="right-card-heading">
              <h4>Pending Payment</h4>
            </div>

            <div className="right-card-body">
              <div className="right-card-body-left">
                <span className="head">Pay By</span>

                <span className="date">30</span>

                <span className="month">Oct,2023</span>
              </div>
              <div className="right-card-body-right">
                <div className="card-body-right-heading">
                  <h4>Bajaj Finserv Corp FD 1 </h4>
                </div>

                <div className="card-body-right-plan">
                  <div className="deposite">
                    <span className="text">Deposite Amt.</span>
                    <span className="amt">Rs. 25,000</span>
                  </div>
                  <div className="tennure">
                    <span className="text">Tennure</span>
                    <span className="yrs">18 Months</span>
                  </div>
                  <div className="int-rate">
                    <span className="text">Interest Rate</span>
                    <span className="irate">8.10%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-card-body-btn">
              <button className="complete">Pay now</button>
              <button className="reschedule">Cancel Application</button>
            </div>
          </div>

          <div className="right-card-item">
            <div className="right-card-heading">
              <h4>Upcoming FD maturity</h4>
            </div>

            <div className="right-card-body">
              <div className="right-card-body-left">
                <span className="head">Renew by</span>

                <span className="date">30</span>

                <span className="month">Oct,2023</span>
              </div>
              <div className="right-card-body-right">
                <div className="card-body-right-heading">
                  <h4>Sriram Finance Corp FD 1</h4>
                </div>

                <div className="card-body-right-plan">
                  <div className="deposite">
                    <span className="text">Deposite Amt.</span>
                    <span className="amt">Rs. 25,000</span>
                  </div>
                  <div className="tennure">
                    <span className="text">Tennure</span>
                    <span className="yrs">18 months</span>
                  </div>
                  <div className="int-rate">
                    <span className="text">Interest Rate</span>
                    <span className="irate">8.10%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-card-body-btn">
              <button className="complete">Renew now</button>
              <button className="reschedule">Compare other FDs</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemSection;
