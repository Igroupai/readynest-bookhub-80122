import { Button } from "@/components/ui/button";
import { BookOpen, PenTool } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Donde las historias encuentran su voz
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Únete a nuestra comunidad de lectores y autores independientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Para Lectores */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:border-primary/40 transition-smooth">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-smooth">
                <BookOpen className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                Para Lectores
              </h3>
              <p className="text-muted-foreground mb-6">
                Explora más de 35.000 títulos en nuestro catálogo general. 
                Historias de editoriales independientes y grandes casas editoriales.
              </p>
              <Button variant="default" size="lg" className="w-full" asChild>
                <a href="https://webook.cl/" target="_blank" rel="noopener noreferrer">
                  Explorar todo el catálogo
                </a>
              </Button>
            </div>
            
            {/* Para Autores */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 hover:border-accent/40 transition-smooth">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-6 group-hover:scale-110 transition-smooth">
                <PenTool className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                Para Autores
              </h3>
              <p className="text-muted-foreground mb-6">
                Publica tu libro sin inversión inicial desproporcionada. 
                Sin stock, sin intermediarios, con menor huella de carbono.
              </p>
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="https://webook.cl/pages/publica-con-nosotros" target="_blank" rel="noopener noreferrer">
                  Publica con nosotros
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
