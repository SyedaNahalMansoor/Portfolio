import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./index.css";
import todoImg from "./assets/todo.png";
import atmImg from "./assets/atm.png";
import apiImg from "./assets/api.png";
import nootbookImg from "./assets/nootbook.png";
import chatBot from "./assets/chatbot.png";
import quiz from "./assets/quiz.png";
import qr from "./assets/qr.png";
import Shoot from "./assets/Shoot.png";
import TSA from "./assets/TSA.png";
import Resume from "./assets/Resume.png";
import Rock from "./assets/Rock.png";
import Cafe from "./assets/Cafe.png";
import HTMLcert from "./assets/HTML_Essentials_certificate.jpg";
import CSScert from "./assets/CSS_Essentials_certificate.jpg";
import Jscert from "./assets/JavaScript_Essentials_1_certificate.jpg";
import HTMLb from "./assets/HTMLEssentials.jpg";
import CSSb from "./assets/CSSEssentials.jpg";
import Jsb from "./assets/JavaScriptEssentials1.jpg";
import Femhack from "./assets/FemHack Hackathone.png";
import js from "./assets/Syeda Nahal Mansoor-js.jpg";
import bootstrap from "./assets/Syeda Nahal Mansoor-bootstrap.jpg";
import wma from "./assets/wma.jpg";
import hackathon from "./assets/hackathon.jpg";
import Skills from "./components/Skills";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const projects = [
    {
      id: 1,
      title: "Shoooting Game",
      desc: "An interactive shooting game with target shooting and score tracking",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/SyedaNahalMansoor/Space-Coin-Hunter",
      img: Shoot,
      view: "https://syedanahalmansoor.github.io/Space-Coin-Hunter/",
    },
    {
      id: 2,
      title: "The Success Academy",
      desc: "A responsive educational academy website for The Success Academy",
      tech: "HTML, CSS , Javascript",
      link: "https://github.com/SyedaNahalMansoor/TSA--2-",
      img: TSA,
      view: "https://thesuccessacademy.netlify.app/",
    },
    {
      id: 3,
      title: "NootBook",
      desc: "A note-taking ReactJS app with create, edit, and delete functionalities.",
      tech: "React.js",
      link: "https://github.com/SyedaNahalMansoor/Notebook-using-React-js",
      img: nootbookImg,
      view: "https://syedanahalmansoor.github.io/Notebook-using-React-js/",
    },
    {
      id: 4,
      title: "Stone , Paper , Scissors Game",
      desc: "An interactive Rock Paper Scissors game with score tracking",
      tech: "HTML, CSS , Javasrcipt",
      link: "https://github.com/SyedaNahalMansoor/Rock-Paper-Scissor-Game",
      img: Rock,
      view: "https://syedanahalmansoor.github.io/Rock-Paper-Scissor-Game/",
    },
    {
      id: 5,
      title: "Simple ATM Machine",
      desc: "Simulates ATM: check balance, withdraw, deposit.",
      tech: "HTML , CSS , Javascript",
      link: "https://github.com/SyedaNahalMansoor/Simple-ATM-Machine",
      img: atmImg,
      view: "https://syedanahalmansoor.github.io/Simple-ATM-Machine/",
    },
    {
      id: 6,
      title: "Quiz App JS",
      desc: "Timed quiz app with scoring system",
      tech: "HTML , CSS , JavaScript",
      link: "https://github.com/SyedaNahalMansoor/Quiz-App",
      img: quiz,
      view: "https://syedanahalmansoor.github.io/Quiz-App/",
    },
    {
      id: 7,
      title: "Resume Builder",
      desc: "An interactive resume builder that allows users to create and customize resumes",
      tech: "HTML , CSS , JavaScript , React.js",
      link: "https://github.com/SyedaNahalMansoor/Resume-Builder",
      img: Resume,
      view: "https://syedanahalmansoor.github.io/Resume-Builder/",
    },
    {
      id: 8,
      title: "Todo App",
      desc: "A simple app to manage daily tasks with add, delete.",
      tech: "HTML, CSS , Javasrcipt",
      link: "https://github.com/SyedaNahalMansoor/To-do-App",
      img: todoImg,
      view: "https://syedanahalmansoor.github.io/To-do-App/",
    },
    {
      id: 9,
      title: "QR-Generator",
      desc: "Simple QR Generator",
      tech: "JavaScript",
      link: "https://github.com/SyedaNahalMansoor/QR--Generator",
      img: qr,
      view: "https://syedanahalmansoor.github.io/QR--Generator/",
    },
    {
      id: 10,
      title: "Cahtbot AI",
      desc: "Chatbot AI with limited question (not responsive)",
      tech: "HTML , CSS , JavaScript",
      link: "https://github.com/SyedaNahalMansoor/ChatBot-AI",
      img: chatBot,
      view: "https://syedanahalmansoor.github.io/ChatBot-AI/",
    },
    {
      id: 11,
      title: "API Project",
      desc: "Fetches data from external APIs and displays it dynamically on the web page.",
      tech: "JavaScript",
      link: "https://github.com/SyedaNahalMansoor/API-s-Projects-Recipe.com",
      img: apiImg,
      view: "https://syedanahalmansoor.github.io/API-s-Projects-Recipe.com/",
    },
    {
      id: 12,
      title: "Cafe Starda",
      desc: "A single page cafe service provider website",
      tech: "HTML, CSS , Javascript",
      link: "https://github.com/SyedaNahalMansoor/Cafe-Starda",
      img: Cafe,
      view: "https://cafe-starda.vercel.app/",
    },
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#hero" className="brand">
            SNM<span>.</span>
          </a>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#achievements" onClick={() => setMenuOpen(false)}>
              Certificates
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      {/* Hero */}
      <section id="hero" className="hero">
        <div className="hero-container">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="eyebrow-dot"></span>
              HELLO, I'M
            </div>

            <h1 className="hero-title">
              <span className="hero-first-name">Syeda Nahal</span>
              <span>Mansoor.</span>
            </h1>

            <div className="hero-role">
              <span>Front-End Developer</span>
              <b>&</b>
              <span>Computer Science Student</span>
            </div>

            <p className="hero-description">
              I build clean, interactive and modern web experiences that turn
              ideas into meaningful digital products.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="hero-primary-btn">
                View My Work
                <span>↗</span>
              </a>

              <a href="#contact" className="hero-secondary-btn">
                Let's Connect
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/SyedaNahalMansoor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/syedanahalmansoor/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/+923249232788"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Right Hero Visual */}
          <div className="hero-visual">
            <div className="visual-bg-text">01</div>

            <div className="visual-word">BUILD</div>

            <div className="hero-avatar-stage">
              <div className="avatar-light"></div>

              <div className="avatar-image">
                <img
                  src="https://thumbs.dreamstime.com/b/png-d-render-woman-working-laptop-digital-avatar-professional-technology-against-transparent-background-384935566.jpg"
                  alt="Syeda Nahal Mansoor"
                />
              </div>
            </div>

            <div className="visual-side-text">
              <span>CREATE</span>
              <span>DEPLOY</span>
            </div>

            <div className="visual-info">
              <div>
                <small>FOCUS</small>
                <strong>Web Experiences</strong>
              </div>

              <div className="info-line"></div>

              <div>
                <small>STACK</small>
                <strong>React · JavaScript</strong>
              </div>

              <div className="info-arrow">↗</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span></span>
          Scroll to explore
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-heading">
            <span className="section-tag">ABOUT ME</span>

            <h2>
              Turning ideas into
              <span> digital experiences.</span>
            </h2>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p>
                Hi! I'm Syeda Nahal Mansoor, a Computer Science student and
                Front-End Developer who enjoys creating clean, interactive, and
                visually appealing web experiences.
              </p>

              <p>
                I love turning ideas into real projects and continuously
                improving my skills by exploring new technologies and building
                practical applications.
              </p>

              <p>
                My goal is to grow as a developer, work on meaningful projects,
                and create modern web solutions that are both functional and
                enjoyable to use.
              </p>

              <div className="about-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Firebase</span>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <h3>12+</h3>
                <p>Projects Built</p>
              </div>

              <div className="stat-card">
                <h3>7+</h3>
                <p>Technologies</p>
              </div>

              <div className="stat-card">
                <h3>13+</h3>
                <p>Certifications</p>
              </div>

              <div className="stat-card">
                <h3>∞</h3>
                <p>Things To Learn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />

      {/* Projects */}
      <section id="projects" className="page projects">
        <div className="section-heading">
          <span className="section-tag">MY WORK</span>
          <h1>Things I've Built</h1>
          <p>
            A collection of projects I've created while learning, experimenting,
            and building for the web.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="featured-projects">
          {projects.slice(0, 3).map((p) => (
            <div className="featured-project" key={p.id}>
              <div className="featured-image">
                <img src={p.img} alt={p.title} />

                <div className="image-overlay">
                  <a href={p.view} target="_blank" rel="noopener noreferrer">
                    Live Demo ↗
                  </a>
                </div>
              </div>

              <div className="featured-content">
                <span className="project-number">0{p.id}</span>

                <h2>{p.title}</h2>

                <p>{p.desc}</p>

                <div className="tech-stack">
                  {p.tech.split(",").map((tech, index) => (
                    <span key={index}>{tech.trim()}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={p.view}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-live"
                  >
                    View Project ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining Projects */}

        <div className="projects-grid modern-project-grid">
          {projects.slice(3).map((p) => (
            <div className="modern-project-card" key={p.id}>
              <div className="project-image">
                <img src={p.img} alt={p.title} />

                <a
                  href={p.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-arrow"
                >
                  ↗
                </a>
              </div>

              <div className="project-card-content">
                <span className="project-number">
                  {String(p.id).padStart(2, "0")}
                </span>

                <h3>{p.title}</h3>

                <p>{p.desc}</p>

                <div className="tech-stack">
                  {p.tech.split(",").map((tech, index) => (
                    <span key={index}>{tech.trim()}</span>
                  ))}
                </div>

                <div className="card-links">
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                    GitHub
                  </a>

                  <a href={p.view} target="_blank" rel="noopener noreferrer">
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section id="achievements" className="certifications">
        <div className="section-heading">
          <span>MY ACHIEVEMENTS</span>
          <h2>Certifications & Learning</h2>
          <p>
            A collection of certifications and achievements I've earned while
            continuously learning and improving my skills.
          </p>
        </div>

        <div className="cert-grid">
          <div className="cert-card">
            <div className="cert-image">
              <img src={wma} alt="Modern Web App Development Certificate" />
            </div>

            <div className="cert-content">
              <span className="cert-type">CERTIFICATION</span>
              <h3>Modern Web App Development Certificate</h3>
              <p>
                Saylani Mass IT Training (SMIT) Web & App Development course
                covering modern frontend and backend technologies.
              </p>

              <a
                href="/Certificates/WMA-Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                View Certificate <span>↗</span>
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-image">
              <img src={hackathon} alt="FemHack Certificate" />
            </div>

            <div className="cert-content">
              <span className="cert-type">ACHIEVEMENT</span>
              <h3>FemHack SMIT 2026</h3>
              <p>
                Certificate of participation in FEMHACK by Saylani Mass IT
                Training.
              </p>

              <a
                href="/Certificates/Femhack-Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                View Certificate <span>↗</span>
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-image">
              <img src={HTMLcert} alt="HTML Essentials Certificate" />
            </div>

            <div className="cert-content">
              <span className="cert-type">CERTIFICATION</span>
              <h3>HTML Essentials</h3>
              <p>
                Cisco Networking Academy through Saylani Mass IT Training
                (SMIT).
              </p>

              <a
                href="/Certificates/HTML_Essentials_certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                View Certificate <span>↗</span>
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-image">
              <img src={HTMLb} alt="HTML Essentials Badge" />
            </div>

            <div className="cert-content">
              <span className="cert-type">DIGITAL BADGE</span>
              <h3>HTML Essentials Badge</h3>
              <p>
                HTML Essentials digital badge awarded by Cisco Networking
                Academy via SMIT.
              </p>

              <a
                href="/Certificates/HTMLEssentials badge.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                View Badge <span>↗</span>
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-image">
              <img src={CSScert} alt="CSS Essentials Certificate" />
            </div>

            <div className="cert-content">
              <span className="cert-type">CERTIFICATION</span>
              <h3>CSS Essentials</h3>
              <p>
                CSS Essentials certification from Cisco Networking Academy via
                Saylani Mass IT Training.
              </p>

              <a
                href="/Certificates/CSS_Essentials_certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                View Certificate <span>↗</span>
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-image">
              <img src={CSSb} alt="CSS Essentials Badge" />
            </div>

            <div className="cert-content">
              <span className="cert-type">DIGITAL BADGE</span>
              <h3>CSS Essentials Badge</h3>
              <p>
                CSS Essentials digital badge awarded by Cisco Networking Academy
                through SMIT.
              </p>

              <a
                href="/Certificates/CSSEssentials badge.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                View Badge <span>↗</span>
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-image">
              <img src={Jscert} alt="JavaScript Essentials Certificate" />
            </div>

            <div className="cert-content">
              <span className="cert-type">CERTIFICATION</span>
              <h3>JavaScript Essentials 1</h3>
              <p>
                JavaScript Essentials 1 certification from Cisco Networking
                Academy through SMIT.
              </p>

              <a
                href="/Certificates/JavaScript_Essentials_1_certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                View Certificate <span>↗</span>
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-image">
              <img src={Jsb} alt="JavaScript Essentials Badge" />
            </div>

            <div className="cert-content">
              <span className="cert-type">DIGITAL BADGE</span>
              <h3>JavaScript Essentials 1 Badge</h3>
              <p>JavaScript Essentials 1 digital badge awarded through SMIT.</p>

              <a
                href="/Certificates/JavaScriptEssentials1 badge.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                View Badge <span>↗</span>
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-image">
              <img src={Femhack} alt="FemHack Certificate" />
            </div>

            <div className="cert-content">
              <span className="cert-type">ACHIEVEMENT</span>
              <h3>FemHack SMIT 2025</h3>
              <p>
                Certificate of participation in FEMHACK by Saylani Mass IT
                Training.
              </p>

              <a
                href="/Certificates/Femhack Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                View Certificate <span>↗</span>
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-image">
              <img src={js} alt="JavaScript Certification" />
            </div>

            <div className="cert-content">
              <span className="cert-type">CERTIFICATION</span>
              <h3>JavaScript Test</h3>
              <p>
                Successfully passed a JavaScript test demonstrating core
                JavaScript knowledge.
              </p>

              <a
                href="/Certificates/Syeda Nahal Mansoor js.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                View Certificate <span>↗</span>
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-image">
              <img src={bootstrap} alt="Bootstrap Advanced Certificate" />
            </div>

            <div className="cert-content">
              <span className="cert-type">CERTIFICATION</span>
              <h3>Bootstrap Advanced</h3>
              <p>
                Advanced Bootstrap certification focusing on responsive and
                modern UI development.
              </p>

              <a
                href="/Certificates/Syeda Nahal Mansoor bootstrap.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                View Certificate <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <span className="section-tag">GET IN TOUCH</span>

            <h2>
              Let's build something
              <span> great together.</span>
            </h2>

            <p>
              Have a project idea, collaboration in mind, or just want to say
              hello? Feel free to reach out. I'd love to hear from you.
            </p>

            <div className="contact-email">
              <div className="email-icon">✉</div>

              <div>
                <small>Email me at</small>
                <a href="mailto:nahalsyeda@gmail.com">nahalsyeda@gmail.com</a>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/SyedaNahalMansoor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/syedanahalmansoor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://wa.me/+923249232788"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="form-heading">
              <h3>Send me a message</h3>
              <p>I'll get back to you as soon as possible.</p>
            </div>

            <form
              action="https://formspree.io/f/manbqjzq"
              method="POST"
              className="modern-contact-form"
            >
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                Send Message
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              SNM<span>.</span>
            </a>

            <p>Building modern web experiences with code & creativity.</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>

            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Certificates</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <h3>Connect With Me</h3>

            <div className="social-icons">
              <a
                href="https://github.com/SyedaNahalMansoor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/syedanahalmansoor/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a href="mailto:nahalsyeda@gmail.com" aria-label="Email">
                ✉
              </a>

              <a
                href="https://wa.me/+923249232788"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Syeda Nahal Mansoor. All Rights Reserved.</p>

          <a href="#hero" className="back-top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
