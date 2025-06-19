
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock } from "lucide-react";

const FeaturedTailors = () => {
  const tailors = [
    {
      id: 1,
      name: "Mamadou Diallo",
      location: "Kaloum, Conakry",
      rating: 4.9,
      reviews: 156,
      specialties: ["Boubou", "Costume", "Robe"],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      badges: ["Ponctuel", "Créatif"],
      price: "À partir de 50,000 GNF",
      delivery: "2-3 jours"
    },
    {
      id: 2,
      name: "Fatoumata Camara",
      location: "Ratoma, Conakry",
      rating: 4.8,
      reviews: 98,
      specialties: ["Robe", "Ensemble", "Broderie"],
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c667d649?w=100&h=100&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      badges: ["Rapide", "Qualité"],
      price: "À partir de 40,000 GNF",
      delivery: "1-2 jours"
    },
    {
      id: 3,
      name: "Ibrahima Sow",
      location: "Matoto, Conakry",
      rating: 4.7,
      reviews: 201,
      specialties: ["Costume", "Chemise", "Pantalon"],
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      badges: ["Expérimenté", "Ponctuel"],
      price: "À partir de 60,000 GNF",
      delivery: "3-4 jours"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tailleurs recommandés
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos tailleurs les mieux notés, sélectionnés pour leur savoir-faire 
            et leur professionnalisme.
          </p>
        </div>

        {/* Tailors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tailors.map((tailor) => (
            <Card key={tailor.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Cover Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tailor.coverImage}
                  alt={`Atelier de ${tailor.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-gray-900">
                    <Clock className="w-3 h-3 mr-1" />
                    {tailor.delivery}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Avatar and Name */}
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={tailor.avatar}
                    alt={tailor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{tailor.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-3 h-3 mr-1" />
                      {tailor.location}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{tailor.rating}</span>
                  <span className="text-gray-600">({tailor.reviews} avis)</span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tailor.badges.map((badge) => (
                    <Badge key={badge} variant="secondary" className="bg-african-gold-light text-african-gold-dark">
                      {badge}
                    </Badge>
                  ))}
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Spécialités:</p>
                  <div className="flex flex-wrap gap-1">
                    {tailor.specialties.map((specialty) => (
                      <span key={specialty} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="font-medium text-primary">{tailor.price}</span>
                  </div>
                  <Button size="sm" className="gradient-gold text-white">
                    Voir le profil
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            Voir tous les tailleurs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTailors;
