import React, { useEffect } from "react";
import "./Blog.css";

/* HERO IMAGE */
import bambooHero from "../../assets/images/blogimages/bamboo .jpg";

/* EXISTING IMAGES */
import hand from "../../assets/images/Footer/Hand.jpg";
import bambootowel from "../../assets/images/blogimages/bambootowel.jpg";
import comforters from "../../assets/images/blogimages/comforters.jpg";
import bath from "../../assets/images/Footer/bath.jpg";
import bedsheet from "../../assets/images/Footer/bedsheet.jpg";
import duvet from "../../assets/images/blogimages/duvet.jpg";
import bambooterrrytowel from "../../assets/images/blogimages/Bambooterrytowel.jpg";
import terrytowel from "../../assets/images/blogimages/terrytowel.jpg";

const sections = [
  {
    title: "Hand Towels",
    text: `Hand towels may seem like a small textile product, but they play a major role in hygiene, 
    comfort, and brand impression. From homes and hotels to hospitals, offices, and international
     hospitality projects, hand towels are used multiple times every day.At VenuVasta, a trusted brand
      by AKUL ENTERPRISES, we manufacture and supply premium-quality hand towels designed for high absorbency, 
      durability, softness, and professional use in both Indian and export markets.Hand towels help:
• Maintain proper hand hygiene
• Reduce the spread of germs
• Enhance bathroom aesthetics
• Improve guest experience in hotels
• Reflect cleanliness standards in commercial spaces

In hospitality and healthcare sectors, hand towel quality directly impacts brand perception. `,
    img: hand,
    reverse: false,
  },
  {
    title: "Bamboo Towels",
    text: `The Venuvastra Bamboo Towel is designed to deliver a perfect balance of luxury,
     performance, and sustainability. Made from premium bamboo fibers, it offers an exceptionally 
     soft and smooth touch that feels gentle on the skin, making it ideal for everyday use and suitable
      for sensitive skin types. The naturally high absorbency of bamboo allows the towel to soak up moisture 
      efficiently while drying faster than conventional cotton towels, helping to maintain freshness and hygiene.`,
    img: bambootowel,
    reverse: true,
  },
  {
    title: "comforters",
    text: `Comforters: The Perfect Blend of Warmth, Comfort & Luxury

By VenuVasta – A Brand of AKUL ENTERPRISES

A comforter is more than just bedding—it plays a crucial role in providing warmth, enhancing sleep quality, 
and adding elegance to any bedroom. At VenuVasta, we manufacture and
 supply premium comforters designed to meet the needs of homes, hotels, resorts, hospitals, and export markets.`,
    img: comforters,
    reverse: false,
  },
  {
    title: "100% Cotton Bath Towels",
    text: `Experience refined comfort and sustainable luxury with 100% Cotton Bath Towels by
     Venuvastra, thoughtfully crafted for those who value softness, performance, and eco-conscious living.
     Naturally more absorbent than conventional cotton, Venuvastra bamboo towels efficiently soak up moisture while remaining 
     lightweight and quick-drying, helping maintain freshness and hygiene after every use.
      The inherent antibacterial and odor-resistant propertiesof bamboo keep the towels 
      cleaner for longer, making them a perfect choice for homes, hotels, spas, and wellness spaces.`,
    img: bath,
    reverse: true,
  },
  {
    title: "Bedsheet",
    text: `Premium Bedsheets by Venuvastra — Comfort Woven to Perfection
Experience everyday luxury with Venuvastra Bedsheets, thoughtfully crafted to deliver exceptional comfort, 
durability, and timeless elegance. Made using high-quality fabric and fine weaving techniques, our bedsheets offer a smooth,
soft touch that enhances your sleeping experience night after night.Designed to be breathable and skin-friendly, 
 Venuvastra bedsheets allow proper air circulation, helping regulate body temperature for a comfortable and restful sleep in all 
 seasons. The fabric feels gentle on the skin, making it suitable for daily use and ideal for families, hotels, and premium hospitality spaces.`,
    img: bedsheet,
    reverse: false,
  },
  {
    title: "Duvet Covers",
    text: `Duvet Cover – Comfort,
Protection & Style by Venuvastra

What is a Duvet Cover?

A duvet cover is a protective fabric cover designed to encase a duvet or comforter.
 It works like a pillowcase, keeping the duvet clean while enhancing the overall look of the bed.
  At Venuvastra, our duvet covers combine premium fabrics, 
refined weaving, and long-lasting comfort, making them ideal for homes, hotels, and hospitality projects.`,
    img: duvet,
    reverse: true,
  },

  {
    title: "Bamboo Terry Towels",
    text: `Our Comfort & Eco-Friendly Bamboo Bath Terry Towel is
      specially developed to meet hotel and export-quality standards.
      Manufactured using premium bamboo terry yarn, it delivers exceptional 
      softness, high absorbency, and quick drying performance.Bamboo’s
      natural antibacterial and odor-resistant properties ensure superior
      hygiene, making it ideal for hotels, resorts, spas, wellness centers, 
      and premium hospitality projects. The towel maintains softness and 
      color even after repeated industrial washing.
      Eco-conscious production makes it a sustainable choice for global markets.`,
    img: bambooterrrytowel,
    reverse: false,
  },
  {
    title: "Non-Terry Towels",
    text: `✓ Luxury Branding Tone

Indulge in refined comfort with our Bamboo Non-Terry Bath Towel, crafted for those who value elegance, 
sustainability, and performance. Its silky-smooth texture, lightweight feel, and superior absorbency create a 
spa-like experience while remaining gentle on the skin. Designed for modern luxury living,
 this towel blends eco-conscious craftsmanship with timeless sophistication.`,
    img: terrytowel,
    reverse: true,
  },
];

