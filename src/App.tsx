import { FormEvent, useEffect, useState } from "react";
import portrait from "./imports/image.jpeg";

type IconName =
  | "arrow"
  | "azure"
  | "cloud"
  | "code"
  | "database"
  | "design"
  | "github"
  | "linkedin"
  | "mail"
  | "menu"
  | "play"
  | "spark"
  | "youtube";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    azure: <><path d="M5 18 11 4l4 9H9l-4 5Z" /><path d="m13 18 3-8 4 8h-7Z" /></>,
    cloud: <path d="M7 18h10a4 4 0 0 0 .7-7.94A6 6 0 0 0 6.3 8.3 4.5 4.5 0 0 0 7 18Z" />,
    code: <><path d="m8 9-3 3 3 3" /><path d="m16 9 3 3-3 3" /><path d="m14 5-4 14" /></>,
    database: <><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" /><path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" /></>,
    design: <><path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" /><path d="m4 7 8 4 8-4M12 11v10" /></>,
    github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5-.1 3.8.5 3.8.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4m0-3c-3 .9-3-1.5-4.2-2" />,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><path d="M2 9h4v12H2z" /><path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    play: <path d="m8 5 11 7-11 7V5Z" />,
    spark: <><path d="m12 3 1.3 4.2L17 9l-3.7 1.8L12 15l-1.3-4.2L7 9l3.7-1.8L12 3Z" /><path d="m19 15 .7 2.3L22 18.5l-2.3 1.2L19 22l-.7-2.3-2.3-1.2 2.3-1.2L19 15Z" /><path d="m5 2 .7 2.3L8 5.5 5.7 6.7 5 9l-.7-2.3L2 5.5l2.3-1.2L5 2Z" /></>,
    youtube: <><path d="M22 12s0-4-1-5-4-1-9-1-8 0-9 1-1 5-1 5 0 4 1 5 4 1 9 1 8 0 9-1 1-5 1-5Z" /><path d="m10 9 5 3-5 3V9Z" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const navItems = ["Home", "About", "Skills", "Projects", "Services", "Channels", "Contact"];

const skills = [
  { name: "Python", meta: "Django · Flask · Automation", value: 80, featured: true },
  { name: "React & JavaScript", meta: "Modern web apps · Hooks", value: 80, featured: true },
  { name: "MongoDB", meta: "Aggregation · Indexing · NoSQL", value: 80 },
  { name: "Azure Cloud", meta: "DevOps · App Services", value: 80 },
  { name: "Java", meta: "Spring Boot · OOP", value: 60 },
  { name: "C#", meta: ".NET · ASP.NET · Desktop", value: 60 },
  { name: "Kotlin", meta: "Android · Mobile apps", value: 60 },
  { name: "Python AI/ML", meta: "PyTorch · NLP · TensorFlow", value: 60 },
];

const projects = [
  {
    number: "01",
    title: "E-Commerce Platform",
    description: "A full-stack commerce experience with live inventory, secure payments, and a responsive customer journey.",
    tags: ["React", "Node.js", "MongoDB"],
    visual: "commerce",
  },
  {
    number: "02",
    title: "Doctor's Medical Portal",
    description: "A comprehensive care portal for appointments, medical records, and healthcare provider profiles.",
    tags: ["React", "HTML/CSS", "JavaScript"],
    visual: "medical",
  },
  {
    number: "03",
    title: "AI Invoice Reader",
    description: "Intelligent invoice processing using Gemini AI to extract, validate, and analyze financial data.",
    tags: ["Python", "Gemini AI", "Flask"],
    visual: "invoice",
  },
];

const services: { icon: IconName; title: string; text: string }[] = [
  { icon: "code", title: "Web Development", text: "Fast, accessible interfaces and robust full-stack products built for real people." },
  { icon: "cloud", title: "Cloud Applications", text: "Scalable Azure solutions with dependable delivery pipelines and operations." },
  { icon: "spark", title: "Python AI Applications", text: "Thoughtful automation and AI tools that turn complex workflows into simple ones." },
  { icon: "database", title: "Database Management", text: "Clear, secure data architecture designed for performance today and growth tomorrow." },
  { icon: "design", title: "UI/UX Design", text: "Refined digital experiences where visual craft and usability work in harmony." },
];

