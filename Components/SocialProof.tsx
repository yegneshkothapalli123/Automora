export default function SocialProof() {
  const teams = [
    "Sales",
    "Operations",
    "Marketing",
    "Customer Support",
    "Finance",
  ];

  return (
    <section className="social-proof">
      <div className="social-proof-container">
        <p className="social-proof-heading">
          Built for teams that run on information
        </p>

        <div className="social-proof-marquee">
          <div className="social-proof-track">
            {[...teams, ...teams].map((team, index) => (
              <span className="social-proof-item" key={index}>
                {team}
                <span className="social-proof-dot">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}