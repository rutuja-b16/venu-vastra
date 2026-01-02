// import React from 'react';
// import './footer.css';
// import bath from "/src/assets/images/footer/Bath.jpg"
// import hand from "/src/assets/images/footer/Hand.jpg"
// import bedsheet from "/src/assets/images/footer/bedsheet.jpg"
// import bambootowel from "../../assets/images/blogimages/bambootowel.jpg"
// import duvet from "../../assets/images/blogimages/duvet.jpg";
// import comforters from "../../assets/images/blogimages/comforters.jpg";
// function footer() {
//   return (
//     <footer className="footer-section">
//       <div className="footer-content">
//         {/* Left Column */}
//         <div className="footer-column left">
//           <img src="src/assets/images/logo/venuLogo.png" alt="venu-vastra" className="footer-logo" />
//           <p className="footer-tagline">We’re Providing Everyday Fresh and Quality Products.</p>
//           <div className="social-icons">
//             <a href="#" aria-label="Instagram"> <img
//               width="25"
//               height="25"
//               src="https://img.icons8.com/fluency/48/instagram-new.png"
//               alt="instagram-new"
//             /></a>
//             <a href="#" aria-label="LinkedIn"> <img
//               width="25"
//               height="25"
//               src="https://img.icons8.com/color/48/linkedin.png"
//               alt="linkedin"
//             /></a>
//             <a href="#" aria-label="Facebook"><img
//               width="25"
//               height="25"
//               src="https://img.icons8.com/color/48/facebook-new.png"
//               alt="facebook-new"
//             /></a>
//           </div>
//         </div>

//         {/* Middle Columns */}
//         <div className="footer-column middle">
//           <div className="footer-section-title">Explore</div>
//           <ul className="footer-links">
//             <li><a href="/">Home</a></li>
//             <li><a href="/about">About</a></li>
//             <li><a href="/product">Product</a></li>
//             <li><a href="/blog">Blog</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </div>

//         <div className="footer-column middle">
//           <div className="footer-section-title">Contact</div>
//           <div className="contact-info">
//             <p>E3,15, Suryaprabha Garden, Bibwewadi, Pune 411037, Maharashtra, India</p>
//             <p>+91 9156194055</p>
//             <p>akulenterprisesindia@gmail.com</p>
//           </div>
//         </div>

//         {/* Right Column - Gallery */}
//         <div className="footer-column right">
//           <div className="footer-section-title">Gallery</div>
//           <div className="gallery-grid">
//             <img src={bath} alt="Bath towel" className="gallery-image" />
//             <img src={hand} alt="Hand towel" className="gallery-image" />
//                <img src={comforters} alt="comforters Covers" className="gallery-image" />
//             <img src={bedsheet} alt="Bedsheets" className="gallery-image" />
//             <img src={bambootowel} alt="Comforters" className="gallery-image" />
//             <img src={duvet} alt="Duvet Covers" className="gallery-image" />

//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="footer-bottom">
//         <p>© Copyright 2025 by DArch Tech</p>
//       </div>
//     </footer>
//   );
// }

// export default footer;

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
