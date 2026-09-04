export default function FAQ() {
  const faqs = [
    {
      question: "What is Automora?",
      answer:
        "Automora connects the tools your team already uses and automates the repetitive work between them.",
    },
    {
      question: "How does the automation work?",
      answer:
        "Create a workflow by choosing a trigger and the actions Automora should perform. Once active, Automora handles those steps automatically.",
    },
    {
      question: "What tools can I connect?",
      answer:
        "Automora is designed to connect the business tools your team relies on, including email, CRM, communication, and productivity platforms.",
    },
    {
      question: "How is usage calculated?",
      answer:
        "Usage is based on automation runs. Each time an active workflow completes an automated run, it counts toward your monthly usage.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes. You can cancel your subscription at any time and continue using your plan until the end of your billing period.",
    },
  ];

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <span className="section-eyebrow">
            FREQUENTLY ASKED
          </span>

          <h2>Questions, answered.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>
                {faq.question}
                <span>+</span>
              </summary>

              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}