import React, { useEffect } from "react";

import "./banner.css";

const Banner = () => {
  useEffect(() => {});

  return (
    <div className="slider">
      <div className="slides">
        {/* radio btn start here */}
        <input
          type="radio"
          name="radio-btn"
          id="radio1"

          // onChange={(e) => autoSliderChange(e)}
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio2"
          // onChange={(e) => autoSliderChange(e)}
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio3"
          // onChange={(e) => autoSliderChange(e)}
        />
        {/* radio btn end here */}

        {/* slides image start here */}
        <div className="slide first">
          <div className="image-container"></div>
        </div>
        <div className="slide">
          <div className="image2-container"></div>
        </div>
        <div className="slide">
          <div className="image3-container"></div>
        </div>
        {/* slides image end here */}

        {/* manual navigation start */}
        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
        </div>
        {/* manual navigation end */}
      </div>
    </div>
  );
};

export default Banner;