function SectionTitle({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handlePointer = (event: React.PointerEvent<HTMLElement>) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 18;
    const y = (event.clientY / window.innerHeight - 0.5) * 18;
    event.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Kyle Pillay, home">
          KP<span>.</span>
        </a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">Let's talk <Icon name="arrow" size={17} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <Icon name="menu" size={22} />
        </button>
      </header>

      <main>
        <section id="home" className="hero" onPointerMove={handlePointer}>
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
          <div className="hero-grid" />
          <div className="hero-copy reveal">
            <span className="availability"><i /> Available for thoughtful collaborations</span>
            <p className="hero-kicker">Hello, I'm Kyle Pillay</p>
            <h1>Full-stack craft.<br /><em>Human-centered</em> impact.</h1>
            <p className="hero-lede">Transforming ideas into vibrant digital experiences with passion and precision.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View my work <Icon name="arrow" size={18} /></a>
              <a className="button button-secondary" href="#contact">Contact me</a>
            </div>
          </div>
          <div className="hero-portrait reveal">
            <div className="portrait-frame">
              <div className="portrait-halo" />
              <img src={portrait} alt="Kyle Pillay in a formal shirt and tie" />
              <div className="portrait-label">
                <span>Based in</span>
                <strong>South Africa</strong>
              </div>
            </div>
            <div className="floating-note note-code"><Icon name="code" size={19} /><span>Building with<br /><strong>purpose</strong></span></div>
            <div className="floating-note note-years"><strong>8</strong><span>core<br />technologies</span></div>
          </div>
          <a href="#about" className="scroll-cue"><span>Scroll to explore</span><i /></a>
        </section>

        <section id="about" className="section about-section">
          <div className="about-index reveal">01 / ABOUT</div>
          <div className="about-layout">
            <SectionTitle eyebrow="A little about me" title="Curious by nature. Precise by practice." />
            <div className="about-copy reveal">
              <p className="lead">I'm a passionate and hardworking full-stack developer from South Africa with a love for technology, coding, playing guitar and, especially, chicken shawarma.</p>
              <div className="about-columns">
                <p>I build beautiful, functional, and user-friendly digital experiences—specializing in React and ASP.NET, C# desktop applications, Python automation and AI, and MongoDB database design.</p>
                <p>My approach blends technical excellence with creative problem-solving. Beyond code, I value public speaking, clear communication, open source, exploring new technology, and mentoring aspiring developers.</p>
              </div>
              <div className="principles">
                <div><span>01</span><strong>Thoughtful systems</strong></div>
                <div><span>02</span><strong>Clear communication</strong></div>
                <div><span>03</span><strong>Continuous growth</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <SectionTitle eyebrow="Capabilities" title="A versatile toolkit for ambitious ideas." intro="From interface to infrastructure, I work across the stack to create cohesive digital products." />
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article className={`skill-card reveal ${skill.featured ? "skill-featured" : ""}`} style={{ "--delay": `${index * 55}ms` } as React.CSSProperties} key={skill.name}>
                <div className="skill-top"><span>{skill.name}</span><strong>{skill.value}%</strong></div>
                <p>{skill.meta}</p>
                <div className="progress-track"><i style={{ "--progress": `${skill.value}%` } as React.CSSProperties} /></div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <SectionTitle eyebrow="Selected work" title="Built to solve. Designed to endure." intro="A selection of practical products shaped by strategy, precision, and care." />
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.title}>
                <div className={`project-visual ${project.visual}`}>
                  <span className="project-number">{project.number}</span>
                  {project.visual === "commerce" && <div className="mock-browser"><i /><i /><i /><div className="mock-product"><b /><span /><span /></div><div className="mock-product second"><b /><span /><span /></div></div>}
                  {project.visual === "medical" && <div className="medical-mark"><i /><i /></div>}
                  {project.visual === "invoice" && <div className="invoice-sheet"><i /><span /><span /><span /><b>AI</b></div>}
                  <div className="project-overlay"><a href="#contact">Discuss project <Icon name="arrow" size={18} /></a></div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section services-section">
          <SectionTitle eyebrow="What I do" title="From first sketch to final release." />
          <div className="service-grid">
            {services.map((service, index) => (
              <article className={`service-card reveal service-${index + 1}`} key={service.title}>
                <span className="service-icon"><Icon name={service.icon} size={25} /></span>
                <span className="service-count">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact" aria-label={`Ask about ${service.title}`}><Icon name="arrow" size={20} /></a>
              </article>
            ))}
          </div>
        </section>

        <section id="channels" className="section channels-section">
          <SectionTitle eyebrow="Beyond the build" title="Sharing the work. Growing together." />
          <div className="channel-grid">
            <article className="channel-card github-card reveal">
              <div className="channel-head"><span className="channel-icon"><Icon name="github" size={30} /></span><span>Open source</span></div>
              <h3>Code in the open.</h3>
              <p>Explore my repositories, experiments, and contributions to developer communities.</p>
              <div className="channel-stats"><div><strong>10+</strong><span>Repositories</span></div><div><strong>25+</strong><span>Contributions</span></div></div>
              <a className="button button-light" href="https://github.com/" target="_blank" rel="noreferrer">Visit GitHub <Icon name="arrow" size={18} /></a>
            </article>
            <article className="channel-card youtube-card reveal">
              <div className="channel-head"><span className="channel-icon"><Icon name="youtube" size={30} /></span><span>ByteSizedCode</span></div>
              <h3>Learning, in small bites.</h3>
              <p>Coding tutorials and approachable ideas for developers who never stop learning.</p>
              <div className="channel-stats"><div><strong>4+</strong><span>Videos</span></div><div><strong>10+</strong><span>Subscribers</span></div></div>
              <a className="button button-secondary" href="https://youtube.com/" target="_blank" rel="noreferrer">Subscribe now <Icon name="play" size={17} /></a>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-copy reveal">
            <span className="eyebrow">Start a conversation</span>
            <h2>Have an idea?<br /><em>Let's make it real.</em></h2>
            <p>Whether it's a new product, an ambitious feature, or simply a conversation about technology—I'd love to hear from you.</p>
            <a className="email-link" href="mailto:hello@kylepillay.dev"><Icon name="mail" size={20} /> hello@kylepillay.dev</a>
            <div className="social-links">
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
              <a href="https://youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><Icon name="youtube" /></a>
              <a href="mailto:hello@kylepillay.dev" aria-label="Email"><Icon name="mail" /></a>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <label><span>Your name</span><input required name="name" type="text" placeholder="How should I address you?" /></label>
            <label><span>Email address</span><input required name="email" type="email" placeholder="you@company.com" /></label>
            <label><span>Tell me about your idea</span><textarea required name="message" rows={5} placeholder="A little about the project, timeline, or goal..." /></label>
            <button className="button button-primary" type="submit">{sent ? "Message received" : "Send message"} <Icon name="arrow" size={18} /></button>
            {sent && <p className="form-success" role="status">Thank you. I'll be in touch soon.</p>}
          </form>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">KP<span>.</span></a>
        <p>Designed and developed with intention.</p>
        <span>© {new Date().getFullYear()} Kyle Pillay</span>
      </footer>
    </div>
  );
}

export default App;
