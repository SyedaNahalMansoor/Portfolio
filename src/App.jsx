import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./index.css";
import todoImg from "./assets/todo.png";
import atmImg from "./assets/atm.png";
import apiImg from "./assets/api.png";
import nootbookImg from "./assets/nootbook.png";
import chatBot from "./assets/chatbot.png";
import quiz from "./assets/quiz.png";
import qr from "./assets/qr.png";

export default function App() {
  const projects = [
    {
      id: 1,
      title: "Todo App",
      desc: "A simple app to manage daily tasks with add, delete.",
      tech: "HTML, CSS , Javascipt",
      link: "https://github.com/SyedaNahalMansoor/To-do-App",
      img: todoImg,
      view: "https://syedanahalmansoor.github.io/To-do-App/"
    },
    {
      id: 2,
      title: "Simple ATM Machine",
      desc: "Simulates ATM transactions: check balance, withdraw, deposit.",
      tech: "HTML , CSS , Javascript",
      link: "https://github.com/SyedaNahalMansoor/Simple-ATM-Machine",
      img: atmImg,
      view: "https://syedanahalmansoor.github.io/Simple-ATM-Machine/"

    },
    {
      id: 3,
      title: "Quiz App JS",
      desc: "Timed quiz app with scoring system",
      tech: "HTML , CSS , JavaScript",
      link: "https://github.com/SyedaNahalMansoor/Quiz-App",
      img: quiz,
      view: "https://syedanahalmansoor.github.io/Quiz-App/"
    },
    {
      id: 4,
      title: "QR-Generator",
      desc: "Simple QR Generator",
      tech: "JavaScript",
      link: "https://github.com/SyedaNahalMansoor/QR--Generator",
      img: qr,
      view: "https://syedanahalmansoor.github.io/QR--Generator/"
    },
    {
      id: 5,
      title: "Cahtbot AI",
      desc: "Chatbot AI with limited question (not responsive)",
      tech: "HTML , CSS , JavaScript",
      link: "https://github.com/SyedaNahalMansoor/ChatBot-AI",
      img: chatBot,
      view: "https://syedanahalmansoor.github.io/ChatBot-AI/"
    },
    {
      id: 6,
      title: "API Project",
      desc: "Fetches data from external APIs and displays it dynamically on the web page.",
      tech: "JavaScript",
      link: "https://github.com/SyedaNahalMansoor/API-s-Projects-Recipe.com",
      img: apiImg,
      view: "https://syedanahalmansoor.github.io/API-s-Projects-Recipe.com/"
    },
    {
      id: 7,
      title: "NootBook",
      desc: "A note-taking ReactJS app with create, edit, and delete functionalities.",
      tech: "React.js",
      link: "https://github.com/SyedaNahalMansoor/Notebook-using-React-js",
      img: nootbookImg,
      view: "https://syedanahalmansoor.github.io/Notebook-using-React-js/~"
    }
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#hero" className="brand">Syeda Nahal Mansoor</a>
          <div className="nav-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Certificates</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>Hi, I’m Syeda Nahal Mansoor</h1>
            <p>Front-End Developer • Student</p>
            <div className="hero-btns">
              <a href="#projects" className="btn">My Work</a>
              <a href="#contact" className="btn-outline">Make It Happen</a>
            </div>
          </div>
          <div className="hero-avatar">
            <img src="https://thumbs.dreamstime.com/b/png-d-render-woman-working-laptop-digital-avatar-professional-technology-against-transparent-background-384935566.jpg" alt="Avatar" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="page about">
        <h1>About Me</h1>
        <p>
          I am a front-end developer learning React, JavaScript, HTML & CSS.  
          I love creating clean, colorful, and interactive web pages,currently a student at Saylani Mass IT Training.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="page projects">
        <h1>Projects</h1>
        <div className="projects-grid">
          {projects.map(p => (
            <div key={p.id} className="project-card">
              <img src={p.img} alt={p.title} />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <small>{p.tech}</small>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-icon">
                  <FaGithub />
                </a>
                <a href={p.view} target="_blank" rel="noopener noreferrer" className="btn btn-small">
                  View
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section id="achievements" className="page achievements">
        <h1>Achievements & Certifications</h1>
      
        <div className="cert-grid">
          <div className="cert-card">
            <img src="./src/assets/HTML_Essentials_certificate.jpg" alt="html cisco Certificate" />
            <h3>HTML Essentials</h3>
            <p>Earned HTML Essentials certificate from Cisco Networking Academy through Saylani Mass IT Training (SMIT).</p>
            <a
              href="./Certificates/HTML_Essentials_certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small"
            >
              View Certificate
            </a>
          </div>

          <div className="cert-card">
            <img src="./src/assets/HTMLEssentials.jpg" alt="html cisco badge" />
            <h3>HTML Essentials Badge</h3>
            <p>Awarded HTML Essentials digital badge by Cisco Networking Academy via Saylani Mass IT Training (SMIT).</p>
            <a
              href="./Certificates/HTMLEssentials badge.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small"
            >
              View Badge
            </a>
          </div>


          <div className="cert-card">
            <img src="./src/assets/CSS_Essentials_certificate.jpg" alt="css cisco Certificate" />
            <h3>CSS Essentials</h3>
            <p>Completed CSS Essentials certification from Cisco Networking Academy via Saylani Mass IT Training (SMIT).</p>
            <a
              href="./Certificates/CSS_Essentials_certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small"
            >
              View Certificate
            </a>
          </div>

          <div className="cert-card">
            <img src="./src/assets/CSSEssentials.jpg" alt="css cisco badge" />
            <h3>CSS Essentials Badge</h3>
            <p>Received CSS Essentials badge from Cisco Networking Academy through Saylani Mass IT Training (SMIT).</p>
            <a
              href="./Certificates/CSSEssentials badge.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small"
            >
              View Badge
            </a>
          </div>

          <div className="cert-card">
            <img src="./src/assets/JavaScript_Essentials_1_certificate.jpg" alt="javascript cisco Certificate" />
            <h3>Javascript Essentials 1</h3>
            <p>  Achieved JavaScript Essentials 1 certificate from Cisco Networking Academy through Saylani Mass IT Training (SMIT).</p>
            <a
              href="./Certificates/JavaScript_Essentials_1_certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small"
            >
              View Certificate
            </a>
          </div>

          <div className="cert-card">
            <img src="./src/assets/JavaScriptEssentials1.jpg" alt="javascript cisco badge" />
            <h3>Javascript Essentials 1 Badge</h3>
            <p>Earned JavaScript Essentials 1 badge from Cisco Networking Academy via Saylani Mass IT Training (SMIT).</p>
            <a
              href="./Certificates/JavaScript_Essentials_1_certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small"
            >
              View Badge
            </a>
          </div>

          <div className="cert-card">
            <img src="./src/assets/FemHack Hackathone.png" alt="femhack Certificate" />
            <h3>FemHack-SMIT</h3>
            <p>Participation in FEMHACK – Saylani Mass IT Training</p>
            <a
              href="./Certificates/Femhack Certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small"
            >
              View Certificate
            </a>
          </div>

          <div className="cert-card">
            <img src="./src/assets/Syeda Nahal Mansoor-cit.jpg" alt="cit proproofs certificate" />
            <h3>Operating Systems & Software Tools</h3>
            <p> Completed Operating Systems: Applications and Software Tools certification quiz from ProProfs.</p>
            <a
              href="./Certificates/Syeda Nahal Mansoor cit.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small"
            >
              View Certificate
            </a>
          </div>

          <div className="cert-card">
            <img src="./src/assets/Syeda Nahal Mansoor-html.jpg" alt="html proproofs certificate" />
            <h3>HTML Certification Quiz</h3>
            <p>Successfully completed HTML certification quiz from ProProfs, validating core HTML concepts.</p>
            <a
              href="./Certificates/Syeda Nahal Mansoor html.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small"
            >
              View Certificate
            </a>
          </div>

          <div className="cert-card">
            <img src="./src/assets/Syeda Nahal Mansoor-css.jpg" alt="css proproofs certificate" />
            <h3>CSS Certification Quiz</h3>
            <p> Passed CSS certification quiz from ProProfs, covering styling and layout fundamentals.</p>
            <a
              href="./Certificates/Syeda Nahal Mansoor css.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small"
            >
              View Certificate
            </a>
          </div> 

          <div className="cert-card">
            <img src="./src/assets/Syeda Nahal Mansoor-js.jpg" alt="js proproofs certificate" />
            <h3>Javascript Test </h3>
            <p>Successfully passed JavaScript test quiz from ProProfs, demonstrating understanding of core JS concepts.</p>
            <a
              href="./Certificates/Syeda Nahal Mansoor js.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small"
            >
              View Certificate
            </a>
          </div>

          <div className="cert-card">
            <img src="./src/assets/Syeda Nahal Mansoor-bootstrap.jpg" alt="bootstrap proproofs certificate" />
            <h3>Bootstrap Advanced</h3>
            <p>Achieved advanced Bootstrap certification from ProProfs, focusing on responsive and modern UI development.</p>
            <a
              href="./Certificates/Syeda Nahal Mansoor bootstrap.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small"
            >
              View Certificate
            </a>
          </div>
      
          
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="page contact">
        <h1>Contact</h1>
        <p>Email me: <a href="mailto:nahalsyeda@gmail.com">nahalsyeda@gmail.com</a></p>
        <form action="https://formspree.io/f/manbqjzq " method="POST" className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="foot-links">
          <a href="https://github.com/SyedaNahalMansoor" target="blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/syedanahalmansoor/" target="blank"><FaLinkedin /></a>
        </div>
        <p>© 2025 Syeda Nahal Mansoor. All Rights Reserved!</p>
      </footer>
    </div>
  );
}
