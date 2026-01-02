import React, { useEffect } from "react";
import "./Home.css";
// import heroVideo from "/src/assets/images/HomeImages/hero-video.mp4";
import hand from "../../assets/images/Footer/Hand.jpg";
import bedsheet from "../../assets/images/Footer/bedsheet.jpg";
import comforters from "../../assets/images/blogimages/comforters.jpg";
import bambootowel from "../../assets/images/blogimages/bambootowel.jpg";
import duvet from "../../assets/images/blogimages/duvet.jpg";
import bath from "../../assets/images/Footer/Bath.jpg";
import bambooterrytowel from "../../assets/images/blogimages/bambooterrytowel.jpg";
import terrytowel from "../../assets/images/blogimages/terrytowel.jpg";
import bg from "../../assets/images/HomeImages/back.jpg";
function Home() {
  useEffect(() => {
    const animateCards = () => {
      const cards = document.querySelectorAll(".product-card-item");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add("animate-in");
        }
      });
    };

    // Run on load and scroll
    window.addEventListener("load", animateCards);
    window.addEventListener("scroll", animateCards);

    // Cleanup
    return () => {
      window.removeEventListener("load", animateCards);
      window.removeEventListener("scroll", animateCards);
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        {/* <video autoPlay muted loop playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video> */}
          <img src={bg}alt="" style={{height:"70%" , width:"100%" , objectFit:"cover" , position:"cover" ,}}/>
        {/* ===== HERO TEXT CARD (on video) ===== */}
        <div className="hero-card reveal">
          <div className="hero-card-content">
            <h2 className="hero-card-title">Where Luxury Meets Nature</h2>
            <p className="hero-card-subtitle">
              Experience premium quality textiles inspired by nature’s finest.
            </p>
           <a href="/product"><button className="hero-card-btn">Our Products</button></a> 
          </div>
        </div>
      </div>

      {/* Auto-Scrolling Gallery (Replaces product-intro-section) */}
      <section className="section auto-scroll-gallery reveal">
        <h2>Get Explorer Our Products</h2>
        <div className="gallery-container">
          <div className="gallery-slider">
            <div className="gallery-item">
              <img src={hand} alt="hand Terry Towels" />
              <h3> Hand Terry Towels</h3>
              <p>Enhances hygiene, comfort, and a premium brand impression. </p>
            </div>
            <div className="gallery-item">
              <img src={comforters} alt="comforter" />
              <h3>Comforters</h3>
              <p>Warmth, comfort, and luxury—crafted to elevate every sleep experience. </p>
            </div>
            <div className="gallery-item">
              <img src={bedsheet} alt="bedsheet" />
              <h3>Bedsheet</h3>
              <p>Venuvastra Bedsheets: Everyday luxury, comfort, and timeless elegance woven perfectly.</p>
            </div>
            <div className="gallery-item">
              <img src={bambootowel} alt="bambootowel" />
              <h3>Bamboo Towel</h3>
              <p>Venuvastra Bamboo Towel: Luxury, performance, and sustainability in perfect balance.</p>
            </div>
            <div className="gallery-item">
              <img src={bath} alt="bath towel" />
              <h3>Bath Towel</h3>
              <p>Venuvastra Cotton Towels: Soft, sustainable luxury for conscious living.</p>
            </div>
            <div className="gallery-item">
              <img src={duvet} alt="Duvet covers" />
              <h3>Duvet Covers</h3>
              <p>Premium comfort, durability, and elegance for homes and hospitality.</p>
            </div>
            {/* <div className="gallery-item">
              <img src={comforters} alt="comforters" />
              <h3>Comforters</h3>
              <p></p>
            </div> */}
            <div className="gallery-item">
              <img src={bambooterrytowel} alt="Onion" />
              <h3>Bamboo Terry Towel</h3>
              <p>Hotel-grade comfort, eco-friendly softness, and export-quality durability.. </p>
            </div>
            <div className="gallery-item">
              <img src={terrytowel} alt="Spices" />
              <h3>Terry Towel</h3>
              <p>Elegant comfort, sustainable luxury, and high-performance everyday use.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Product Cards Section */}
      <div className="product-cards-section">
        <div className="cards-container">
          {/* Card 1: Bath Towels */}
          <div className="product-card-item reveal">
            <div className="card-icon">
              <img
                width="100"
                height="100"
                src="https://img.icons8.com/stickers/100/towel.png"
                alt="towel"
              />
            </div>
            <h3>Bath Towels</h3>
            <p>
              Luxuriously soft and absorbent, perfect for your post-shower
              experience.
            </p>
          <a href="blog"> <button className="learn-more-btn">Learn More</button></a> 
          </div>

          {/* Card 2: Bed Sheets */}
          <div className="product-card-item reveal">
            <div className="card-icon">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/blankie.png"
                alt="blankie"
              />
            </div>
            <h3>Bed Sheets</h3>
            <p>Compact and soft, ideal for quick drying and daily use.</p>
          <a href="blog"> <button className="learn-more-btn">Learn More</button></a> 
          </div>

          {/* Card 3: Bamboo Towels */}
          <div className="product-card-item reveal">
            <div className="card-icon">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/external-filled-outline-berkahicon/64/external-Spa-apartment-filled-outline-berkahicon.png"
                alt="spa"
              />
            </div>
            <h3>Bamboo Towels</h3>
            <p>
              Naturally antibacterial & eco-friendly. Softness that hugs your
              skin like nature intended.
            </p>
           <a href="blog"> <button className="learn-more-btn">Learn More</button></a>
          </div>

          {/* Card 4: Hand Towels */}
          <div className="product-card-item reveal">
            <div className="card-icon">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/external-victoruler-linear-colour-victoruler/64/external-wipe-wash-your-hands-victoruler-linear-colour-victoruler.png"
                alt="hand-towel"
              />
            </div>
            <h3>Hand Towels</h3>
            <p>
              Perfectly sized for everyday use — gentle on hands, luxurious in
              feel.
            </p>
            <a href="blog"><button className="learn-more-btn">Learn More</button></a>
          </div>

          {/* Card 5: Comforters */}
          <div className="product-card-item reveal">
            <div className="card-icon">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-comforter-comfort-flaticons-flat-flat-icons-2.png"
                alt="comforter"
              />
            </div>
            <h3>Comforters</h3>
            <p>
              Plush, breathable, and designed for cozy nights. Wraps you in
              cloud-like comfort.
            </p>
            <a href="blog"><button className="learn-more-btn">Learn More</button></a>
          </div>

          {/* Card 6: Duvet Covers */}
          <div className="product-card-item reveal">
            <div className="card-icon">
              <img
                width="100"
                height="100"
                src="https://img.icons8.com/stickers/100/bed.png"
                alt="bed"
              />
            </div>
            <h3>Duvet Covers</h3>
            <p>
              Elegant, easy-care covers that transform your bed into a sanctuary
              of style and comfort.
            </p>
           <a href="blog"><button className="learn-more-btn">Learn More</button></a> 
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section reveal">
        <div className="why-choose-section-inner">
          <div className="left-panel-wrapper">
            <div className="left-panel">
              <h2 className="section-title">Why Choose VENUVASTRA?</h2>
              <p className="section-subtitle">
                Three advantages that make us your trusted sourcing partner
                across global markets.
              </p>
              <div className="divider"></div>
            </div>
          </div>

          <div className="right-cards">
            <div className="advantage-card reveal">
              <div className="icon-box">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="card-content">
                <h3>Premium Quality, Verified at Source</h3>
                <p>
                  Lot-wise checks for grade, moisture, color & GSM — only vetted
                  farms and mills pass our standards.
                </p>
              </div>
            </div>

            <div className="advantage-card reveal">
              <div className="icon-box">
                <i className="fas fa-box"></i>
              </div>
              <div className="card-content">
                <h3>Custom Packaging & Export-Ready Grading</h3>
                <p>
                  Food-safe materials, private-label options, and consistent
                  grading to protect shelf life and branding.
                </p>
              </div>
            </div>

            <div className="advantage-card reveal">
              <div className="icon-box">
                <i className="fas fa-truck"></i>
              </div>
              <div className="card-content">
                <h3>Competitive Pricing with Assured Supply Chain</h3>
                <p>
                  Optimized procurement and reliable lanes keep costs sharp and
                  dispatches on time — week after week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
