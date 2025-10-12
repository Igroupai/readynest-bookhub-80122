
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import Newsletter from '@/components/home/Newsletter';

interface FooterColumnProps {
  title: string;
  links: {
    text: string;
    href: string;
  }[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="w-full sm:w-auto">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            to={link.href}
            className="text-sm text-gray-600 hover:text-primary transition-colors duration-200 underline-animation"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* About & Newsletter Section */}
          <div className="max-w-md">
            <Link to="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-primary">Book<span className="text-foreground">Bazaar</span></span>
            </Link>
            <p className="text-gray-600 mb-6">
              BookBazaar is your destination for discovering new worlds through literature. We offer a curated selection of books across all genres, with personalized recommendations to help you find your next favorite read.
            </p>
            <Newsletter />
          </div>
          
          {/* Links & Contact Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <FooterColumn
              title="Explore"
              links={[
                { text: "Categories", href: "/catalog" },
                { text: "Best Sellers", href: "/catalog?filter=bestsellers" },
                { text: "New Releases", href: "/catalog?filter=new-releases" },
                { text: "Special Offers", href: "/catalog?filter=offers" },
                { text: "Gift Cards", href: "/gift-cards" },
              ]}
            />
            
            <FooterColumn
              title="Company"
              links={[
                { text: "About Us", href: "/about" },
                { text: "Careers", href: "/careers" },
                { text: "Blog", href: "/blog" },
                { text: "Press", href: "/press" },
                { text: "Contact Us", href: "/contact" },
              ]}
            />
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 text-primary mt-0.5" />
                  <span className="text-sm text-gray-600">
                    123 Book Street<br />Reading, CA 90210
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-2 text-primary" />
                  <span className="text-sm text-gray-600">(555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-2 text-primary" />
                  <span className="text-sm text-gray-600">hello@bookbazaar.com</span>
                </li>
              </ul>
              
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© 2023 BookBazaar. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-primary transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-sm text-gray-500 hover:text-primary transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
