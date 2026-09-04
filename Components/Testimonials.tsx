export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="section-eyebrow">
            WHAT TEAMS COULD SAY
          </span>

          <h2>Built to remove the work between tools.</h2>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-quote">
            “Automora takes the manual handoffs out of our
            everyday workflow.”
          </p>

          <div className="testimonial-person">
            <div className="testimonial-avatar">MC</div>

            <div>
              <strong>Maya Chen</strong>
              <span>Operations Lead · Acme</span>
            </div>
          </div>

          <small>Conceptual testimonial</small>
        </div>
      </div>
    </section>
  );
}