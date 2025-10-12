
import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
}

const SearchBar = ({ 
  placeholder = "Search for books, authors, or topics...", 
  className = "",
  onSearch 
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`relative flex items-center w-full max-w-md ${className}`}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full h-12 pl-4 pr-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/80 shadow-subtle focus:ring-2 focus:ring-primary/20 focus:border-transparent placeholder:text-gray-400 text-foreground transition-all duration-300"
      />
      <button 
        type="submit"
        className="absolute right-3 p-2 rounded-full text-muted-foreground hover:text-primary transition-colors duration-200"
        aria-label="Search"
      >
        <Search size={20} />
      </button>
    </form>
  );
};

export default SearchBar;
