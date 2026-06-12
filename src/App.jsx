const metrics = [
  { value: "2", label: "AWS certifications earned" },
  { value: "60%", label: "Faster deployment workflow achieved" },
  { value: "3", label: "Microservices deployed on Kubernetes" },
  { value: "100%", label: "Serverless architecture for task app" }
];

const skillGroups = [
  {
    title: "Cloud & Containers",
    items: ["AWS", "Docker", "Kubernetes", "VPC Networking"]
  },
  {
    title: "CI/CD & Automation",
    items: ["GitHub Actions", "Jenkins", "Terraform", "ArgoCD"]
  },
  {
    title: "Monitoring & Systems",
    items: ["Prometheus", "Grafana", "Linux", "TCP/IP", "DNS"]
  },
  {
    title: "Programming",
    items: ["Java", "JavaScript", "Python", "Bash"]
  }
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    org: "Amazon Web Services",
    period: "Dec 2025 - Dec 2028"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    period: "Oct 2025 - Oct 2028"
  },
  {
    name: "Galactic Problem Solver",
    org: "NASA International Space Apps Challenge",
    period: "2025"
  }
];

const projects = [
  {
    title: "Cloud-Native Food Ordering System",
    stack: [
      "React",
      "Node.js",
      "MySQL",
      "GitHub Actions",
      "ArgoCD",
      "Kubernetes",
      "AWS EC2"
    ],
    summary:
      "Built and containerized a full-stack ordering platform with multi-role authentication for customers and admins.",
    highlights: [
      "Designed a CI/CD flow with GitHub Actions and ArgoCD that reduced deployment time by roughly 60%.",
      "Deployed three connected services on Kubernetes for reliability, service-based communication, and horizontal scalability.",
      "Focused on production-style delivery practices instead of only local development."
    ],
    primaryLink: "https://github.com/jenish-chauhan/Jerry-s-chaska-Online-Food-order.git",
    primaryLabel: "View GitHub Repository"
  },
  {
    title: "Cloud-Native Task Management System",
    stack: [
      "AWS S3",
      "CloudFront",
      "API Gateway",
      "Lambda",
      "DynamoDB",
      "Cognito"
    ],
    summary:
      "Architected a fully serverless application with secure authentication and low-latency backend processing.",
    highlights: [
      "Implemented Cognito-based user authentication with OTP verification for a secure sign-in flow.",
      "Used Lambda and DynamoDB to keep the backend scalable, event-driven, and operationally lightweight.",
      "Protected APIs through API Gateway with integrated authentication controls."
    ],
    primaryLink:
      "https://www.linkedin.com/posts/jenish-chauhan-9510915527j_aws-cloudcomputing-serverless-activity-7443284450010038272-JUZW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFB_Cd4B0OOwrbYEDnMr3hxZOLEi-BrvKxM",
    primaryLabel: "View Demo Post"
  }
];

