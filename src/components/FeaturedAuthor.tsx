import { Button } from "@/components/ui/button";
import { Quote, ArrowRight } from "lucide-react";
import authorImage from "@/assets/featured-author.jpg";

export const FeaturedAuthor = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-editorial">
              <img
                src={authorImage}
                alt="José Luis Alvarado - Fotógrafo y autor"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20 blur-2xl"></div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-accent mb-4">
              <Quote className="h-8 w-8" />
              <span className="text-sm font-semibold uppercase tracking-wider">Autor Destacado</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              José Luis Alvarado
            </h2>
            
            <p className="text-lg text-muted-foreground italic">
              "Creo en el poder de la fotografía para conectar a las personas con la naturaleza 
              y subrayar la urgencia de su conservación."
            </p>
            
            <p className="text-foreground">
              José Luis Alvarado es fotógrafo y padre de familia, comprometido a dejar un legado 
              de conciencia ambiental. Su trabajo captura la belleza de la naturaleza chilena y 
              destaca la importancia de su protección.
            </p>
            
            <Button variant="coral" size="lg" className="group" asChild>
              <a 
                href="https://webook.cl/blogs/autores-webook/jose-luis-alvarado" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Conocer al autor
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
