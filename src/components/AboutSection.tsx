import { Code2, Coffee, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "J'écris du code propre, maintenable et bien documenté.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimisation pour des applications rapides et efficaces.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Travail d'équipe et communication efficace.",
  },
  {
    icon: Coffee,
    title: "Passion",
    description: "Toujours en apprentissage, toujours curieux.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="font-mono text-primary mb-4">À propos</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Qui suis-je<span className="text-primary">?</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Développeur Full Stack passionné avec plusieurs années d'expérience
                dans la création d'applications web modernes et performantes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Je maîtrise les technologies front-end et back-end, et j'aime
                transformer des idées complexes en solutions élégantes et
                intuitives. Mon approche combine créativité technique et attention
                aux détails.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Quand je ne code pas, vous me trouverez en train d'explorer de
                nouvelles technologies, de contribuer à des projets open source,
                ou de partager mes connaissances avec la communauté.
              </p>

              {/* Code Block */}
              <div className="glass rounded-xl p-6 font-mono text-sm mt-8">
                <div className="text-muted-foreground">
                  <span className="text-accent">const</span>{" "}
                  <span className="text-primary">developer</span> = {"{"}
                </div>
                <div className="pl-4 text-muted-foreground">
                  <span className="text-foreground">name</span>:{" "}
                  <span className="text-green-400">"Votre Nom"</span>,
                </div>
                <div className="pl-4 text-muted-foreground">
                  <span className="text-foreground">role</span>:{" "}
                  <span className="text-green-400">"Full Stack Developer"</span>,
                </div>
                <div className="pl-4 text-muted-foreground">
                  <span className="text-foreground">loves</span>:{" "}
                  <span className="text-green-400">["React", "Node.js", "TypeScript"]</span>,
                </div>
                <div className="text-muted-foreground">{"}"}</div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
