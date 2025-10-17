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
            <div className="group p-8 rounded-2xl border transition-smooth" style={{ 
              background: 'linear-gradient(to bottom right, hsl(196, 100%, 22%, 0.05), hsl(196, 100%, 22%, 0.1))',
              borderColor: 'hsl(196, 100%, 22%, 0.2)'
            }}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6 group-hover:scale-110 transition-smooth" style={{
                backgroundColor: 'hsl(196, 100%, 22%, 0.1)'
              }}>
                <BookOpen className="h-7 w-7" style={{ color: 'hsl(196, 100%, 22%)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                Para Lectores
              </h3>
              <p className="text-muted-foreground mb-6">
                Explora más de 35.000 títulos en nuestro catálogo general. 
                Historias de editoriales independientes y grandes casas editoriales.
              </p>
              <Button variant="webook" size="lg" className="w-full" asChild>
                <a href="https://webook.cl/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: 'hsl(196, 100%, 22%)' }}>
                  Explorar todo el catálogo
                </a>
              </Button>
            </div>
            
            {/* Para Autores */}
            <div className="group p-8 rounded-2xl border transition-smooth" style={{ 
              background: 'linear-gradient(to bottom right, hsl(142, 76%, 36%, 0.05), hsl(142, 76%, 36%, 0.1))',
              borderColor: 'hsl(142, 76%, 36%, 0.2)'
            }}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6 group-hover:scale-110 transition-smooth" style={{
                backgroundColor: 'hsl(142, 76%, 36%, 0.1)'
              }}>
                <PenTool className="h-7 w-7" style={{ color: 'hsl(142, 76%, 36%)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                Para Autores
              </h3>
              <p className="text-muted-foreground mb-6">
                Publica tu libro sin inversión inicial desproporcionada. 
                Sin stock, sin intermediarios, con menor huella de carbono.
              </p>
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="mailto:marketing@webook.cl">
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
