import { BookOpen, Mail, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">WeBook</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Plataforma chilena de publicación bajo demanda. 
              Parte del ecosistema WeCyberBook 2025.
            </p>
          </div>
          
          {/* Navegación */}
          <div>
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#productos" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#publicar" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Publica tu libro
                </a>
              </li>
              <li>
                <a href="#autores" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Autores
                </a>
              </li>
            </ul>
          </div>
          
          {/* Soporte */}
          <div>
            <h3 className="font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#faq" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#terminos" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Términos y condiciones
                </a>
              </li>
            </ul>
          </div>
          
          {/* Redes Sociales */}
          <div>
            <h3 className="font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-accent transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-accent transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-accent transition-smooth"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} WeBook - Autoediciones. Todos los derechos reservados.</p>
          <p className="mt-2">Publicación bajo demanda en Chile</p>
        </div>
      </div>
    </footer>
  );
};
