
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Plus, Grid, List } from "lucide-react";
import Header from "@/components/Header";
import PublishModal from "@/components/PublishModal";
import GalleryView from "@/components/GalleryView";

const PublicationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [viewMode, setViewMode] = useState<'gallery' | 'list'>('gallery');

  const publications = [
    {
      id: 1,
      title: "Boubou Royal Brodé",
      description: "Magnifique boubou traditionnel avec broderies dorées et motifs guinéens authentiques. Confectionné avec des tissus de haute qualité.",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1503944168634-28d7136d9e9e?w=500&h=400&fit=crop"
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
      tags: ["traditionnel", "broderie", "luxe", "guinéen"]
    },
    {
      id: 2,
      title: "Costume Moderne Élégant",
      description: "Costume trois pièces moderne parfait pour les événements professionnels et les cérémonies importantes.",
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
      tags: ["moderne", "élégant", "professionnel", "costume"]
    },
    {
      id: 3,
      title: "Robe de Soirée Exceptionnelle",
      description: "Création unique pour vos soirées les plus importantes. Chaque détail est travaillé avec soin et précision.",
      images: [
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=400&fit=crop"
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
      tags: ["soirée", "élégant", "sur-mesure", "femme"]
    },
    {
      id: 4,
      title: "Collection Enfants Colorée",
      description: "Vêtements pour enfants avec des motifs africains authentiques et des couleurs vives qui plaisent aux petits.",
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=400&fit=crop"
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
      tags: ["enfant", "coloré", "africain", "traditionnel"]
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
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Galerie des Créations</h1>
              <p className="text-gray-600">Découvrez les plus belles créations de nos tailleurs</p>
            </div>
            <PublishModal>
              <Button className="gradient-gold text-white hover:opacity-90">
                <Plus className="w-4 h-4 mr-2" />
                Publier une création
              </Button>
            </PublishModal>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Rechercher des créations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes catégories" />
                  </SelectTrigger>
                  <SelectContent>
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
                  <SelectContent>
                    <SelectItem value="recent">Plus récent</SelectItem>
                    <SelectItem value="likes">Plus aimé</SelectItem>
                    <SelectItem value="comments">Plus commenté</SelectItem>
                    <SelectItem value="price_low">Prix croissant</SelectItem>
                    <SelectItem value="price_high">Prix décroissant</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex gap-2">
                  <Button 
                    variant={viewMode === 'gallery' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setViewMode('gallery')}
                    className="flex-1"
                  >
                    <Grid className="w-4 h-4 mr-1" />
                    Galerie
                  </Button>
                  <Button 
                    variant={viewMode === 'list' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="flex-1"
                  >
                    <List className="w-4 h-4 mr-1" />
                    Liste
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Publications */}
        <Tabs value={viewMode} className="space-y-6">
          <TabsContent value="gallery" className="mt-0">
            <GalleryView publications={sortedPublications} />
          </TabsContent>
          
          <TabsContent value="list" className="mt-0">
            <div className="space-y-4">
              {sortedPublications.map((publication) => (
                <Card key={publication.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={publication.images[0]}
                          alt={publication.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-bold mb-2">{publication.title}</h3>
                            <p className="text-gray-600 mb-3">{publication.description}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                              <span>Par {publication.tailor.name}</span>
                              <span>{publication.date}</span>
                              <span className="text-primary font-semibold">{publication.price}</span>
                            </div>
                            <div className="flex gap-2">
                              {publication.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <Button size="sm" className="gradient-gold text-white ml-4">
                            Voir détails
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Charger plus de créations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;
