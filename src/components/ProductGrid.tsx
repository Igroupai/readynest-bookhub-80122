import { ProductCard } from "./ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

// Real products from WeBook autoediciones
const realProducts = [
  {
    id: "1",
    title: "Trazos Porteños",
    author: "Arte y Fotografía",
    description: "Una mirada artística a la ciudad portuaria de Valparaíso a través de trazos únicos.",
    price: "$34.800 CLP",
    image: "https://webook.cl/cdn/shop/files/Trazos_Portenos_19c20aa2-9122-48da-805e-617ab07b73cd.jpg?crop=center&height=600&width=400",
    shopifyUrl: "https://webook.cl/collections/autoediciones-weprint/products/trazos-portenos",
  },
  {
    id: "2",
    title: "A través de mi lente",
    author: "Claudia Cataldo",
    description: "Chile a través de la lente de una fotógrafa apasionada.",
    price: "$18.600 CLP",
    image: "https://webook.cl/cdn/shop/files/PortadaChileaAtravesdemiLente.jpg?crop=center&height=600&width=400",
    shopifyUrl: "https://webook.cl/collections/autoediciones-weprint/products/a-traves-de-mi-lente",
  },
  {
    id: "3",
    title: "Corazón del Desierto",
    author: "Naturaleza",
    description: "Explora el corazón del desierto más árido del mundo.",
    price: "$28.800 CLP",
    image: "https://webook.cl/cdn/shop/files/PortadaCorazondeldesiertoWeb.jpg?crop=center&height=600&width=400",
    shopifyUrl: "https://webook.cl/collections/autoediciones-weprint/products/corazon-del-desierto",
  },
  {
    id: "4",
    title: "Malecón",
    author: "Literatura",
    description: "Una historia que recorre los malecones de la memoria.",
    price: "$38.900 CLP",
    image: "https://webook.cl/cdn/shop/files/portada-malecon.png?crop=center&height=600&width=400",
    shopifyUrl: "https://webook.cl/collections/autoediciones-weprint/products/malecon",
  },
  {
    id: "5",
    title: "Chile Medio",
    author: "Fotografía",
    description: "Un recorrido visual por el Chile central.",
    price: "$39.800 CLP",
    image: "https://webook.cl/cdn/shop/files/portada-chilemedioesp.jpg?crop=center&height=600&width=400",
    shopifyUrl: "https://webook.cl/collections/autoediciones-weprint/products/chile-medio",
  },
  {
    id: "6",
    title: "Las Aventuras de Mía",
    author: "Infantil Juvenil",
    description: "Aventuras emocionantes para jóvenes lectores.",
    price: "$19.800 CLP",
    image: "https://webook.cl/cdn/shop/files/PortadaWebLasAventurasdeMia.jpg?crop=center&height=600&width=400",
    shopifyUrl: "https://webook.cl/collections/autoediciones-weprint/products/las-aventuras-de-mia",
  },
  {
    id: "7",
    title: "Valparaíso en Movimiento",
    author: "Arte y Fotografía",
    description: "Valparaíso capturado en movimiento y color.",
    price: "$27.800 CLP",
    image: "https://webook.cl/cdn/shop/files/PortadaspaginawebValparaisoenMoviemnto.jpg?crop=center&height=600&width=400",
    shopifyUrl: "https://webook.cl/collections/autoediciones-weprint/products/valparaiso-en-movimiento",
  },
  {
    id: "8",
    title: "Una vida única, mil historias que contar",
    author: "Biografías y Memorias",
    description: "Memorias que inspiran y conectan generaciones.",
    price: "$25.000 CLP",
    image: "https://webook.cl/cdn/shop/files/Unavidaunica_milhistoriasquecontarportadaWeb.jpg?crop=center&height=600&width=400",
    shopifyUrl: "https://webook.cl/collections/autoediciones-weprint/products/una-vida-unica-mil-historias-que-contar",
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
          {realProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
