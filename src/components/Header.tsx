import webookLogo from "@/assets/logo-webook.png";

export const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 transition-smooth hover:opacity-80">
          <img src={webookLogo} alt="WeBook" className="h-8" />
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="https://webook.cl/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
          >
            Catálogo general
          </a>
          <a 
            href="https://webook.cl/pages/publica-con-nosotros" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
          >
            Publica con WeBook
          </a>
        </nav>
      </div>
    </header>
  );
};