const Blog = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".blog-section, .blog-hero")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll(".bamboo-card")
      .forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="blog-page">
      {/* ===== HERO SECTION ===== */}
      <section
        className="blog-hero"
        style={{ backgroundImage: `url(${bambooHero})` }}
      >
        <div className="blog-hero-card">
          <div className="hero-icon">🎋</div>
          <h1>BAMBOO TOWELS</h1>
          <p>
            In the current era, where environmental consciousness takes center
            stage, the demand for sustainable and eco-friendly products is on
            the rise. Bamboo towels represent innovation, sustainability, and
            premium quality — beyond the ordinary.
          </p>
        </div>
      </section>

      {/* ===== EXISTING BLOG SECTIONS ===== */}
      {sections.map((item, index) => (
        <section
          key={index}
          className={`blog-section ${item.reverse ? "reverse" : ""}`}
        >
          <div className="blog-content">
            <div className="blog-text">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>

            <div className="blog-image">
              <img src={item.img} alt={item.title} />
            </div>
          </div>
        </section>
      ))}
      {/* ================= WHY BAMBOO SECTION ================= */}
      <section className="why-bamboo-section">
        <h2 className="why-bamboo-title">WHY BAMBOO?</h2>

        <div className="why-bamboo-grid">
          {[
            {
              icon: "🛡️",
              title: "Anti-bacterial",
              text: "Naturally inhibits bacteria growth",
            },
            {
              icon: "💧",
              title: "Highly Absorbent",
              text: "Absorbs more moisture than cotton",
            },
            {
              icon: "🔥",
              title: "Fast Drying",
              text: "Dries quickly, prevents odor",
            },
            {
              icon: "🌿",
              title: "Eco Friendly",
              text: "Sustainable & renewable crop",
            },
            {
              icon: "🪶",
              title: "Ultra Soft",
              text: "Gentle on sensitive skin",
            },
            {
              icon: "🌬️",
              title: "Breathable",
              text: "Allows airflow naturally",
            },
            {
              icon: "☀️",
              title: "UV Protection",
              text: "Protects skin from UV rays",
            },
            {
              icon: "🧘",
              title: "Hypoallergenic",
              text: "Safe for allergy-prone skin",
            },
            {
              icon: "❄️",
              title: "Thermoregulation",
              text: "Keeps you cool in summer & warm in winter",
            },
            {
              icon: "🚫",
              title: "No Pesticides",
              text: "Grown without chemicals",
            },
            { icon: "⚡", title: "Antistatic", text: "Reduces static buildup" },
            {
              icon: "🌍",
              title: "Low Carbon Footprint",
              text: "Environmentally responsible",
            },
          ].map((item, index) => (
            <div className="bamboo-card" key={index}>
              <div className="bamboo-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
