import { useEffect } from "react";
import "./App.css";
import profilePhoto from "./assets/profile.png";

function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const panels = document.querySelectorAll(".glass-panel, .glass-footer");
    if (!("IntersectionObserver" in window)) {
      panels.forEach((panel) => panel.classList.add("reveal-in"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal-in");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });

    panels.forEach((panel, index) => {
      panel.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
      observer.observe(panel);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="glass-portfolio" id="home">
      <header className="glass-header">
        <a className="brand" href="#home" aria-label="Swarup Namdev Bandagale home">
          <span className="brand-mark">SB</span>
          <span>SWARUP NAMDEV BANDAGALE</span>
        </a>
        <a className="availability" href="mailto:swarupbandagale6@email.com">
          <span className="availability-dot" />
          OPEN TO OPPORTUNITIES
        </a>
        <a className="header-contact" href="#contact">LET'S CONNECT <span>↗</span></a>
      </header>

      <section className="hero-panel glass-panel">
        <div className="hero-copy">
          <p className="eyebrow">ACCOUNTS & FINANCE EXECUTIVE · MBA FINANCIAL MANAGEMENT</p>
          <h1><span>Swarup</span><span>Namdev</span><span>Bandagale</span></h1>
          <p className="hero-description">
            Accounts Executive with hands-on manufacturing experience in billing,
            accounting records, taxation, payroll, and financial analysis. MBA in
            Financial Management, First Class.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">VIEW MY WORK <span>↓</span></a>
            <a className="button-secondary" href="mailto:swarupbandagale6@email.com">EMAIL ME <span>↗</span></a>
          </div>
          <p className="location-note"><span>⌖</span> WAI, SATARA · MAHARASHTRA, INDIA</p>
        </div>

        <div className="portrait-stage" aria-label="Portrait of Swarup Namdev Bandagale">
          <div className="portrait-halo" />
          <div className="portrait-frame">
            <img src={profilePhoto} alt="Swarup Namdev Bandagale" />
          </div>
          <div className="portrait-note"><span>01</span><div><small>WORKING IN</small><strong>Accounts & Finance</strong></div></div>
          <div className="orbit-stamp"><span>DETAIL · ACCURACY · GROWTH</span><b>✳</b></div>
        </div>
        <span className="hero-index">PORTFOLIO / 2026</span>
      </section>

      <section className="metrics-panel glass-panel" aria-label="Career highlights">
        <div className="metric"><span className="metric-icon">◇</span><strong>MBA</strong><small>Financial Management</small></div>
        <div className="metric"><span className="metric-icon">▤</span><strong>04</strong><small>Education Levels</small></div>
        <div className="metric"><span className="metric-icon">CGPA</span><strong>7.48 / 10</strong><small>First Class</small></div>
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
            <div className="study-info"><div><h3>Financial Risk & Investment Decisions</h3><p>Questionnaire-based study of investor risk appetite across FDs, SIPs, and equity, using Cronbach's Alpha, ANOVA, regression, and chi-square analysis.</p></div><span className="study-arrow">↗</span></div>
            <span className="tag">MBA RESEARCH</span>
          </a>
          <a className="study-card study-bank" href="/swarup%20OJT%20project.pdf" target="_blank" rel="noreferrer">
            <div className="study-art bank-art"><span className="art-label">BANKING / ON-THE-JOB TRAINING</span><div className="ledger-sheet"><span>LOANS & ADVANCES</span><i /><i /><i /><i /><i /><b>WAI URBAN CO-OP BANK</b></div><span className="study-number">02</span></div>
            <div className="study-info"><div><h3>Loans & Advances</h3><p>Reviewed loan portfolio, sanctioning, documentation, credit appraisal, lending trends, and NPA management at Wai Urban Co-operative Bank.</p></div><span className="study-arrow">↗</span></div>
            <span className="tag">OJT STUDY</span>
          </a>
        </div>
      </section>

      <section className="experience-panel glass-panel" id="experience">
        <div className="experience-heading">
          <div><p className="eyebrow"><span className="sparkle">✧</span> PROFESSIONAL EXPERIENCE</p><h2>Executive – <span>Accounts</span></h2></div>
          <span className="experience-period">AUG 2026 — PRESENT</span>
        </div>
        <div className="experience-body">
          <div className="experience-company"><strong>Atharva Foundries Pvt. Ltd.</strong><p>Yash Group of Industries</p><small>MIDC Wai, Satara, Maharashtra</small></div>
          <ul className="experience-duties">
            <li>Prepare bills, invoices, and supporting documents for daily accounting transactions.</li>
            <li>Maintain accurate accounting records and ledgers in line with company procedures.</li>
            <li>Support statutory documentation for GST, PF, and ESIC.</li>
            <li>Coordinate with vendors and internal teams to resolve billing discrepancies.</li>
            <li>Handle accounts and administrative tasks with accuracy and timeliness.</li>
          </ul>
        </div>
      </section>

      <section className="details-grid" id="about">
        <article className="detail-panel glass-panel skills-panel" id="skills">
          <p className="eyebrow"><span className="sparkle">✧</span> SKILLS & EXPERTISE</p>
          <h2>Reliable work.<br /><span>Clear numbers.</span></h2>
          <div className="expertise-list">
            <div><span>01</span><b>Accounting operations</b><small>Ledger creation & scrutiny · finalisation · BRS · AP/AR reconciliation</small></div>
            <div><span>02</span><b>Plant & inventory accounting</b><small>GRN verification · BOM · inventory valuation · PO/SO matching</small></div>
            <div><span>03</span><b>Taxation & compliance</b><small>CGST/SGST/IGST · TDS/TCS · e-way bills · PF/ESIC</small></div>
            <div><span>04</span><b>Advanced Excel & MIS</b><small>VLOOKUP · HLOOKUP · Pivot Tables · Data Validation · reporting</small></div>
            <div><span>05</span><b>Software & ERP</b><small>Tally Prime · Tally ERP 9 · ERP/SAP navigation · MS Office</small></div>
          </div>
        </article>

        <article className="detail-panel glass-panel education-panel" id="education">
          <p className="eyebrow"><span className="sparkle">✧</span> EDUCATION</p>
          <h2>Academic <span>foundation</span></h2>
          <div className="education-entry"><span className="entry-year">2024 — 2026</span><h3>MBA, Financial Management</h3><p>NBN Sinhgad Technical Institutes Campus, Pune · Savitribai Phule Pune University</p><b>CGPA 7.48 / 10 · First Class</b></div>
          <div className="education-entry"><span className="entry-year">2021 — 2024</span><h3>Bachelor of Commerce (B.Com)</h3><p>Kisan Veer Mahavidyalaya, Wai · Shivaji University, Kolhapur</p><b>CGPA 6.42 / 10</b></div>
          <div className="education-entry"><span className="entry-year">2021</span><h3>HSC, Commerce</h3><p>Maharashtra State Board · Kolhapur Division</p><b>80.50%</b></div>
          <div className="education-entry"><span className="entry-year">2018</span><h3>Secondary School Certificate (SSC)</h3><p>Maharashtra State Board · Kolhapur Division</p><b>65.40%</b></div>
        </article>

        <article className="detail-panel glass-panel tools-panel" id="certifications">
          <p className="eyebrow"><span className="sparkle">✧</span> TOOLS & CREDENTIALS</p>
          <h2>Practical tools.<br /><span>Verified skills.</span></h2>
          <div className="tool-orbit"><span className="tool-node node-tally">Tally<br /><small>Prime</small></span><span className="tool-node node-excel">Excel</span><span className="tool-node node-gst">GST</span><span className="tool-core">FINANCE<br />OPS</span></div>
          <ul className="credential-list">
            <li><span>Professional Accountant · 6 months<small>SIIT, Global Infotech, Wai · Nov 2025</small></span><b>97% · A</b></li>
            <li><span>Tally Prime with GST<small>State Institute of Information Technology · Nov 2025</small></span><b>Grade A</b></li>
            <li><span>Advanced Excel<small>State Institute of Information Technology · Nov 2025</small></span><b>Grade A</b></li>
            <li><span>GCC-TBC English Typing · 30 WPM<small>Maharashtra State Council of Examination · Dec 2023</small></span><b>Grade B</b></li>
          </ul>
        </article>
      </section>

      <section className="contact-panel glass-panel" id="contact">
        <div className="contact-intro"><p className="eyebrow">A GOOD PLACE TO START</p><h2>Let’s make<br /><span>work matter.</span></h2><p>Have an opportunity or a finance role in mind? I’d be glad to connect.</p><div className="contact-actions"><a className="button-primary" href="mailto:swarupbandagale6@email.com">EMAIL ME <span>↗</span></a><a className="button-secondary" href="https://linkedin.com/in/swarupbandagale-264a18190" target="_blank" rel="noreferrer">LINKEDIN <span>↗</span></a></div></div>
        <div className="contact-details"><p className="eyebrow">CONTACT DETAILS</p><a href="mailto:swarupbandagale6@email.com"><span>✉</span> swarupbandagale6@email.com</a><a href="tel:+917798208652"><span>⌕</span> +91 77982 08652</a><a href="https://linkedin.com/in/swarupbandagale-264a18190" target="_blank" rel="noreferrer"><span>↗</span> linkedin.com/in/swarupbandagale-264a18190</a><p className="contact-location">⌖ &nbsp; Wai, Dist. Satara, Maharashtra, India</p><p className="language-line">LANGUAGES <b>English · Hindi · Marathi</b></p></div>
        <div className="contact-glass-art" aria-hidden="true"><div className="glass-orb"><span>SB</span></div><p>ACCURACY<br />IN EVERY DETAIL</p></div>
      </section>

      <footer className="glass-footer"><a className="brand" href="#home"><span className="brand-mark">SB</span><span>SWARUP NAMDEV BANDAGALE</span></a><span>© 2026 SWARUP NAMDEV BANDAGALE</span><a href="#home">BACK TO TOP ↑</a></footer>
    </main>
  );
}

export default App;