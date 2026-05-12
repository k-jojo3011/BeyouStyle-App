import React, { useState } from "react";

import contactHero from "../assets/images/BagsCon.jpg"; // replace with your actual image file name

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [subscriberEmail, setSubscriberEmail] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted!");
  };

  const handleSubscribe = () => {
    if (!subscriberEmail) return alert("Please enter your email");
    alert(`Subscribed successfully: ${subscriberEmail}`);
    setSubscriberEmail("");
  };

  return (
    <div style={styles.page}>
      {/* HERO SECTION */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>Contact</h1>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section style={styles.contactSection}>
        <h2 style={styles.mainHeading}>
          Need assistance? Contact us using one of the options below our team is
          always here to help!
        </h2>

        <div style={styles.contactGrid}>
          {/* LEFT FORM */}
          <div style={styles.formWrapper}>
            <h3 style={styles.sectionTitle}>Email us</h3>
            <p style={styles.sectionText}>
              Send us an email, and we'll respond within 48 hours
            </p>

            <form onSubmit={handleSubmit}>
              <div style={styles.row}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.input}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email us"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

              <input
                type="text"
                name="phone"
                placeholder="Contact number"
                value={formData.phone}
                onChange={handleChange}
                style={styles.fullInput}
              />

              <textarea
                name="message"
                placeholder="What's your message?"
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
              />

              <button type="submit" style={styles.submitBtn}>
                Submit Contact
              </button>
            </form>
          </div>

          {/* RIGHT INFO */}
          <div style={styles.infoWrapper}>
            <h3 style={styles.sectionTitle}>Fashion Inquiries</h3>

            <div style={styles.infoBlock}>
              <p style={styles.label}>Emergency helpline</p>
              <h4 style={styles.infoText}>+254 700 000000</h4>
            </div>

            <div style={styles.infoBlock}>
              <p style={styles.label}>Contactable hours</p>
              <h4 style={styles.infoText}>Mon-Sun: 24 Hours</h4>
            </div>

            <div style={styles.infoBlock}>
              <p style={styles.label}>Require information about fashion</p>
              <h4 style={styles.infoText}>support@beyoustyle.com</h4>
            </div>

            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.168423986227!2d36.8219!3d-1.2921"
              style={styles.map}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE BANNER */}
      <section style={styles.subscribeSection}>
        <div style={styles.subscribeOverlay}>
          <div style={styles.subscribeContent}>
            <h2 style={styles.subscribeTitle}>Unlock 15% Off</h2>

            <p style={styles.subscribeText}>
              Sign up to our emails and get 15% off your first order.
            </p>

            <div style={styles.subscribeRow}>
              <input
                type="email"
                placeholder="Enter email here"
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                style={styles.subscribeInput}
              />

              <button onClick={handleSubscribe} style={styles.subscribeBtn}>
                Submit
              </button>
            </div>

            <p style={styles.subscribeSmallText}>
              Find your perfect bag, discover elegant scarves, explore our latest arrivals, 
              and shop timeless accessories crafted to elevate your everyday style.
             
             
      
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#f8f5ef",
    color: "#111",
  },
  
  hero: {
  height: "70vh",
  backgroundImage: `url(${contactHero})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
},
  heroOverlay: {
    backgroundColor: "rgba(0,0,0,0.45)",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  heroTitle: {
    color: "#D4AF37",
    fontSize: "72px",
    fontWeight: "700",
  },

  contactSection: {
    padding: "80px 60px",
  },

  mainHeading: {
    fontSize: "20px",
    maxWidth: "900px",
    marginBottom: "60px",
    lineHeight: "1.4",
  },

  contactGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "50px",
  },

  formWrapper: {
    borderRight: "1px solid #d4af37",
    paddingRight: "40px",
  },

  sectionTitle: {
    fontSize: "28px",
    marginBottom: "10px",
    color: "#D4AF37",
  },

  sectionText: {
    marginBottom: "30px",
    color: "#444",
  },

  row: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },

  input: {
    flex: 1,
    padding: "14px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },

  fullInput: {
    width: "100%",
    padding: "14px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },

  textarea: {
    width: "100%",
    height: "180px",
    padding: "14px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    marginBottom: "20px",
  },

  submitBtn: {
    backgroundColor: "#D4AF37",
    color: "#000",
    padding: "14px 28px",
    border: "none",
    borderRadius: "30px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  infoWrapper: {
    paddingLeft: "20px",
  },

  infoBlock: {
    marginBottom: "30px",
  },

  label: {
    color: "#777",
    marginBottom: "8px",
  },

  infoText: {
    fontSize: "20px",
    fontWeight: "600",
  },

  map: {
    width: "100%",
    height: "250px",
    border: "none",
    borderRadius: "10px",
  },

  subscribeSection: {
    margin: "80px 40px",
    height: "420px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "18px",
    overflow: "hidden",
  },

  subscribeOverlay: {
    backgroundColor: "rgba(0,0,0,0.55)",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "60px",
  },

  subscribeContent: {
    maxWidth: "500px",
    color: "#fff",
  },

  subscribeTitle: {
    fontSize: "52px",
    color: "#D4AF37",
  },

  subscribeText: {
    margin: "20px 0",
    lineHeight: "1.8",
  },

  subscribeRow: {
    display: "flex",
    marginBottom: "20px",
  },

  subscribeInput: {
    flex: 1,
    padding: "14px",
    border: "none",
    borderRadius: "30px 0 0 30px",
  },

  subscribeBtn: {
    backgroundColor: "#D4AF37",
    border: "none",
    padding: "14px 24px",
    borderRadius: "0 30px 30px 0",
    fontWeight: "bold",
  },

  subscribeSmallText: {
    color: "#ddd",
    lineHeight: "1.8",
  },

  footer: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "80px 50px",
  },

  footerTop: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "30px",
    marginBottom: "60px",
  },

  logo: {
    color: "#D4AF37",
    fontSize: "36px",
  },

  footerHeading: {
    color: "#D4AF37",
    marginBottom: "15px",
  },

  footerText: {
    color: "#ccc",
    lineHeight: "2",
  },

  newsletter: {
    borderTop: "1px solid rgba(212,175,55,0.3)",
    paddingTop: "40px",
  },

  newsletterTitle: {
    color: "#D4AF37",
    fontSize: "32px",
  },

  newsletterRow: {
    display: "flex",
    maxWidth: "500px",
    marginTop: "20px",
  },

  newsletterInput: {
    flex: 1,
    padding: "14px",
    border: "1px solid #D4AF37",
    backgroundColor: "transparent",
    color: "#fff",
    borderRadius: "30px 0 0 30px",
  },

  newsletterBtn: {
    backgroundColor: "#D4AF37",
    border: "none",
    padding: "14px 24px",
    borderRadius: "0 30px 30px 0",
    fontWeight: "bold",
  },
};

export default Contact;