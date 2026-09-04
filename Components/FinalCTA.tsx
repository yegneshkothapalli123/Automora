"use client";

import { useState } from "react";
import SignupModal from "./SignupModal";

export default function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="final-cta">
        <div className="final-cta-container">
          <span className="section-eyebrow">READY TO AUTOMATE?</span>

          <h2>Stop connecting the dots manually.</h2>

          <p>
            Let Automora handle the work between your tools.
          </p>

          <button
            className="final-cta-button"
            onClick={() => setIsModalOpen(true)}
          >
            Get started <span>→</span>
          </button>

          <small>No credit card required · Setup in minutes</small>
        </div>
      </section>

      <SignupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}