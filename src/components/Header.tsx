
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { User, Bell, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-gold rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MT</span>
            </div>
            <h1 className="text-xl font-bold text-gradient">MonTailleurGn</h1>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Accueil</Link>
            <Link to="/search-tailors" className="text-gray-700 hover:text-primary transition-colors">Tailleurs</Link>
            <Link to="/chat" className="text-gray-700 hover:text-primary transition-colors">Messages</Link>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">Comment ça marche</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-accent text-white text-xs">
                  3
                </Badge>
              </Button>
            </div>

            {/* User Profile */}
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <Link to="/signup">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Devenir Tailleur
                </Button>
              </Link>
              <Link to="/login">
                <Button className="gradient-gold text-white hover:opacity-90">
                  Se connecter
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 animate-slide-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Accueil</Link>
              <Link to="/search-tailors" className="text-gray-700 hover:text-primary transition-colors">Tailleurs</Link>
              <Link to="/chat" className="text-gray-700 hover:text-primary transition-colors">Messages</Link>
              <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">Comment ça marche</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <Link to="/signup">
                  <Button variant="outline" className="border-primary text-primary w-full">
                    Devenir Tailleur
                  </Button>
                </Link>
                <Link to="/login">
                  <Button className="gradient-gold text-white w-full">
                    Se connecter
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
