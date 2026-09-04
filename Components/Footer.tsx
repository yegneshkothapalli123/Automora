"use client";

import { useState } from "react";

export default function Footer() {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="/" className="logo">
              <span className="logo-mark">A</span>
              <span className="logo-text">Automora</span>
            </a>
            <p>Automate the work between your tools.</p>
          </div>

          <div className="footer-links">
            <div>
              <span>Product</span>
              <a href="#features">Features</a>
              <a href="#solutions">Solutions</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </div>

            <div>
              <span>Company</span>
              <button onClick={() => setShowAbout(true)}>About Us</button>
              <button onClick={() => setShowContact(true)}>Contact</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Automora</span>
          <div>
            <button>Privacy</button>
            <button>Terms</button>
          </div>
        </div>
      </footer>

      {showAbout && (
        <div className="footer-modal-overlay" onClick={() => setShowAbout(false)}>
          <div className="footer-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="footer-modal-close"
              onClick={() => setShowAbout(false)}
            >
              ×
            </button>

            <span className="section-eyebrow">ABOUT AUTOMORA</span>
            <h2>Workflows that move themselves.</h2>
            <p>
              Automora is an AI-powered workflow automation platform designed
              to eliminate repetitive work between the tools teams use every
              day.
            </p>
            <p>
              By connecting existing tools and automating manual handoffs,
              Automora helps teams keep work moving without the busywork.
            </p>
          </div>
        </div>
      )}

      {showContact && (
        <div
          className="footer-modal-overlay"
          onClick={() => {
            setShowContact(false);
            setSubmitted(false);
          }}
        >
          <div className="footer-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="footer-modal-close"
              onClick={() => {
                setShowContact(false);
                setSubmitted(false);
              }}
            >
              ×
            </button>

            {!submitted ? (
              <>
                <span className="section-eyebrow">CONTACT US</span>
                <h2>Let's talk.</h2>
                <p>Have a question or want to learn more about Automora?</p>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <label>
                    Name
                    <input type="text" placeholder="Your name" required />
                  </label>

                  <label>
                    Work email
                    <input
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </label>

                  <label>
                    Message
                    <textarea
                      placeholder="Tell us how we can help..."
                      rows={4}
                      required
                    />
                  </label>

                  <button type="submit">Send message →</button>
                </form>
              </>
            ) : (
              <div className="contact-success">
                <div>✓</div>
                <h2>Message sent.</h2>
                <p>Thanks for reaching out. We'll get back to you shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}