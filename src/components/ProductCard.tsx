import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProductCardProps {
  title: string;
  author: string;
  description: string;
  price: string;
  image: string;
  shopifyUrl: string;
}

export const ProductCard = ({
  title,
  author,
  description,
  price,
  image,
  shopifyUrl,
}: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-lg shadow-card hover:shadow-card-hover transition-smooth overflow-hidden">
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={image}
          alt={`Portada de ${title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          loading="lazy"
        />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2 text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          {author}
        </p>
        <p className="text-sm text-foreground/80 mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Pricing */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-coral">
            {price}
          </span>
        </div>
        
        {/* CTA Button */}
        <Button 
          variant="outline" 
          className="w-full group/btn"
          asChild
        >
          <a href={shopifyUrl} target="_blank" rel="noopener noreferrer">
            Ver en tienda
            <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </div>
  );
};
