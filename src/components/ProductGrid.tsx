import { ProductCard } from "./ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

// Mock data - In production, this would come from Shopify API
const mockProducts = [
  {
    id: "1",
    title: "Voces del Sur",
    author: "María González",
    description: "Una colección de relatos que exploran la identidad chilena contemporánea.",
    price: "$12.990",
    discountedPrice: "$9.742",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    shopifyUrl: "#",
  },
  {
    id: "2",
    title: "El Camino de los Poetas",
    author: "Carlos Rivero",
    description: "Poesía contemporánea que dialoga con la tradición literaria latinoamericana.",
    price: "$14.990",
    discountedPrice: "$11.242",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    shopifyUrl: "#",
  },
  {
    id: "3",
    title: "Historias Mínimas",
    author: "Ana Torres",
    description: "Microrrelatos que capturan momentos cotidianos con profundidad emocional.",
    price: "$11.990",
    discountedPrice: "$8.992",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    shopifyUrl: "#",
  },
  {
    id: "4",
    title: "Memorias del Pacífico",
    author: "Jorge Pinto",
    description: "Crónicas de viaje por la costa chilena, entre naturaleza y cultura.",
    price: "$15.990",
    discountedPrice: "$11.992",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop",
    shopifyUrl: "#",
  },
  {
    id: "5",
    title: "Sueños en Blanco y Negro",
    author: "Patricia Montes",
    description: "Novela gráfica que explora la memoria familiar y la dictadura.",
    price: "$18.990",
    discountedPrice: "$14.242",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
    shopifyUrl: "#",
  },
  {
    id: "6",
    title: "La Voz de los Árboles",
    author: "Roberto Soto",
    description: "Ensayos sobre ecología y cosmovisión mapuche en el sur de Chile.",
    price: "$13.990",
    discountedPrice: "$10.492",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    shopifyUrl: "#",
  },
  {
    id: "7",
    title: "Ciudades Imaginarias",
    author: "Lucía Vargas",
    description: "Cuentos urbanos que retratan la vida en Santiago desde perspectivas únicas.",
    price: "$12.990",
    discountedPrice: "$9.742",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop",
    shopifyUrl: "#",
  },
  {
    id: "8",
    title: "Entre Cordilleras",
    author: "Miguel Herrera",
    description: "Novela de aventuras ambientada en los Andes chilenos.",
    price: "$16.990",
    discountedPrice: "$12.742",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop",
    shopifyUrl: "#",
  },
];

export const ProductGrid = () => {
  // In production, implement loading state with Shopify data
  const isLoading = false;

  if (isLoading) {
    return (
      <section id="productos" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[3/4] w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="productos" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Descubre Nuestras Autoediciones
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada libro fue creado por un autor WeBook, impreso solo cuando lo eliges. Sin stock, sin desperdicio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
