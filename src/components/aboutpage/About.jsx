import React from "react";
import "./About.css";
import { useEffect } from "react";

// Image imports
import bg from "../../assets/images/AboutImages/bg.jpg";
import neha from "../../assets/images/AboutImages/neha.jpg";
import visionImg from "../../assets/images/AboutImages/vision.jpg";
import missionImg from "../../assets/images/AboutImages/mission.jpg";
import qualityImg from "../../assets/images/Footer/Hand.jpg";
import pankaj from "../../assets/images/AboutImages/pankaj.jpg";

function About() {
  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-show");
        }
      });
    },
    { threshold: 0.2 }
  );

  const animatedElements = document.querySelectorAll(
    ".fade-in, .fade-up, .slide-left, .slide-right, .zoom-in"
  );

  animatedElements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <div className="about-page">
      {/* HERO (same as reference top section) */}
      <section className="about-hero zoom-in">
        <img src={bg} alt="About Us" />
        <div className="about-hero-overlay">
          <h1>About Us</h1>
          <p>
            A trusted name committed to quality, sustainability, and excellence.
          </p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="about-overview fade-up">
        <div className="overview-text slide-left">
          <h2>Neha Kale</h2>
          <p>
            "My journey as an eximpreneur began with a simple belief: to
            showcase the immense wealth of India’s culture on the global stage
            and make it accessible to the world’s largest markets. My guiding
            values—trust, reliability, and authenticity—have remained unwavering
            companions." Every product we export carries not just a piece of
            India’s heritage but also my personal commitment to excellence. This
            dedication to quality and authenticity is at the heart of everything
            I do and continues to drive our journey forward.
          </p>
        </div>

        <div className="overview-image slide-right hover-zoom">
          <img src={neha} alt="founder" />
        </div>
      </section>

      {/* OUR STORY */}
<section className="our-story-section fade-up">
  <h2 className="our-story-title">Our Story</h2>

  <p className="our-story-text">
    {/* Established in 1970, */}
     Venu-vastra is an Indian manufacturer and
    exporter of premium high-quality towels. We craft an extensive range of
    products including cotton towels, bathrobes, bedsheets, Duvet Covers, Hand towel, kitchen apparel, children’s
    bibs, gloves,poncho towels,bath towels,Comforters personalized embroidered towels,
    woven-logo towels, bleach-proof towels, towel bouquets, and gift packs.
  </p>

  <p className="our-story-text">
    Our towels are produced using 100% bamboo, combed and carded fibers,
    zero-twist technology, and sustainable blends including modal, tencel,
    bamboo, and cotton-polyester. Every product reflects our commitment to
    comfort, durability, and responsible manufacturing.
  </p>
</section>

{/* why our terry towel */}
    <section className="towel-features-section fade-in">
  <h2 className="features-title">Why Our Terry Towels Stand Out</h2>
  <p className="features-subtitle">
    Crafted for comfort, durability, and luxury – trusted by hospitality,
    wellness, and retail industries worldwide.
  </p>

  <div className="features-grid">
    <div className="feature-card zoom-in">
      <div className="feature-icon">🌱</div>
      <h3>Premium Cotton</h3>
      <p>
        Made from high-quality cotton for unmatched softness and long-lasting
        absorbency.
      </p>
    </div>

    <div className="feature-card zoom-in">
      <div className="feature-icon">💧</div>
      <h3>Superior Absorbency</h3>
      <p>
        Engineered with dense loops for maximum water absorption and quick
        drying.
      </p>
    </div>

    <div className="feature-card zoom-in">
      <div className="feature-icon">🏭</div>
      <h3>Versatile Range</h3>
      <p>
        Available in bath, hand, and face towels to meet diverse industry
        needs.
      </p>
    </div>

    <div className="feature-card zoom-in">
      <div className="feature-icon">🏨</div>
      <h3>Export Quality</h3>
      <p>
        Trusted by hotels, spas, and retailers with export-grade finishing and
        packaging.
      </p>
    </div>
  </div>
</section>

{/* MEET THE TEAM */}
<section className="team-section fade-in">
  <h2 className="team-title">Meet the Team</h2>
  <div className="team-container"> {/* ← Only change: rename class to avoid grid */}  
    <div className="team-card zoom-in">
      <img src={neha} alt="neha kale" />
      <div className="team-info">
        <h3>Neha Kale</h3>
        <span>Founder</span>
      </div>
    </div>
    <div className="team-card zoom-in">
      <img src={pankaj} alt="pankaj deshmukh" />
      <div className="team-info">
        <h3>Pankaj Deshmukh</h3>
        <span>Director</span>
      </div>
    </div>
  </div>
</section>

      {/* VISION / MISSION / QUALITY (same grid style as reference) */}
      <section className="about-pillars">
        <div className="pillar-card fade-up hover-card">
          <img src={visionImg} alt="Vision" />
          <h3>Our Vision</h3>
          <p>
            To build a globally respected brand known for integrity,
            sustainability, and superior craftsmanship.
          </p>
        </div>

        <div className="pillar-card fade-up hover-card">
          <img src={missionImg} alt="Mission" />
          <h3>Our Mission</h3>
          <p>
            To consistently deliver premium products while maintaining ethical
            practices and customer satisfaction.
          </p>
        </div>

        <div className="pillar-card fade-up hover-card">
          <img src={qualityImg} alt="Quality" />
          <h3>Our Commitment to Quality</h3>
          <p>
            Every product undergoes strict quality checks to ensure durability,
            performance, and trust.
          </p>
        </div>
      </section>

      {/* CLOSING SECTION (same feel as reference bottom section) */}
      <section className="about-closing fade-in">
        <h2>Driven by Trust. Defined by Quality.</h2>
        <p>
          We continue to grow with a strong foundation built on values,
          responsibility, and innovation.
        </p>
      </section>
    </div>
  );
}

export default About;
