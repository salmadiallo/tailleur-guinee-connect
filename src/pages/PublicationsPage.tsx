
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, MessageCircle, Share2, Filter, Search, Eye, Bookmark } from "lucide-react";
import Header from "@/components/Header";

const PublicationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  const publications = [
    {
      id: 1,
      title: "Nouvelle Collection Boubou Royal",
      description: "Découvrez ma nouvelle collection de boubous royaux avec broderies traditionnelles guinéennes.",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=400&fit=crop"
      ],
      tailor: {
        name: "Mamadou Diallo",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        verified: true
      },
      category: "Boubou",
      price: "85,000 GNF",
      likes: 142,
      comments: 23,
      shares: 15,
      date: "Il y a 2 heures",
      tags: ["traditionnel", "broderie", "luxe"]
    },
    {
      id: 2,
      title: "Costumes Modernes pour Événements",
      description: "Collection de costumes élégants parfaits pour vos événements spéciaux et réunions professionnelles.",
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop"
      ],
      tailor: {
        name: "Ibrahima Sow",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        verified: true
      },
      category: "Costume",
      price: "120,000 GNF",
      likes: 98,
      comments: 17,
      shares: 8,
      date: "Il y a 5 heures",
      tags: ["moderne", "élégant", "professionnel"]
    },
    {
      id: 3,
      title: "Robes de Soirée Exceptionnelles",
      description: "Des créations uniques pour vos soirées les plus importantes. Chaque robe est confectionnée sur mesure.",
      images: [
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=400&fit=crop"
      ],
      tailor: {
        name: "Aissatou Baldé",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        verified: true
      },
      category: "Robe",
      price: "95,000 GNF",
      likes: 205,
      comments: 34,
      shares: 22,
      date: "Il y a 1 jour",
      tags: ["soirée", "élégant", "sur-mesure"]
    },
    {
      id: 4,
      title: "Vêtements Enfants Colorés",
      description: "Collection spéciale pour nos petits princes et princesses avec des motifs africains authentiques.",
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1503944168634-28d7136d9e9e?w=500&h=400&fit=crop"
      ],
      tailor: {
        name: "Mariama Diawara",
        avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=50&h=50&fit=crop&crop=face",
        verified: false
      },
      category: "Enfant",
      price: "35,000 GNF",
      likes: 76,
      comments: 12,
      shares: 5,
      date: "Il y a 2 jours",
      tags: ["enfant", "coloré", "africain"]
    }
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || selectedCategory === 'all' || pub.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPublications = [...filteredPublications].sort((a, b) => {
    switch (sortBy) {
      case 'likes':
        return b.likes - a.likes;
      case 'comments':
        return b.comments - a.comments;
      case 'price_low':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'price_high':
        return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
      default:
        return 0; // recent par défaut
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Publications & Créations</h1>
          <p className="text-gray-600">Découvrez les dernières créations de nos tailleurs</p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">Toutes catégories</SelectItem>
                  <SelectItem value="Boubou">Boubou</SelectItem>
                  <SelectItem value="Costume">Costume</SelectItem>
                  <SelectItem value="Robe">Robe</SelectItem>
                  <SelectItem value="Enfant">Enfant</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="recent">Plus récent</SelectItem>
                  <SelectItem value="likes">Plus aimé</SelectItem>
                  <SelectItem value="comments">Plus commenté</SelectItem>
                  <SelectItem value="price_low">Prix croissant</SelectItem>
                  <SelectItem value="price_high">Prix décroissant</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Plus de filtres
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Publications Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {sortedPublications.map((publication) => (
            <Card key={publication.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Header */}
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={publication.tailor.avatar}
                      alt={publication.tailor.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{publication.tailor.name}</h3>
                        {publication.tailor.verified && (
                          <Badge className="bg-blue-100 text-blue-800 text-xs">Vérifié</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{publication.date}</p>
                    </div>
                  </div>
                  <Badge className="bg-primary/10 text-primary">{publication.category}</Badge>
                </div>
              </CardHeader>

              {/* Content */}
              <CardContent className="pb-4">
                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2">{publication.title}</h2>
                  <p className="text-gray-700">{publication.description}</p>
                </div>

                {/* Images */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {publication.images.map((image, index) => (
                    <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden group">
                      <img
                        src={image}
                        alt={`${publication.title} ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {publication.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">{publication.price}</span>
                  <Button size="sm" className="gradient-gold text-white">
                    <Eye className="w-4 h-4 mr-2" />
                    Voir détails
                  </Button>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span>{publication.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span>{publication.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span>{publication.shares}</span>
                    </button>
                  </div>
                  <button className="text-gray-600 hover:text-yellow-500 transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Charger plus de publications
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;
