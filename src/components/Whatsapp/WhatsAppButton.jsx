import React from "react";
import "./WhatsAppButton.css";
import whatsappIcon from "../../assets/images/whatsappImage/whatsapp1.png";
// you can change image path if needed

const WhatsAppButton = () => {
  const whatsappNumber = "919156194055"; // WhatsApp number
  const message = "Hello Venuvastra, I am interested in your products";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;

