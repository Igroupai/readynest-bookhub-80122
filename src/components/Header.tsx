import { BookOpen } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 transition-smooth hover:opacity-80">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary">WeBook</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#catalogo" 
            className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
          >
            Catálogo general
          </a>
          <a 
            href="#publicar" 
            className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
          >
            Publica con WeBook
          </a>
        </nav>
      </div>
    </header>
  );
};
