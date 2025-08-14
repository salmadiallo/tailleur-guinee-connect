import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const TailorSelection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const tailors = [
    {
      id: 1,
      name: "Mamadou Diallo",
      location: "Kaloum, Conakry",
      rating: 4.9,
      reviews: 156,
      specialties: ["Boubou", "Costume", "Robe"],
      deliveryTime: "2-3 jours",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      badges: ["Ponctuel", "Créatif"],
      experience: "15 ans"
    },
    {
      id: 2,
      name: "Fatoumata Camara",
      location: "Ratoma, Conakry",
      rating: 4.8,
      reviews: 89,
      specialties: ["Robe", "Broderie", "Ensemble"],
      deliveryTime: "3-4 jours",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c667d649?w=100&h=100&fit=crop&crop=face",
      badges: ["Expert Broderie", "Créative"],
      experience: "12 ans"
    },
    {
      id: 3,
      name: "Ibrahima Conté",
      location: "Matoto, Conakry",
      rating: 4.7,
      reviews: 124,
      specialties: ["Costume", "Chemise", "Pantalon"],
      deliveryTime: "2-3 jours",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      badges: ["Élégant", "Ponctuel"],
      experience: "10 ans"
    },
    {
      id: 4,
      name: "Mariama Bah",
      location: "Dixinn, Conakry",
      rating: 4.9,
      reviews: 201,
      specialties: ["Boubou", "Robe", "Caftan"],
      deliveryTime: "1-2 jours",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      badges: ["Rapide", "Qualité Premium"],
      experience: "18 ans"
    }
  ];

  const filteredTailors = tailors.filter(tailor => {
    const matchesSearch = tailor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tailor.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || selectedCategory === 'all' || tailor.specialties.includes(selectedCategory);
    const matchesLocation = !selectedLocation || selectedLocation === 'all' || tailor.location.includes(selectedLocation);
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Choisissez votre tailleur</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sélectionnez le tailleur qui correspond le mieux à vos besoins et commencez votre commande
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Rechercher un tailleur..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Spécialité" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">Toutes les spécialités</SelectItem>
                  <SelectItem value="Boubou">Boubou</SelectItem>
                  <SelectItem value="Costume">Costume</SelectItem>
                  <SelectItem value="Robe">Robe</SelectItem>
                  <SelectItem value="Chemise">Chemise</SelectItem>
                  <SelectItem value="Broderie">Broderie</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Localisation" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">Toutes les zones</SelectItem>
                  <SelectItem value="Kaloum">Kaloum</SelectItem>
                  <SelectItem value="Ratoma">Ratoma</SelectItem>
                  <SelectItem value="Matoto">Matoto</SelectItem>
                  <SelectItem value="Dixinn">Dixinn</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Plus de filtres
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredTailors.map((tailor) => (
            <Card key={tailor.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={tailor.avatar}
                    alt={tailor.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold">{tailor.name}</h3>
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin className="w-3 h-3 mr-1" />
                          {tailor.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-medium">{tailor.rating}</span>
                          <span className="text-gray-600 text-sm">({tailor.reviews})</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <Clock className="w-3 h-3 mr-1" />
                          {tailor.deliveryTime}
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {tailor.specialties.map((specialty) => (
                          <Badge key={specialty} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {tailor.badges.map((badge) => (
                          <Badge key={badge} className="bg-green-100 text-green-800 text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Expérience: {tailor.experience}
                      </span>
                      <div className="space-x-2">
                        <Link to={`/tailor/${tailor.id}`}>
                          <Button variant="outline" size="sm">
                            Voir profil
                          </Button>
                        </Link>
                        <Link to={`/order?tailor=${tailor.id}`}>
                          <Button className="gradient-gold text-white" size="sm">
                            Choisir ce tailleur
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTailors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Aucun tailleur trouvé avec ces critères.</p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
                setSelectedLocation('');
              }}
              variant="outline"
              className="mt-4"
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TailorSelection;