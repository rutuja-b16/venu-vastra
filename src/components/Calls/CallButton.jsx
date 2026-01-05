import React from "react";
import "./CallButton.css";
import callIcon from "../../assets/images/CallImage/calling.png";// phone icon

const CallButton = () => {
  const phoneNumber = "+919156194055"; // your number

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="call-float"
      aria-label="Call us"
    >
      <img src={callIcon} alt="Call" />
    </a>
  );
};

export default CallButton;
