export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features-container">

        <div className="features-header">
          <span className="section-eyebrow">
            AUTOMATION, SIMPLIFIED
          </span>

          <h2>
            Connect your tools.
            <br />
            Automate the work between them.
          </h2>

          <p>
            Automora removes the manual handoffs between the tools
            your team relies on, so workflows keep moving without
            the busywork.
          </p>
        </div>

        <div className="feature-block">
          <div className="feature-content">
            <span className="feature-number">01</span>

            <h3>Connect your work</h3>

            <p>
              Connect the tools your team already uses and let
              information move automatically between them.
            </p>

            <div className="feature-flow">
              <span>Email</span>
              <b>→</b>
              <span>Automora</span>
              <b>→</b>
              <span>CRM</span>
              <b>→</b>
              <span>Slack</span>
            </div>
          </div>

          <div className="feature-visual">
               <img
    src="/connect.png"
    alt="connect"
    className="feature-visual"
  />
          </div>
        </div>

        <div className="feature-block feature-block-reverse">
          <div className="feature-visual">
            <img
    src="/automate.png"
    alt="automate"
    className="feature-visual"
  />
          </div>

          <div className="feature-content">
            <span className="feature-number">02</span>

            <h3>Automate the busywork</h3>

            <p>
              Turn repetitive tasks, updates, notifications, and
              follow-ups into automated workflows.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}