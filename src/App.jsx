const skills = [
  {
    title: "Cloud",
    code: "01",
    items: ["AWS", "Serverless", "VPC networking", "CloudFront"],
  },
  {
    title: "Delivery",
    code: "02",
    items: ["GitHub Actions", "Jenkins", "Argo CD", "GitOps"],
  },
  {
    title: "Platform",
    code: "03",
    items: ["Docker", "Kubernetes", "Terraform", "Linux"],
  },
  {
    title: "Observe",
    code: "04",
    items: ["Prometheus", "Grafana", "DNS", "TCP/IP"],
  },
];

const projects = [
  {
    number: "01",
    title: "Cloud-native food ordering",
    eyebrow: "Kubernetes · GitOps delivery",
    description:
      "A full-stack ordering platform built as three connected services, containerized and shipped through a production-style pipeline.",
    tags: [
      "React",
      "Node.js",
      "GitHub Actions",
      "Argo CD",
      "Kubernetes",
      "AWS EC2",
    ],
    impact: "60% faster deployments",
    link: "https://github.com/jenish-chauhan/Jerry-s-chaska-Online-Food-order.git",
    label: "View repository",
  },
  {
    number: "02",
    title: "Serverless task management",
    eyebrow: "AWS · Event-driven architecture",
    description:
      "A secure task platform designed around managed AWS services, authenticated API access, and low-overhead scaling.",
    tags: ["S3", "CloudFront", "API Gateway", "Lambda", "DynamoDB", "Cognito"],
    impact: "Fully serverless stack",
    link: "https://www.linkedin.com/posts/jenish-chauhan-9510915527j_aws-cloudcomputing-serverless-activity-7443284450010038272-JUZW",
    label: "View project post",
  },
  {
    number: "03",
    title: "Tetris game deployment",
    eyebrow: "AWS EKS / end-to-end DevSecOps",
    description:
      "A production-style DevSecOps pipeline that provisions AWS infrastructure with Terraform, enforces security gates, and continuously deploys a Tetris game to EKS through GitOps.",
    tags: [
      "Terraform",
      "Jenkins",
      "SonarQube",
      "OWASP Dependency-Check",
      "Docker",
      "AWS EKS",
      "Argo CD",
      "Kubernetes",
    ],
    impact: "Security-gated GitOps delivery",
    link: "https://github.com/jenish-chauhan/End-to-End-k8s-DevSecops-Tetris-Project.git",
    label: "View repository",
  },
];

const credentials = [
  ["AWS Certified Solutions Architect", "Amazon Web Services · 2025–2028"],
  ["AWS Certified Cloud Practitioner", "Amazon Web Services · 2025–2028"],
  ["Galactic Problem Solver", "NASA International Space Apps Challenge · 2025"],
];

function Arrow() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  );
}

