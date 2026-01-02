// src/components/contactpage/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone:'',
    city:''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We’ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' ,phone:'',city:''});
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        {/* Left: Contact Form */}
        <div className="contact-form-section">
          <h2>Get In Touch</h2>
          <p>We’d love to hear from you. Send us a message!</p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
             <div className="form-group">
              <input
                type="text"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
             <div className="form-group">
              <input
                type="text"
                name="city"
                placeholder="Your city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        {/* Right: Map + Info */}
        <div className="contact-info-section">
          <div className="map-container">
            {/* ✅ FIXED: Removed 'alt', fixed URL, clean iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121089.3084559055!2d73.74321588227122!3d18.481806975649572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaa056aefbd9%3A0x47c77988696a65ea!2sSuryaprabha%20Gardens%20Swimming%20Pool%2C%20Bibwewadi!5e0!3m2!1sen!2sin!4v1766640235305!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Akul Enterprises Location"
            ></iframe>
          </div>

          <div className="contact-details">
            <h3>Contact Information</h3>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>E3,15, Suryaprabha Garden, Bibwewadi, Pune 411037, Maharashtra, India</span>
            </div>
            <div className="info-item">
              <i className="fas fa-phone-alt"></i>
              <span>+91 9156194055</span>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <span>akulenterprisesindia@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;