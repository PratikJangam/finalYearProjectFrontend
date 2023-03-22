import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero_section">
        <h1>Analysis of Drugs</h1>
        <div className="most_occured">
          <div className="drug">
            <h2>Most Occured drugs</h2>
            <p>
              Cymbalta <span>4648</span>
            </p>
            <p>
              Lisinopril <span>4269</span>
            </p>
            <p>
              Lisinopril solution <span>4269</span>
            </p>
            <p>
              Lexapro <span>4134</span>
            </p>
            <p>
              Hydrocodone-acetaminophen <span>3941</span>
            </p>
            <br />
            <p>
              sorbsan bandage <span>1</span>
            </p>
            <p>
              sorbsan topical wound dressing 3" x <span>1</span>
            </p>
            <p>
              q-pap extra strength <span>1</span>
            </p>
            <p>
              symax <span>1</span>
            </p>
            <p>
              vanadium granules <span>1</span>
            </p>
          </div>
          <div className="drug_img">
            <img src="Images/Cymbalta.jpeg" alt="drug" />
          </div>
        </div>

        <div className="detailed_analysis">
          {/* <p>View detailed Analysis - Click Here...</p> */}
          <h3>As per Analysis we find "Cymbalta" drug with most occurance.</h3>
          <p>Detailed analysis of "Cymbalta is given below."</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