function App() {
  return (
    <div className="site-wrap">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="nav-shell">
        <a className="brand" href="#top">
          <span className="brand-mark">JC</span>
          <span>JENISH / CLOUD OPS</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#credentials">Credentials</a>
        </nav>
        <a className="nav-contact" href="#contact">
          Let&apos;s connect <Arrow />
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <i /> Available for DevOps & cloud opportunities
            </p>
            <h1>
              Engineer the
              <br />
              <em>invisible.</em>
            </h1>
            <p className="hero-intro">
              I&apos;m <strong>Jenish Chauhan</strong> — an AWS-certified cloud
              and DevOps engineer focused on dependable infrastructure,
              automated delivery, and systems that scale with calm.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <Arrow />
              </a>
              <a
                className="button button-quiet"
                href="/jenish-chauhan-resume-v7.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download résumé <span className="download">↓</span>
              </a>
            </div>
            <div className="hero-proof">
              <span>▲ AWS Certified</span>
              <span>⌁ Kubernetes-minded</span>
              <span>● Based in Gujarat, IN</span>
            </div>
          </div>

          <div
            className="profile-stage"
            aria-label="Portrait of Jenish Chauhan"
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="stage-grid" />
            <div className="terminal-card">
              <span className="terminal-dot" />
              <span>system.status</span>
              <b>operational</b>
            </div>
            <div className="availability-card">
              <span>Open to work</span>
              <strong>DevOps / Cloud</strong>
            </div>
            <div className="profile-glow" />
            <img
              src="/jenish-profile-enhanced-transparent.png"
              alt="Jenish Chauhan"
              className="profile-photo"
            />
            <div className="profile-base">
              <span>JENISH_CHAUHAN</span>
              <b>Cloud engineer</b>
            </div>
          </div>
        </section>

        <section className="signal-bar" aria-label="Core capabilities">
          <span>Build</span>
          <b>→</b>
          <span>Automate</span>
          <b>→</b>
          <span>Deploy</span>
          <b>→</b>
          <span>Observe</span>
          <b>→</b>
          <span>Improve</span>
        </section>

        <section className="intro-grid" id="about">
          <p className="section-kicker">01 / THE APPROACH</p>
          <div>
            <h2>
              Infrastructure should feel <em>intentional.</em>
            </h2>
            <p>
              I turn application ideas into clear, deployable systems —
              connecting development speed to operational reliability with
              cloud-native tooling and thoughtful automation.
            </p>
          </div>
          <div className="metric">
            <b>
              60<span>%</span>
            </b>
            <p>faster deployment workflow achieved through CI/CD & GitOps</p>
          </div>
        </section>

        <section id="work" className="work-section">
          <div className="section-head">
            <div>
              <p className="section-kicker">02 / SELECTED WORK</p>
              <h2>
                Built for <em>production.</em>
              </h2>
            </div>
            <p className="section-sidecopy">
              Projects where architecture, automation, and developer experience
              come together.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-aside">
                  <span className="impact">{project.impact}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    {project.label} <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="stack-section">
          <div className="section-head">
            <div>
              <p className="section-kicker">03 / TOOLKIT</p>
              <h2>
                The platform
                <br />
                engineering <em>stack.</em>
              </h2>
            </div>
            <p className="section-sidecopy">
              Tools I use to build repeatable, observable, and scalable
              workflows.
            </p>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.code}>
                <span>{skill.code}</span>
                <h3>{skill.title}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>
                      {item}
                      <b>↗</b>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="credentials" className="credentials-section">
          <p className="section-kicker">04 / CREDENTIALS & EDUCATION</p>
          <div className="credentials-grid">
            <div>
              <h2>
                Learning in
                <br />
                <em>public.</em>
              </h2>
              <a
                className="text-link"
                href="https://www.credly.com/users/chauhan-jenish/badges#credly"
                target="_blank"
                rel="noreferrer"
              >
                View verified badges <Arrow />
              </a>
            </div>
            <div className="credential-list">
              {credentials.map(([title, meta]) => (
                <div className="credential" key={title}>
                  <span>✓</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="education-line">
            <span>Education</span>
            <b>B.E. Information Technology</b>
            <span>Lukhdhirji Engineering College · 2024–2027 · 8.74 CGPA</span>
            <b>Diploma in Computer Engineering</b>
            <span>Om Institute · 2021–2024 · 9.72 CGPA</span>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <p className="section-kicker">05 / LET&apos;S WORK TOGETHER</p>
          <h2>
            Ready to make
            <br />
            complex systems <em>simple.</em>
          </h2>
          <div className="contact-row">
            <a href="mailto:jenishchauhan.08@gmail.com">
              jenishchauhan.08@gmail.com <Arrow />
            </a>
            <div>
              <a
                href="https://www.linkedin.com/in/jenish-chauhan-9510915527j/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/jenish-chauhan/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a href="tel:+919510915527">+91 95109 15527</a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <span>© {new Date().getFullYear()} Jenish Chauhan</span>
        <span>Designed with systems thinking.</span>
      </footer>
    </div>
  );
}

export default App;
