import "./App.css";
import profilePhoto from "./assets/profile.png";

function App() {
  return (
    <main className="glass-portfolio" id="home">
      <header className="glass-header">
        <a className="brand" href="#home" aria-label="Swarup Bandagale home">
          <span className="brand-mark">SB</span>
          <span>SWARUP BANDAGALE</span>
        </a>
        <a className="availability" href="mailto:swarupbandagale6@email.com">
          <span className="availability-dot" />
          OPEN TO OPPORTUNITIES
        </a>
        <a className="header-contact" href="#contact">LET'S CONNECT <span>↗</span></a>
      </header>

      <section className="hero-panel glass-panel">
        <div className="hero-copy">
          <p className="eyebrow">MBA FINANCE · ACCOUNTS EXECUTIVE</p>
          <h1>Swarup<br /><span>Bandagale.</span></h1>
          <p className="hero-description">
            Bringing clarity to financial operations through careful accounting,
            thoughtful analysis, and dependable execution.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">VIEW MY WORK <span>↓</span></a>
            <a className="button-secondary" href="mailto:swarupbandagale6@email.com">EMAIL ME <span>↗</span></a>
          </div>
          <p className="location-note"><span>⌖</span> WAI, SATARA · MAHARASHTRA, INDIA</p>
        </div>

        <div className="portrait-stage" aria-label="Portrait of Swarup Bandagale">
          <div className="portrait-halo" />
          <div className="portrait-frame">
            <img src={profilePhoto} alt="Swarup Bandagale" />
          </div>
          <div className="portrait-note"><span>01</span><div><small>WORKING IN</small><strong>Accounts & Finance</strong></div></div>
          <div className="orbit-stamp"><span>DETAIL · ACCURACY · GROWTH</span><b>✳</b></div>
        </div>
        <span className="hero-index">PORTFOLIO / 2026</span>
      </section>

      <section className="metrics-panel glass-panel" aria-label="Career highlights">
        <div className="metric"><span className="metric-icon">◇</span><strong>MBA</strong><small>Financial Management</small></div>
        <div className="metric"><span className="metric-icon">▤</span><strong>02</strong><small>Academic Studies</small></div>
        <div className="metric"><span className="metric-icon">97%</span><strong>Grade A</strong><small>Professional Accountant</small></div>
        <div className="metric"><span className="metric-icon">⌁</span><strong>30 WPM</strong><small>English Typing</small></div>
        <blockquote>“Focused on accuracy, compliance, and efficient financial operations.”</blockquote>
      </section>

      <section className="work-panel glass-panel" id="projects">
        <div className="section-heading">
          <div><p className="eyebrow"><span className="sparkle">✧</span> SELECTED ACADEMIC WORK</p><h2>Research & <span>Field Studies</span></h2></div>
          <a className="round-link" href="#contact" aria-label="Contact about projects">↘</a>
        </div>
        <div className="project-grid">
          <a className="study-card study-risk" href="/swarup%20research%20project.pdf" target="_blank" rel="noreferrer">
            <div className="study-art risk-art"><span className="art-label">FINANCIAL BEHAVIOUR / PUNE</span><div className="chart-grid"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="chart-line" /><span className="chart-caption">RISK<br />& RETURN</span><span className="study-number">01</span></div>
            <div className="study-info"><div><h3>Financial Risk & Investment Decisions</h3><p>An empirical study of financial risk tolerance and its impact on investment decisions in Pune District.</p></div><span className="study-arrow">↗</span></div>
            <span className="tag">MBA RESEARCH</span>
          </a>
          <a className="study-card study-bank" href="/swarup%20OJT%20project.pdf" target="_blank" rel="noreferrer">
            <div className="study-art bank-art"><span className="art-label">BANKING / ON-THE-JOB TRAINING</span><div className="ledger-sheet"><span>LOANS & ADVANCES</span><i /><i /><i /><i /><i /><b>WAI URBAN CO-OP BANK</b></div><span className="study-number">02</span></div>
            <div className="study-info"><div><h3>Loans & Advances</h3><p>On-the-job training study focused on lending and advances at Wai Urban Co-operative Bank.</p></div><span className="study-arrow">↗</span></div>
            <span className="tag">OJT STUDY</span>
          </a>
        </div>
      </section>

      <section className="details-grid" id="about">
        <article className="detail-panel glass-panel skills-panel" id="skills">
          <p className="eyebrow"><span className="sparkle">✧</span> SKILLS & EXPERTISE</p>
          <h2>Reliable work.<br /><span>Clear numbers.</span></h2>
          <div className="expertise-list">
            <div><span>01</span><b>Financial accounting</b><small>Vouchers · records · reconciliation</small></div>
            <div><span>02</span><b>Billing & invoicing</b><small>Documentation · vendor coordination</small></div>
            <div><span>03</span><b>Tax & compliance</b><small>GST · PF · ESIC · payroll</small></div>
            <div><span>04</span><b>Financial analysis</b><small>Excel reports · data management</small></div>
          </div>
        </article>

        <article className="detail-panel glass-panel education-panel" id="education">
          <p className="eyebrow"><span className="sparkle">✧</span> EDUCATION</p>
          <h2>Academic <span>foundation</span></h2>
          <div className="education-entry"><span className="entry-year">2024 — 2026</span><h3>MBA, Financial Management</h3><p>NBN Sinhgad Technical Institutes Campus, Pune</p><b>CGPA 7.48 / 10 · First Class</b></div>
          <div className="education-entry"><span className="entry-year">2021 — 2024</span><h3>Bachelor of Commerce</h3><p>Kisan Veer Mahavidyalaya, Wai</p><b>CGPA 6.42 / 10</b></div>
          <div className="current-role"><span className="role-dot" /><div><small>AUG 2026 — PRESENT</small><b>Executive – Accounts</b><p>Atharva Foundries Pvt. Ltd. · Yash Group of Industries</p></div></div>
        </article>

        <article className="detail-panel glass-panel tools-panel" id="certifications">
          <p className="eyebrow"><span className="sparkle">✧</span> TOOLS & CREDENTIALS</p>
          <h2>Practical tools.<br /><span>Verified skills.</span></h2>
          <div className="tool-orbit"><span className="tool-node node-tally">Tally<br /><small>Prime</small></span><span className="tool-node node-excel">Excel</span><span className="tool-node node-gst">GST</span><span className="tool-core">FINANCE<br />OPS</span></div>
          <ul className="credential-list">
            <li><span>Certified Course in Professional Accountant</span><b>97% · A+</b></li>
            <li><span>Tally Prime with GST</span><b>Grade A</b></li>
            <li><span>Advanced Excel</span><b>Grade A</b></li>
            <li><span>English Typing · 30 WPM</span><b>Grade B</b></li>
          </ul>
        </article>
      </section>

      <section className="contact-panel glass-panel" id="contact">
        <div className="contact-intro"><p className="eyebrow">A GOOD PLACE TO START</p><h2>Let’s make<br /><span>work matter.</span></h2><p>Have an opportunity or a finance role in mind? I’d be glad to connect.</p><a className="button-primary" href="mailto:swarupbandagale6@email.com">GET IN TOUCH <span>↗</span></a></div>
        <div className="contact-details"><p className="eyebrow">CONTACT DETAILS</p><a href="mailto:swarupbandagale6@email.com"><span>✉</span> swarupbandagale6@email.com</a><a href="tel:+917798208652"><span>⌕</span> +91 77982 08652</a><a href="https://linkedin.com/in/swarupbandagale-264a18190" target="_blank" rel="noreferrer"><span>↗</span> LinkedIn profile</a><p className="contact-location">⌖ &nbsp; Wai, Satara, Maharashtra</p></div>
        <div className="contact-glass-art" aria-hidden="true"><div className="glass-orb"><span>SB</span></div><p>ACCURACY<br />IN EVERY DETAIL</p></div>
      </section>

      <footer className="glass-footer"><a className="brand" href="#home"><span className="brand-mark">SB</span><span>SWARUP BANDAGALE</span></a><span>© 2026 SWARUP BANDAGALE</span><a href="#home">BACK TO TOP ↑</a></footer>
    </main>
  );
}

export default App;