import React from "react";
import gainguruImage from "../assets/gainguru.png";
import jobhuntImage from "../assets/jobhunt.png";
import iplImage from "../assets/ipl-pred.png";

const projects = [
  {
    id: 1,
    name: "JobHunt",
    description: "JobHunt is a full-featured job portal that connects job seekers with employers, offering job listings, applications, and admin management tools.",
    technologies: ["React", "Node.js", "Express","Redux", "MongoDB","Tailwind CSS"],
    features: [
      "User authentication and role-based access control",
      "Job listings with advanced filtering and search",
      "Job application system for candidates",
      "Admin dashboard to manage job posts",
      "Secure backend with protected routes and JWT auth",
      "Dynamic job visibility for specific admin edits",
      "Interactive UI with real-time feedback and form validation"
    ],
    image: jobhuntImage,
    github: "https://github.com/sagar252004/project-1",
    live: "https://project-1-pi-ashy.vercel.app/",
  },
  {
    id: 2,
    name: "GainGuru",
    description: "An investment portfolio tracker that provides real-time stock data, analytics, and performance reports.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Chart.js", "Bootstrap"],
    features: [
      "Real-time market data fetch",
      "Portfolio performance charts",
      "Historical price analysis",
      "User alerts and notifications",
      "Secure JWT-based authentication"
    ],
    image: gainguruImage,
    github: "https://github.com/sagar252004/GainGuru",
    live: "https://gain-guru-seven.vercel.app/",
  },
  {
    id: 3,
    name: "Ipl Win Prediction",
    description: "IPL Win Predictor is a machine learning-based web app that predicts the winning probabilities of IPL teams in real-time during a match, using match and delivery data.",
    technologies: ["Python", "Flask", "Pandas", "Pickle", "HTML", "CSS", "Scikit-learn" ],
    features: [
      "Real-time win probability prediction during matches",
      "Machine learning model trained on IPL match and delivery data",
      "Interactive UI to input match conditions (teams, score, overs, wickets)",
      "Dynamic probability visualization using charts",
      "Streamlit-based responsive web interface"
    ],
    image: iplImage,
    github: "https://github.com/sagar252004/Win-Predictor",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-2xl hover:shadow-xl transform transition duration-300 hover:scale-105 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-green-600 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <details className="mb-4">
                <summary className="cursor-pointer font-semibold">
                  Key Features
                </summary>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  {project.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </details>

              <div className="mt-auto flex space-x-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full hover:opacity-90 transition duration-300"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gradient-to-r from-yellow-400 to-red-500 px-4 py-2 rounded-full hover:opacity-90 transition duration-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
