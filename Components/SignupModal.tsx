"use client";

import { useState } from "react";

type SignupModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SignupModal({
  isOpen,
  onClose,
}: SignupModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const trimmedEmail = email.trim();

  if (!trimmedEmail) return;

  setSubmitted(true);
};
  return (
    <div className="signup-overlay" onClick={onClose}>
      <div
        className="signup-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="signup-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {!submitted ? (
          <>
            <div className="signup-icon">A</div>

            <h2>Start automating your work</h2>

            <p>
              See how Automora can help your team
              eliminate repetitive work.
            </p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="email">
                Work email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button type="submit">
                Get started <span>→</span>
              </button>
            </form>

            <small>
              No credit card required
            </small>
          </>
        ) : (
          <div className="signup-success">
            <div className="signup-success-icon">✓</div>

            <h2>You're on the list.</h2>

            <p>
              We'll be in touch shortly with
              more information about Automora.
            </p>

            <button onClick={onClose}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}