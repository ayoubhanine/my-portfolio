import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <a href="#hero" className="text-xl font-bold font-mono text-gradient">
              {"<Dev />"}
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/ayoubhanine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ayoub-hanine-996690222/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ayoubhanine2000@email.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>

           {/* Copyright */}
<p className="text-sm text-muted-foreground flex flex-col sm:flex-row items-center gap-1 justify-center">
  Fait avec <Heart size={14} className="text-primary" /> par Ayoub Hanine.  
  © {currentYear} Tous droits réservés.
</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