const education = [
  {
    degree: "Bachelor of Engineering in Information Technology",
    school: "Lukhdhirji Engineering College, Morbi",
    meta: "2024 - 2027",
    score: "8.13 CGPA (current)"
  },
  {
    degree: "Diploma in Computer Engineering",
    school: "Om Institute of Engineering & Technology, Junagadh",
    meta: "2021 - 2024",
    score: "9.72 CGPA"
  }
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

function App() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <div className="page-shell">
        <header className="sticky top-0 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan">
            Jenish Chauhan
          </a>
          <nav className="hidden gap-6 text-sm text-slate md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <main id="top" className="mx-auto flex max-w-6xl flex-col gap-10 pb-20 pt-8">
          <section className="hero-grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow md:p-12">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-lime/40 bg-lime/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-lime">
                AWS Certified / Cloud & DevOps Engineer
              </span>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                  Building cloud systems that are reliable, scalable, and ready for production.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-mist/80 md:text-lg">
                  I am Jenish Chauhan, an Information Technology student focused on DevOps and cloud engineering.
                  My work centers on CI/CD, Kubernetes, infrastructure automation, and serverless AWS architecture.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
                >
                  Explore Projects
                </a>
                <a
                  href="/jenish-chauhan-resume-v3.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-coral hover:text-coral"
                >
                  Open Resume
                </a>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-mist/75">
                <span className="chip">Junagadh, Gujarat</span>
                <span className="chip">Open to Cloud / DevOps Roles</span>
                <span className="chip">Google-HR Ready Portfolio</span>
              </div>
            </div>

            <aside className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-coral/25 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-cyan/25 blur-3xl" />
              <div className="relative space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate">Profile Snapshot</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Impact-minded builder</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="text-3xl font-semibold text-lime">{metric.value}</p>
                      <p className="mt-2 text-sm leading-6 text-mist/75">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </section>

          <section id="about" className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <article className="panel">
              <p className="section-label">About</p>
              <h2 className="section-title">DevOps thinking with hands-on execution.</h2>
              <p className="section-copy">
                My focus is turning ideas into deployable systems: containerizing applications, automating pipelines,
                managing infrastructure, and designing cloud setups that scale without adding unnecessary complexity.
              </p>
              <p className="section-copy">
                I enjoy building systems that connect development speed with operational reliability, especially where
                GitOps, Kubernetes, and AWS can work together to create clean delivery flows.
              </p>
            </article>

            <article className="panel">
              <p className="section-label">Quick Links</p>
              <div className="grid gap-4">
                <a
                  href="http://www.linkedin.com/in/jenish-chauhan-9510915527j/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-card"
                >
                  LinkedIn
                  <span className="text-slate">Professional profile and updates</span>
                </a>
                <a
                  href="https://github.com/jenish-chauhan/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-card"
                >
                  GitHub
                  <span className="text-slate">Code, repos, and project work</span>
                </a>
                <a
                  href="https://www.credly.com/users/chauhan-jenish/badges#credly"
                  target="_blank"
                  rel="noreferrer"
                  className="link-card"
                >
                  Credly Badges
                  <span className="text-slate">Verified certification badges</span>
                </a>
              </div>
            </article>
          </section>

          <section id="skills" className="panel">
            <p className="section-label">Skills</p>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 className="section-title">A toolkit designed for cloud-native delivery.</h2>
              <p className="max-w-2xl text-sm leading-7 text-mist/70">
                Strongest around AWS, Kubernetes, automation, Linux, and infrastructure workflows that move code from
                commit to production with confidence.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="panel">
              <p className="section-label">Certifications</p>
              <h2 className="section-title">Validated cloud foundation.</h2>
              <div className="mt-8 space-y-4">
                {certifications.map((certificate) => (
                  <div key={certificate.name} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <h3 className="text-lg font-semibold text-white">{certificate.name}</h3>
                    <p className="mt-2 text-sm text-mist/75">{certificate.org}</p>
                    <p className="mt-1 text-sm text-cyan">{certificate.period}</p>
                  </div>
                ))}
              </div>
            </article>

            <article id="projects" className="panel">
              <p className="section-label">Projects</p>
              <h2 className="section-title">Work that highlights delivery, scale, and architecture.</h2>
              <div className="mt-8 grid gap-5">
                {projects.map((project) => (
                  <div key={project.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-mist/75">{project.summary}</p>
                      </div>
                      <a
                        href={project.primaryLink}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-cyan/40 px-4 py-2 text-sm font-semibold text-cyan transition hover:border-cyan hover:bg-cyan hover:text-ink"
                      >
                        {project.primaryLabel}
                      </a>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 grid gap-3">
                      {project.highlights.map((point) => (
                        <div key={point} className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm leading-7 text-mist/80">
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section id="education" className="panel">
            <p className="section-label">Education</p>
            <h2 className="section-title">Academic track with strong performance.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {education.map((item) => (
                <div key={item.degree} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate">{item.meta}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{item.degree}</h3>
                  <p className="mt-2 text-sm leading-7 text-mist/75">{item.school}</p>
                  <p className="mt-4 inline-flex rounded-full bg-lime/10 px-4 py-2 text-sm font-semibold text-lime">
                    {item.score}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="panel overflow-hidden">
            <div className="relative">
              <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-lime/15 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-coral/15 blur-3xl" />
              <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <p className="section-label">Contact</p>
                  <h2 className="section-title">Let's build dependable cloud infrastructure together.</h2>
                  <p className="section-copy">
                    If you are hiring for DevOps, cloud engineering, or platform-focused internships and entry-level
                    roles, I would love to connect.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <a href="mailto:jenishchauhan.08@gmail.com" className="rounded-full bg-coral px-6 py-3 text-center text-sm font-semibold text-ink">
                    jenishchauhan.08@gmail.com
                  </a>
                  <a href="tel:+919510915527" className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white">
                    +91 95109 15527
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
