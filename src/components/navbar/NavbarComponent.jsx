// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./NavbarComponent.css";

// const NavbarComponent = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isProductOpen, setIsProductOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//     setIsProductOpen(false);
//   };

//   const toggleProducts = () => {
//     if (window.innerWidth <= 1024) {
//       setIsProductOpen((prev) => !prev);
//     }
//   };

//   const handleNavClick = (path) => {
//     navigate(path);
//     if (window.innerWidth <= 1024) {
//       setIsMenuOpen(false);
//       setIsProductOpen(false);
//     }
//   };

//   return (
//     <div className="navbar-container">
//       {/* ===== TOP BAR ===== */}
//       <div className="top-bar">
//         <p>Where Luxury Meets Nature !</p>
//         <div className="social-icons">
//          <a href="https://www.instagram.com/kale5237?igsh=YzljYTk1ODg3Zg==" target="_blank">
//          <img width="25" height="25" src="https://img.icons8.com/fluency/48/instagram-new.png" /></a>
//         <a  href="https://www.linkedin.com/in/neha-kale-435a67367?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app" target="_blank">
// 					 <img width="25" height="25" src="https://img.icons8.com/color/48/linkedin.png" /></a>
//       <a  href="https://www.facebook.com/share/p/1Fi6uoGneg/" target="_blank">
//       <img width="25" height="25" src="https://img.icons8.com/color/48/facebook-new.png" /></a> 
//         </div>
//       </div>

//       {/* ===== MAIN NAV ===== */}
//       <nav className="main-nav">
       
//         {/* LOGO */}
//         <div className="nav-brand">
//           <img
//             src="src/assets/images/logo/venuLogo.png"
//             alt="VENUVASTRA"
//             className="logo"
//           />
//           <span className="brand-text">VENUVASTRA</span>
//         </div>

//         {/* TOGGLE */}
//         <button className="menu-toggle" onClick={toggleMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>

//         {/* LINKS */}
//         <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
//           <li><Link to="/" onClick={() => handleNavClick("/")}>Home</Link></li>
//           <li><Link to="/about" onClick={() => handleNavClick("/about")}>About</Link></li>

//           <li className={`dropdown ${isProductOpen ? "open" : ""}`}>
//             <span className="dropdown-trigger" onClick={toggleProducts}>
//               Products
//             </span>
//             <ul className="dropdown-menu">
//               {[
//                 ["bedsheets", "Bedsheets"],
//                 ["towel", "Towel"],
//                 // ["hand-towel", "Hand Towel"],
//                 ["comforters", "Comforters"],
//                 ["duvet-covers", "Duvet Covers"],
//                 // ["bamboo-towels", "Bamboo Towels"],
//               ].map(([slug, label]) => (
//                 <li key={slug}>
//                   <Link to={`/products/${slug}`} onClick={() => handleNavClick(`/products/${slug}`)}>
//                     {label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </li>

//           <li><Link to="/blog" onClick={() => handleNavClick("/blog")}>Blog</Link></li>
//           <li><Link to="/contact" onClick={() => handleNavClick("/contact")}>Contact</Link></li>
//         </ul>

//         {/* CONTACT */}
//         <div className="nav-contact">
//           <div className="contact-item">
//             <i className="fas fa-phone-alt"></i>
//             <span>+91 9156194055</span><br />
//               <i className="fas fa-phone-alt"></i>
//             <span>+91 9881719988</span>
//           </div>
//           <div className="contact-item">
//              <i className="fas fa-envelope"></i>
//             <span>venuvastra@gmail.com</span>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavbarComponent;


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./NavbarComponent.css";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  const [categories, setCategories] = useState([]); // ✅ dynamic
  const navigate = useNavigate();

  const API_BASE = import.meta.env.VITE_API_BASE_URL;
  const domainName = import.meta.env.VITE_DOMAIN_NAME;

  /* ================= FETCH CATEGORIES ================= */
  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const res = await axios.get(`${API_BASE}/categories`, {
        params: { domainName },
      });
      setCategories(res.data?.data || []);
    } catch (err) {
      console.error("Navbar category error:", err);
    }
  };

  /* ================= HANDLERS ================= */

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsProductOpen(false);
  };

  const toggleProducts = () => {
    if (window.innerWidth <= 1024) {
      setIsProductOpen((prev) => !prev);
    }
  };

  const handleNavClick = (path) => {
    navigate(path);
    if (window.innerWidth <= 1024) {
      setIsMenuOpen(false);
      setIsProductOpen(false);
    }
  };

  /* ================= UI ================= */

  return (
    <div className="navbar-container">
      {/* ===== TOP BAR ===== */}
      <div className="top-bar">
        <p>Where Luxury Meets Nature !</p>
      </div>

      {/* ===== MAIN NAV ===== */}
      <nav className="main-nav">
        {/* LOGO */}
        <div className="nav-brand">
          <img
            src="src/assets/images/logo/venuLogo.png"
            alt="VENUVASTRA"
            className="logo"
          />
          <span className="brand-text">VENUVASTRA</span>
        </div>

        {/* TOGGLE */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* LINKS */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => handleNavClick("/")}>Home</Link>
          </li>

          <li>
            <Link to="/about" onClick={() => handleNavClick("/about")}>About</Link>
          </li>

          {/* ===== PRODUCTS DROPDOWN (DYNAMIC) ===== */}
          {/* <li className={`dropdown ${isProductOpen ? "open" : ""}`}>
            <span className="dropdown-trigger" onClick={toggleProducts}>
              Products
            </span>

            <ul className="dropdown-menu">
              {categories.map((cat) => (
                <li key={cat._id}>
                  <Link
                    to={`/products/${cat.slug}`}
                    onClick={() =>
                      handleNavClick(`/products/${cat.slug}`)
                    }
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li> */}

          {/* ===== PRODUCTS DROPDOWN (DYNAMIC) ===== */}
<li className={`dropdown ${isProductOpen ? "open" : ""}`}>
  <span className="dropdown-trigger" onClick={toggleProducts}>
    Products
  </span>

  <ul className="dropdown-menu">
    {categories.map((cat) => {
      // ✅ FIX: SAFE SLUG FALLBACK (ONLY CHANGE)
      const categorySlug =
        cat.slug ||
        cat.name?.toLowerCase().replace(/\s+/g, "-");

      return (
        <li key={cat._id}>
          <Link
            to={`/products/${categorySlug}`}
            onClick={() =>
              handleNavClick(`/products/${categorySlug}`)
            }
          >
            {cat.name}
          </Link>
        </li>
      );
    })}
  </ul>
</li>




          <li>
            <Link to="/blog" onClick={() => handleNavClick("/blog")}>Blog</Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => handleNavClick("/contact")}>Contact</Link>
          </li>
        </ul>

        {/* CONTACT */}
        <div className="nav-contact">
          <div className="contact-item">
            <span>+91 9156194055</span><br />
            <span>+91 9881719988</span>
          </div>
          <div className="contact-item">
            <span>venuvastra@gmail.com</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
