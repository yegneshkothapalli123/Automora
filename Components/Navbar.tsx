"use client";

import { useState } from "react";
import SignupModal from "./SignupModal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <a href="/" className="logo">
            <span className="logo-mark">A</span>
            <span className="logo-text">Automora</span>
          </a>

          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#solutions">Solutions</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="nav-actions">
            <a href="#login" className="nav-login">
              Log in
            </a>

            <button
              className="nav-cta"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      <SignupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}