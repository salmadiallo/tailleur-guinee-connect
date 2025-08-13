
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import heroTailor from "@/assets/hero-tailor.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-african-gold rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-african-terracotta rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-african-green rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Trouvez votre{' '}
              <span className="text-gradient">tailleur idéal</span>{' '}
              en Guinée
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Connectez-vous avec les meilleurs tailleurs guinéens. Commandez vos vêtements sur mesure, 
              suivez la confection en temps réel et recevez-les chez vous.
            </p>

            {/* Search Form */}
            <div className="bg-white rounded-2xl p-6 shadow-xl max-w-2xl mx-auto lg:mx-0 mb-8">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Type de vêtement..."
                    className="pl-10 border-gray-200 focus:border-primary"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Select>
                    <SelectTrigger className="pl-10 border-gray-200 focus:border-primary">
                      <SelectValue placeholder="Localisation" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 shadow-lg">
                      <SelectItem value="conakry">Conakry</SelectItem>
                      <SelectItem value="kankan">Kankan</SelectItem>
                      <SelectItem value="labe">Labé</SelectItem>
                      <SelectItem value="nzerekore">N'Zérékoré</SelectItem>
                      <SelectItem value="kindia">Kindia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Link to="/search-tailors">
                  <Button className="gradient-gold text-white hover:opacity-90 h-11 w-full">
                    Rechercher
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-gray-600">Tailleurs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">2,500+</div>
                <div className="text-sm text-gray-600">Commandes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroTailor}
                alt="Tailleur au travail"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 gradient-terracotta rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MT</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Mamadou Diallo</div>
                  <div className="text-sm text-gray-600">⭐ 4.9 • 150 commandes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
