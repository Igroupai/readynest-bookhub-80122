import { BookOpen, Leaf, Users } from "lucide-react";
import natureBackground from "@/assets/nature-background.jpg";

export const InfoBanner = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Sin inversión inicial",
      description: "Nuevos autores publican sin costos desproporcionados",
    },
    {
      icon: Leaf,
      title: "Menor huella de carbono",
      description: "Impresión bajo demanda que cuida el planeta",
    },
    {
      icon: Users,
      title: "Sin intermediarios",
      description: "Conexión directa entre autores y lectores",
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={natureBackground} 
          alt="Fondo natural con hojas verdes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Publicar distinto, cuidando el planeta.
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Impresión bajo demanda: menor huella de carbono, mayor oportunidad para nuevos autores.
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
