import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
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
                alt="Autor destacado WeBook"
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
              María González
            </h2>
            
            <p className="text-lg text-muted-foreground italic">
              "Publicar con WeBook me permitió llegar a lectores sin intermediarios. 
              Cada libro impreso es una conexión real con alguien que eligió mi historia."
            </p>
            
            <p className="text-foreground">
              María es autora de "Voces del Sur", una colección de relatos que exploran 
              la identidad chilena contemporánea. Su trabajo ha sido destacado por su 
              autenticidad y profundidad emocional.
            </p>
            
            <Button variant="coral" size="lg">
              Ver libro de María
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
