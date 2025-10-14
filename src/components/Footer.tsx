import { BookOpen } from "lucide-react";

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
              webook.cl
            </p>
          </div>
          
          {/* Navegación */}
          <div>
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://webook.cl/collections/autoediciones-weprint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  Catálogo Autoediciones
                </a>
              </li>
              <li>
                <a 
                  href="https://webook.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  Catálogo General
                </a>
              </li>
              <li>
                <a 
                  href="https://webook.cl/pages/publica-con-nosotros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  Publica tu libro
                </a>
              </li>
              <li>
                <a 
                  href="https://webook.cl/blogs/autores-webook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  Autores
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="mailto:marketing@webook.cl"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  marketing@webook.cl
                </a>
              </li>
            </ul>
          </div>
          
          {/* Redes Sociales */}
          <div>
            <h3 className="font-semibold mb-4">Síguenos</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Visita nuestro sitio principal para más información
            </p>
            <a 
              href="https://webook.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-accent hover:text-accent/80 transition-smooth"
            >
              www.webook.cl →
            </a>
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
