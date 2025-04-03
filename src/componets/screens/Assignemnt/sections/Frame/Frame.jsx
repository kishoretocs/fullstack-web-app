import React from "react";
// import { HiconLinearDown3 } from "../../../../icons/HiconLinearDown3";
// import { HiconLinearDown3 } from ".../icons/HiconLinearDown3"
import HiconLinearDown3 from "../../../../icons/ HiconLinearDown3/ HiconLinearDown3";

import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="overlap-group">
        <img
          className="vector"
          alt="Vector"
          src="https://c.animaapp.com/m8zie5xoMjUXAh/img/vector-4.svg"
        />

        <img
          className="img"
          alt="Vector"
          src="https://c.animaapp.com/m8zie5xoMjUXAh/img/vector-4.svg"
        />

        <div className="ellipse" />

        <div className="div" />
      </div>

      <img
        className="vector-2"
        alt="Vector"
        src="https://c.animaapp.com/m8zie5xoMjUXAh/img/vector-3.svg"
      />

      <img
        className="vector-3"
        alt="Vector"
        src="https://c.animaapp.com/m8zie5xoMjUXAh/img/vector-3.svg"
      />

      <img
        className="vector-4"
        alt="Vector"
        src="https://c.animaapp.com/m8zie5xoMjUXAh/img/vector-3.svg"
      />

      <img
        className="vector-5"
        alt="Vector"
        src="https://c.animaapp.com/m8zie5xoMjUXAh/img/vector.svg"
      />

      <p className="text-wrapper">Search By Job Title, Role</p>

      <img
        className="location"
        alt="Location"
        src="https://c.animaapp.com/m8zie5xoMjUXAh/img/location.png"
      />

      <img
        className="vector-6"
        alt="Vector"
        src="https://c.animaapp.com/m8zie5xoMjUXAh/img/vector-6.svg"
      />

      <div className="text-wrapper-2">Preferred Location</div>

      <div className="text-wrapper-3">Job type</div>

      <HiconLinearDown3 className="hicon-linear-down" />
      <HiconLinearDown3 className="hicon-linear-down-3" />
      <div className="text-wrapper-4">Salary Per Month</div>

      <div className="text-wrapper-5">₹50k - ₹80k</div>
    </div>
  );
};
