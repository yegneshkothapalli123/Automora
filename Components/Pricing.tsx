export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      runs: "1,000",
      description: "For individuals starting with automation.",
    },
    {
      name: "Growth",
      price: "$49",
      runs: "10,000",
      description: "For teams automating everyday workflows.",
      popular: true,
    },
    {
      name: "Scale",
      price: "$99",
      runs: "50,000",
      description: "For teams running automation at scale.",
    },
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <span className="section-eyebrow">
            PAY FOR WHAT YOU AUTOMATE
          </span>

          <h2>Pricing that scales with your workflow.</h2>

          <p>
            Choose the automation volume you need and scale
            as your workflows grow.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              className={`pricing-card ${
                plan.popular ? "pricing-card-popular" : ""
              }`}
              key={plan.name}
            >
              {plan.popular && (
                <span className="pricing-popular">
                  MOST POPULAR
                </span>
              )}

              <h3>{plan.name}</h3>

              <p className="pricing-description">
                {plan.description}
              </p>

              <div className="pricing-price">
                <strong>{plan.price}</strong>
                <span>/month</span>
              </div>

              <div className="pricing-runs">
                <strong>{plan.runs}</strong>
                <span>automation runs / month</span>
              </div>

              <button className="pricing-button">
                Get started
              </button>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          Need more? Additional automation runs available at
          $0.01 per run.
        </p>
      </div>
    </section>
  );
}