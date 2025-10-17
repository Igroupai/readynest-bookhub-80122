import { Button } from "@/components/ui/button";
import { Quote, Mail } from "lucide-react";

const authors = [
  {
    name: "José Luis Alvarado",
    description: "Fotógrafo comprometido con la conservación de la naturaleza chilena",
    quote: "Creo en el poder de la fotografía para conectar a las personas con la naturaleza y subrayar la urgencia de su conservación.",
    link: "https://webook.cl/blogs/autores-webook/jose-luis-alvarado",
  },
  {
    name: "Francisco Arce",
    description: "Autor de 'Teresa, una mujer transparente'",
    quote: "Una ficción literaria en la que Andrés dialoga durante un viaje con Santa Teresa de Los Andes.",
    link: "https://webook.cl/blogs/autores-webook/francisco-arce",
  },
  {
    name: "Pablo Pefaur",
    description: "Experto en negocios B2B",
    quote: "Ayudando a emprendedores y empresarios a crecer mediante prospección inteligente.",
    link: "https://webook.cl/blogs/autores-webook/pablo-pefaur",
  },
  {
    name: "Alicia Wolansky",
    description: "Escritora argentina radicada en Chile",
    quote: "Una vida llena de experiencias en varios países, plasmada en sus obras.",
    link: "https://webook.cl/blogs/autores-webook/alicia-wolansky",
  },
];

export const FeaturedAuthors = () => {
  return (
    <section className="py-20 bg-background" id="autores">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Quote className="h-8 w-8" style={{ color: 'hsl(142, 76%, 36%)' }} />
            <span className="text-sm font-semibold uppercase tracking-wider text-foreground">Autores WeBook</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conoce a Nuestros Autores
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Más de 180 autores independientes han logrado su sueño de publicar con WeBook
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {authors.map((author) => (
            <div
              key={author.name}
              className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">{author.name}</h3>
              <p className="text-sm text-foreground/90 mb-3 font-medium">{author.description}</p>
              <p className="text-sm text-foreground/70 italic mb-4">"{author.quote}"</p>
              <a
                href={author.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-smooth"
                style={{ color: 'hsl(196, 100%, 22%)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(142, 76%, 36%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(196, 100%, 22%)'}
              >
                Ver perfil →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="coral" size="lg" className="group" asChild>
            <a href="mailto:marketing@webook.cl">
              <Mail className="mr-2 h-5 w-5" />
              ¿Quieres ser el próximo autor WeBook? Más info acá
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
