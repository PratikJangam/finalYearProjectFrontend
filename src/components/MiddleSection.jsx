import React from "react";
import "./middleSection.css";
const MiddleSection = () => {
  return (
    <>
      <div className="middle_section">
        <div className="age">
          <h2>According to Age group</h2>
          <p>
            45-54 <span>1291</span>
          </p>
          <p>
            55-64 <span>1008</span>
          </p>
          <p>
            35-44 <span>874</span>
          </p>
          <p>
            25-34 <span>594</span>
          </p>
          <p>
            65-74 <span>400</span>
          </p>
          <p>
            19-24 <span>225</span>
          </p>
          <p>
            75 or over <span>102</span>
          </p>
          <p>
            13-18 <span>34</span>
          </p>
        </div>
        <div className="left_section">
          <p>
            Consumption of Cymbalta drug with respect to Age group and gender.
          </p>
          <div className="sex">
            <h2>According to gender</h2>
            <p>
              Female <span>3621</span>
            </p>
            <p>
              Male <span>830</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleSection;
