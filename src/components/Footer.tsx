
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MT</span>
              </div>
              <h3 className="text-xl font-bold">MonTailleurGn</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              La plateforme qui connecte les tailleurs guinéens aux clients, 
              valorisant le savoir-faire artisanal local.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/search-tailors" className="text-gray-300 hover:text-white transition-colors">Tailleurs</Link></li>
              <li><Link to="/publications" className="text-gray-300 hover:text-white transition-colors">Galerie</Link></li>
              <li><Link to="/#how-it-works" className="text-gray-300 hover:text-white transition-colors">Comment ça marche</Link></li>
              <li><Link to="/#about" className="text-gray-300 hover:text-white transition-colors">À propos</Link></li>
            </ul>
          </div>

          {/* For Tailors */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Pour les tailleurs</h4>
            <ul className="space-y-2">
              <li><Link to="/tailor-dashboard" className="text-gray-300 hover:text-white transition-colors">Espace Tailleur</Link></li>
              <li><Link to="/signup" className="text-gray-300 hover:text-white transition-colors">Devenir partenaire</Link></li>
              <li><Link to="/chat" className="text-gray-300 hover:text-white transition-colors">Centre d'aide</Link></li>
              <li><Link to="/#pricing" className="text-gray-300 hover:text-white transition-colors">Tarifs</Link></li>
              <li><Link to="/#resources" className="text-gray-300 hover:text-white transition-colors">Ressources</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-gray-300">Conakry, Guinée</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-gray-300">+224 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-gray-300">contact@montailleur.gn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 MonTailleurGn. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
