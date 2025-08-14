
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Star, Filter, Clock, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import tailorWorkshop1 from "@/assets/tailor-workshop-1.jpg";
import tailorWorkshop2 from "@/assets/tailor-workshop-2.jpg";
import tailorWorkshop3 from "@/assets/tailor-workshop-3.jpg";

const SearchTailors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const tailors = [
    {
      id: 1,
      name: "Mamadou Diallo",
      location: "Kaloum, Conakry",
      rating: 4.9,
      reviews: 156,
      specialties: ["Boubou", "Costume", "Robe"],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      coverImage: tailorWorkshop1,
      badges: ["Ponctuel", "Créatif"],
      price: "À partir de 50,000 GNF",
      delivery: "2-3 jours",
      distance: "1.2 km",
      description: "Spécialiste des vêtements traditionnels avec 15 ans d'expérience"
    },
    {
      id: 2,
      name: "Fatoumata Camara",
      location: "Ratoma, Conakry",
      rating: 4.8,
      reviews: 98,
      specialties: ["Robe", "Ensemble", "Broderie"],
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c667d649?w=100&h=100&fit=crop&crop=face",
      coverImage: tailorWorkshop2,
      badges: ["Rapide", "Qualité"],
      price: "À partir de 40,000 GNF",
      delivery: "1-2 jours",
      distance: "3.5 km",
      description: "Experte en couture féminine et broderie artisanale"
    },
    {
      id: 3,
      name: "Ibrahima Sow",
      location: "Matoto, Conakry",
      rating: 4.7,
      reviews: 201,
      specialties: ["Costume", "Chemise", "Pantalon"],
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      coverImage: tailorWorkshop3,
      badges: ["Expérimenté", "Ponctuel"],
      price: "À partir de 60,000 GNF",
      delivery: "3-4 jours",
      distance: "5.1 km",
      description: "Tailleur homme spécialisé dans les costumes modernes"
    },
    {
      id: 4,
      name: "Aissatou Baldé",
      location: "Dixinn, Conakry",
      rating: 4.9,
      reviews: 87,
      specialties: ["Robe de soirée", "Mariage", "Broderie"],
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      badges: ["Créative", "Luxe"],
      price: "À partir de 80,000 GNF",
      delivery: "4-7 jours",
      distance: "2.8 km",
      description: "Créatrice de robes de luxe pour événements spéciaux"
    },
    {
      id: 5,
      name: "Moussa Kaba",
      location: "Bambeto, Conakry",
      rating: 4.6,
      reviews: 143,
      specialties: ["Boubou", "Vêtement traditionnel", "Réparation"],
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      badges: ["Traditionnel", "Abordable"],
      price: "À partir de 30,000 GNF",
      delivery: "2-4 jours",
      distance: "4.2 km",
      description: "Gardien des traditions vestimentaires guinéennes"
    },
    {
      id: 6,
      name: "Mariama Diawara",
      location: "Hamdallaye, Conakry",
      rating: 4.8,
      reviews: 76,
      specialties: ["Enfant", "Famille", "Ensemble"],
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      badges: ["Famille", "Patients"],
      price: "À partir de 35,000 GNF",
      delivery: "2-3 jours",
      distance: "6.3 km",
      description: "Spécialisée dans les vêtements pour enfants et familles"
    }
  ];

  const filteredTailors = tailors.filter(tailor => {
    const matchesSearch = tailor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tailor.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCity = !selectedCity || selectedCity === 'all' || tailor.location.includes(selectedCity);
    const matchesSpecialty = !selectedSpecialty || selectedSpecialty === 'all' || tailor.specialties.includes(selectedSpecialty);
    
    return matchesSearch && matchesCity && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Trouvez votre tailleur idéal</h1>
          
          {/* Search Form */}
          <Card className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Rechercher un tailleur ou spécialité..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger>
                  <SelectValue placeholder="Ville" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">Toutes les villes</SelectItem>
                  <SelectItem value="Conakry">Conakry</SelectItem>
                  <SelectItem value="Kankan">Kankan</SelectItem>
                  <SelectItem value="Labé">Labé</SelectItem>
                  <SelectItem value="N'Zérékoré">N'Zérékoré</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger>
                  <SelectValue placeholder="Spécialité" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">Toutes spécialités</SelectItem>
                  <SelectItem value="Boubou">Boubou</SelectItem>
                  <SelectItem value="Costume">Costume</SelectItem>
                  <SelectItem value="Robe">Robe</SelectItem>
                  <SelectItem value="Broderie">Broderie</SelectItem>
                </SelectContent>
              </Select>
              
              <Button className="gradient-gold text-white">
                <Filter className="w-4 h-4 mr-2" />
                Filtrer
              </Button>
            </div>
          </Card>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredTailors.length} tailleur(s) trouvé(s)
          </p>
        </div>

        {/* Tailors Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredTailors.map((tailor) => (
            <Card key={tailor.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex">
                {/* Image */}
                <div className="w-32 h-32 bg-gray-200">
                  <img
                    src={tailor.coverImage}
                    alt={`Atelier de ${tailor.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <img
                        src={tailor.avatar}
                        alt={tailor.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{tailor.name}</h3>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-3 h-3 mr-1" />
                          {tailor.location} • {tailor.distance}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{tailor.rating}</span>
                        <span className="text-gray-600 text-sm">({tailor.reviews})</span>
                      </div>
                      <Badge className="bg-african-gold-light text-african-gold-dark">
                        <Clock className="w-3 h-3 mr-1" />
                        {tailor.delivery}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">{tailor.description}</p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {tailor.badges.map((badge) => (
                      <Badge key={badge} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {tailor.specialties.map((specialty) => (
                      <span key={specialty} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-primary">{tailor.price}</span>
                    <div className="flex space-x-2">
                      <Link to="/chat">
                        <Button size="sm" variant="outline">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Chat
                        </Button>
                      </Link>
                      <Link to={`/tailor/${tailor.id}`}>
                        <Button size="sm" variant="outline">
                          Voir profil
                        </Button>
                      </Link>
                      <Link to={`/order?tailor=${tailor.id}`}>
                        <Button size="sm" className="gradient-gold text-white">
                          Choisir
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredTailors.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Charger plus de résultats
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchTailors;
