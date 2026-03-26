import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Dentist Clinic Website",
    description:
      "Site web complet pour un cabinet dentaire avec prise de rendez-vous en ligne, gestion des patients et intégration d'une API pour les notifications par email. Construit avec React pour le front-end, Node.js & Express pour le back-end, et MongoDB comme base de données.",
    tech: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/ayoubhanine/DentisteWebsite",
    live: "https://dentist-website.example.com",
    featured: true,
  }
  ,{
    title: "E-Commerce Platform",
    description:
      "Plateforme e-commerce complète avec panier, paiement Stripe, et dashboard admin. Construite avec Next.js et Prisma.",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/ayoubhanine",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Application de gestion de tâches en temps réel avec collaboration d'équipe, drag & drop, et notifications.",
    tech: ["React", "Node.js",  "MongoDB"],
    github: "https://github.com/ayoubhanine",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "AI Chat Interface",
    description:
      "Interface de chat alimentée par l'IA avec streaming de réponses, historique de conversations, et thèmes personnalisables.",
    tech: ["React",  "Tailwind"],
    github: "https://github.com/ayoubhanine",
    live: "https://example.com",
    featured: true,
  },
];

const otherProjects = [
  {
    title: "Portfolio Template",
    description: "Template de portfolio moderne et responsive pour développeurs.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/ayoubhanine",
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard météo avec prévisions et visualisations interactives.",
    tech: ["Vue.js", "Chart.js", "API"],
    github: "https://github.com/ayoubhanine",
  },
  {
    title: "CLI Tool",
    description: "Outil en ligne de commande pour automatiser les tâches de développement.",
    tech: ["Node.js", "Commander"],
    github: "https://github.com/ayoubhanine",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="font-mono text-primary mb-4">Mon travail</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Projets<span className="text-primary">.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une sélection de projets sur lesquels j'ai travaillé récemment.
              Chaque projet représente un défi unique et une opportunité d'apprentissage.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Project Image Placeholder */}
                <div
                  className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="glass rounded-2xl aspect-video flex items-center justify-center group hover:border-primary/50 transition-all duration-500 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-secondary flex items-center justify-center">
                      <Folder className="w-16 h-16 text-primary/50 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                  <p className="font-mono text-primary text-sm mb-2">
                    Projet vedette
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {project.title}
                  </h3>
                  <div className="glass rounded-xl p-6 mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className={`flex flex-wrap gap-3 mb-6 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-sm text-primary bg-primary/10 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-12">
              Autres projets notables
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.title}
                  className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="flex justify-between items-start mb-4">
                    <Folder className="text-primary" size={40} />
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                  <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
