import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiFirebase, SiMongodb } from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    category: "Frontend",
    icon: <FaHtml5 />,
    description: "Semantic markup and clean, accessible web structure.",
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: <FaCss3Alt />,
    description: "Responsive layouts, Flexbox, Grid and modern UI styling.",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: <FaJs />,
    description: "DOM manipulation, events, logic and interactive interfaces.",
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: <FaReact />,
    description: "Component-based development and React fundamentals.",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: <FaBootstrap />,
    description: "Responsive layouts using Bootstrap components and utilities.",
  },
  {
    name: "Firebase",
    category: "Backend",
    icon: <SiFirebase />,
    description: "Authentication, database basics and project integration.",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: <FaNodeJs />,
    description: "Backend fundamentals and server-side JavaScript basics.",
  },
  {
    name: "MongoDB",
    category: "Backend",
    icon: <SiMongodb />,
    description: "Basic understanding of databases, collections and documents.",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    icon: <FaGithub />,
    description: "Version control, repositories, commits and deployment.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <div className="section-heading">
          <span className="section-label">MY TOOLKIT</span>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p>
            Technologies and tools I use to build modern, responsive
            and interactive web experiences.
          </p>
        </div>

        <div className="skills-grid-modern">
          {skills.map((skill) => (
            <div className="skill-modern-card" key={skill.name}>

              <div className="skill-icon">
                {skill.icon}
              </div>

              <div className="skill-content">
                <div className="skill-top">
                  <h3>{skill.name}</h3>
                  <span>{skill.category}</span>
                </div>

                <p>{skill.description}</p>
              </div>

              <div className="skill-arrow">
                ↗
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}