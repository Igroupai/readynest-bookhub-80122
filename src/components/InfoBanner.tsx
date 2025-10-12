import { BookOpen, Leaf, Users } from "lucide-react";

export const InfoBanner = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Sin stock",
      description: "Cada libro se imprime cuando lo pides",
    },
    {
      icon: Leaf,
      title: "Sin desperdicio",
      description: "Publicación sostenible y responsable",
    },
    {
      icon: Users,
      title: "Sin intermediarios",
      description: "Conexión directa entre autores y lectores",
    },
  ];

  return (
    <section className="py-16 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Publicar distinto.
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Solo historias reales, impresas bajo demanda.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center space-y-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-smooth hover:bg-white/15"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-white/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
