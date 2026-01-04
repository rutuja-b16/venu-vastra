// import React from "react";
// import "./footer.css";
// import logo from "/src/assets/images/logo/venuLogo.png";

// function Footer() {
//   return (
//     <footer className="akul-footer">
//       <div className="akul-footer-wrapper">

//         {/* TOP ROW */}
//         <div className="footer-top">

//           {/* LEFT BRAND */}
//           <div className="footer-left">
//             <img src={logo} alt="VENUVASTRA Logo" className="footer-logo" />
//             <h1>VENUVASTRA</h1>
//           </div>

//           {/* RIGHT SOCIAL */}
//           <div className="footer-social-top">
//             <span>Follow us</span>
//             <div className="social-icons">
//               <a href="#"><img src="https://img.icons8.com/fluency/48/instagram-new.png" /></a>
//               <a href="#"><img src="https://img.icons8.com/color/48/linkedin.png" /></a>
//               <a href="#"><img src="https://img.icons8.com/color/48/facebook-new.png" /></a>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM ADDRESS (EXACT LIKE IMAGE) */}
//         <div className="footer-address-bottom">
//           <h3>Address</h3>

//           <p>
//             E3,15, Suryaprabha Garden, Bibwewadi, Pune 411037, Maharashtra, India
//           </p>

//           <p>
//             <span>Call:</span> +91 9156194055 ,+91 881719988
//             &nbsp;&nbsp;|&nbsp;&nbsp;
//             <span>Website:</span> www.venuvastra.com
//           </p>

//           <p>
//             <span>Email:</span> venuvastra@gmail.com
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import "./footer.css";
import logo from "/src/assets/images/logo/venuLogo.png";

function Footer() {
  return (
    <footer className="venu-footer">
      <div className="venu-footer-wrapper">
        {/* LEFT */}
        <div className="venu-footer-left">
          <div className="venu-footer-brand">
            <img src={logo} alt="VENUVASTRA Logo" />
            <h1>VENUVASTRA</h1>
          </div>
        </div>

        {/* RIGHT */}
        <div className="venu-footer-right">
          {/* FOLLOW US */}
          <div className="venu-footer-social">
            <span>Follow us</span>
            <a
              href="https://www.instagram.com/kale5237?igsh=YzljYTk1ODg3Zg=="
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://img.icons8.com/fluency/48/instagram-new.png" />
            </a>
            <a
            href="https://www.linkedin.com/in/neha-kale-435a67367?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://img.icons8.com/color/48/linkedin.png" />
            </a>
            <a
              href="https://www.facebook.com/share/p/1Fi6uoGneg/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://img.icons8.com/color/48/facebook-new.png" />
            </a>
          </div>

          {/* ADDRESS */}
          <div className="venu-footer-address">
            <h3>Address</h3>
            <p>
              E3,15, Suryaprabha Garden, Bibwewadi, Pune 411037, Maharashtra,
              India
            </p>
            <p>
              <span>Call:</span> +91 9156194055 , <br></br>+91 9881719988

            </p>
              
            <p>
              <span>Email:</span> venuvastra@gmail.com
              
            </p>
             <p>
              <span>websites: </span>www.venuvastra.com
              <br></br>wwww.akulenterprises.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
