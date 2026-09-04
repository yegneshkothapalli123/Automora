export default function ProblemSolution() {
  return (
    <section className="problem-solution" id="solutions">
      <div className="problem-solution-container">
        <div className="problem-solution-header">
          <span className="section-eyebrow">
            THE COST OF DISCONNECTED WORK
          </span>

          <h2>
            Your team isn't slow.
            <br />
            <span>Your workflow is.</span>
          </h2>

          <p>
            Work gets stuck between email, spreadsheets, chat,
            and business tools. Every manual handoff adds
            friction, delays, and opportunities for things to
            get missed.
          </p>
        </div>

        <div className="workflow-card">
          <div className="workflow-card-header">
            <div>
              <span className="workflow-label">TODAY'S WORKFLOW</span>
              <h3>Too many tools. Too many handoffs.</h3>
            </div>

            <span className="workflow-status">
              Manual
            </span>
          </div>

          <div className="workflow-flow">
            <div className="workflow-node">
              <span className="workflow-node-icon">✉</span>
              <strong>Email</strong>
              <small>New request</small>
            </div>

            <span className="workflow-connector">→</span>

            <div className="workflow-node">
              <span className="workflow-node-icon">▦</span>
              <strong>Spreadsheet</strong>
              <small>Copy data</small>
            </div>

            <span className="workflow-connector">→</span>

            <div className="workflow-node">
              <span className="workflow-node-icon">◈</span>
              <strong>CRM</strong>
              <small>Update record</small>
            </div>

            <span className="workflow-connector">→</span>

            <div className="workflow-node">
              <span className="workflow-node-icon">◌</span>
              <strong>Slack</strong>
              <small>Notify team</small>
            </div>
          </div>

          <div className="workflow-problem">
            <span>⚠</span>
            <p>
              Your team becomes the connection between every tool.
            </p>
          </div>
        </div>

        <div className="workflow-solution">
          <div className="solution-copy">
            <span className="workflow-label">WITH AUTOMORA</span>

            <h3>
              One workflow.
              <br />
              <span>Zero busywork.</span>
            </h3>

            <p>
              Automora connects the tools and handles the
              handoffs automatically, so your team can focus
              on the work that actually matters.
            </p>
          </div>

          <div className="solution-flow">
            <div className="solution-node">Trigger</div>

            <span>→</span>

            <div className="automora-node">
              <strong>A</strong>
              <span>Automora</span>
            </div>

            <span>→</span>

            <div className="solution-node">Actions</div>

            <span>→</span>

            <div className="solution-node">Done</div>
          </div>
        </div>
      </div>
    </section>
  );
}