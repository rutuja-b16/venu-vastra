
import React from "react";
import "./footer.css";
import logo from "/src/assets/images/logo/venuLogo.png";

function Footer() {
  return (
    <footer className="akul-footer">
      <div className="akul-footer-wrapper">
        {/* BRAND */}
        <div className="akul-footer-brand">
          <img src={logo} alt="VENUVASTRA Logo" />
          <h1>VENUVASTRA</h1>
        </div>

        {/* CONTENT */}
        <div className="akul-footer-content">
          {/* ADDRESS */}
          <div className="akul-footer-address">
            <h3>Address</h3>
            <p>
              E3,15, Suryaprabha Garden, Bibwewadi, Pune 411037, Maharashtra,
              India
            </p>

            <p>
              <span>Call:</span> +91 9156194055 ,+91 881719988 &nbsp; | &nbsp;
              <span>Website:</span> www.venuvastra.com
            </p>

            <p>
              <span>Email:</span> venuvastra@gmail.com
            </p>
          </div>

          {/* SOCIAL */}
          <div className="akul-footer-social">
            <span>Follow us:</span>
            <a
              href="https://www.instagram.com/kale5237?igsh=YzljYTk1ODg3Zg=="
              target="_blank"
            >
              <img
                src="https://img.icons8.com/fluency/48/instagram-new.png"
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/neha-kale-435a67367?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://www.facebook.com/share/p/1Fi6uoGneg/"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/color/48/facebook-new.png"
                alt="Facebook"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
