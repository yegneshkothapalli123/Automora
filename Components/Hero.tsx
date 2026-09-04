"use client";

import { useState } from "react";
import LightRays from "./LightRays";
import SignupModal from "./SignupModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="hero">
      <LightRays
        raysOrigin="top-center"
        raysColor="#A78BFA"
        raysSpeed={0.6}
        lightSpread={1.2}
        rayLength={2}
        fadeDistance={1}
        followMouse
        mouseInfluence={0.08}
      />

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            AI-powered workflow automation
          </div>

          <h1 className="hero-heading">
           Turn repetitive work into automated workflows
          </h1>

          <p className="hero-subheading">
            Automora connects your tools and handles the busywork between them, so your team can spend more time on work that matters
          </p>

          <div className="hero-actions">
            <button
              className="hero-primary-btn"
              onClick={() => setIsModalOpen(true)}
            >
              Automate a Workflow <span>→</span>
            </button>

            <a href="#demo" className="hero-secondary-btn">
              See how it works
            </a>
          </div>

          <p className="hero-note">
            No credit card required · Get started in minutes
          </p>
        </div>

        <div className="hero-visual">
          <div className="hero-image-placeholder">
            <img
    src="/herodash.png"
    alt="herodash"
    className="hero-workflow-image"
  />
          </div>
        </div>
      </div>

      <SignupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}