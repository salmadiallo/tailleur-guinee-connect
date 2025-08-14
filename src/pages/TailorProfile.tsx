
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Clock, MessageCircle, Heart, Share2, Eye, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import ModelDetailModal from "@/components/ModelDetailModal";
import tailorProfileCover from "@/assets/tailor-profile-cover.jpg";
import portfolioBoubou from "@/assets/portfolio-boubou.jpg";
import portfolioSuit from "@/assets/portfolio-suit.jpg";
import portfolioDress from "@/assets/portfolio-dress.jpg";
import portfolioEnsemble from "@/assets/portfolio-ensemble.jpg";

const TailorProfile = () => {
  const [liked, setLiked] = useState(false);
  const [selectedModel, setSelectedModel] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModelClick = (model: any) => {
    setSelectedModel({
      ...model,
      description: `Cette magnifique création ${model.title.toLowerCase()} représente l'excellence de notre savoir-faire traditionnel guinéen.`,
      materials: ["Bazin riche", "Fils dorés", "Doublure coton"],
      features: ["Coupe traditionnelle", "Broderie main", "Finitions soignées", "Ajustement personnalisé"]
    });
    setIsModalOpen(true);
  };

  const tailorData = {
    id: 1,
    name: "Mamadou Diallo",
    location: "Kaloum, Conakry",
    rating: 4.9,
    reviews: 156,
    experience: "15 ans",
    specialties: ["Boubou", "Costume", "Robe", "Broderie"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    coverImage: tailorProfileCover,
    badges: ["Ponctuel", "Créatif", "Expérimenté"],
    price: "À partir de 50,000 GNF",
    delivery: "2-3 jours",
    phone: "+224 123 456 789",
    email: "mamadou@email.com",
    description: "Tailleur expérimenté spécialisé dans la confection de vêtements traditionnels guinéens et modernes. Passionné par l'art de la couture depuis plus de 15 ans, je mets mon savoir-faire au service de votre élégance.",
    completedOrders: 245,
    responseTime: "< 2h"
  };

  const portfolio = [
    {
      id: 1,
      title: "Boubou Royal Brodé",
      image: portfolioBoubou,
      likes: 45,
      price: "85,000 GNF",
      category: "Boubou"
    },
    {
      id: 2,
      title: "Costume Trois Pièces",
      image: portfolioSuit,
      likes: 32,
      price: "120,000 GNF",
      category: "Costume"
    },
    {
      id: 3,
      title: "Robe de Soirée Élégante",
      image: portfolioDress,
      likes: 67,
      price: "95,000 GNF",
      category: "Robe"
    },
    {
      id: 4,
      title: "Ensemble Traditionnel",
      image: portfolioEnsemble,
      likes: 28,
      price: "75,000 GNF",
      category: "Ensemble"
    }
  ];

  const reviews = [
    {
      id: 1,
      clientName: "Aissatou Diallo",
      rating: 5,
      date: "Il y a 2 jours",
      comment: "Excellent travail ! Mon boubou était parfaitement ajusté et la broderie magnifique. Je recommande vivement.",
      order: "Boubou brodé",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c667d649?w=50&h=50&fit=crop&crop=face"
    },
    {
      id: 2,
      clientName: "Moussa Camara",
      rating: 5,
      date: "Il y a 1 semaine",
      comment: "Très professionnel et ponctuel. La qualité est au rendez-vous et le prix raisonnable.",
      order: "Costume",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
    },
    {
      id: 3,
      clientName: "Fatou Bah",
      rating: 4,
      date: "Il y a 2 semaines",
      comment: "Beau travail, juste un petit retard sur la livraison mais le résultat en valait la peine.",
      order: "Robe de soirée",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cover & Profile Section */}
        <Card className="overflow-hidden mb-8">
          <div className="relative h-64 bg-gradient-to-r from-african-gold-light to-african-terracotta-light">
            <img
              src={tailorData.coverImage}
              alt="Atelier"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          <CardContent className="relative -mt-16 pb-6">
            <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6">
              <img
                src={tailorData.avatar}
                alt={tailorData.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{tailorData.name}</h1>
                    <div className="flex items-center text-gray-600 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {tailorData.location}
                    </div>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">{tailorData.rating}</span>
                        <span className="text-gray-600 ml-1">({tailorData.reviews} avis)</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        <Clock className="w-3 h-3 mr-1" />
                        {tailorData.delivery}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 mt-4 md:mt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setLiked(!liked)}
                      className={liked ? "text-red-500 border-red-500" : ""}
                    >
                      <Heart className={`w-4 h-4 mr-2 ${liked ? "fill-current" : ""}`} />
                      {liked ? "Aimé" : "Aimer"}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Partager
                    </Button>
                    <Link to="/chat">
                      <Button className="gradient-gold text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Contacter
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{tailorData.completedOrders}</div>
                <div className="text-sm text-gray-600">Commandes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{tailorData.experience}</div>
                <div className="text-sm text-gray-600">Expérience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{tailorData.responseTime}</div>
                <div className="text-sm text-gray-600">Réponse</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{portfolio.length}</div>
                <div className="text-sm text-gray-600">Créations</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs defaultValue="portfolio" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="about">À propos</TabsTrigger>
            <TabsTrigger value="reviews">Avis ({tailorData.reviews})</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="portfolio">
            <Card>
              <CardHeader>
                <CardTitle>Mes Créations</CardTitle>
                <CardDescription>Découvrez mes dernières réalisations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolio.map((item) => (
                    <div key={item.id} className="group relative">
                      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button 
                            variant="secondary" 
                            size="sm"
                            onClick={() => handleModelClick(item)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Voir détails
                          </Button>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{item.title}</h3>
                          <Badge variant="secondary">{item.category}</Badge>
                        </div>
                        <div className="flex items-center justify-end mt-2">
                          <div className="flex items-center space-x-1 text-sm text-gray-600">
                            <Heart className="w-4 h-4 text-red-500" />
                            <span>{item.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>À propos de {tailorData.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">{tailorData.description}</p>
                
                <div>
                  <h3 className="font-semibold mb-3">Spécialités</h3>
                  <div className="flex flex-wrap gap-2">
                    {tailorData.specialties.map((specialty) => (
                      <Badge key={specialty} className="bg-primary/10 text-primary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Badges de qualité</h3>
                  <div className="flex flex-wrap gap-2">
                    {tailorData.badges.map((badge) => (
                      <Badge key={badge} className="gradient-gold text-white">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-african-gold-light to-african-terracotta-light rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Informations de service</h3>
                  <p className="text-sm text-gray-600">Délai de livraison: {tailorData.delivery}</p>
                  <p className="text-sm text-gray-600 mt-1">Consultations sur mesure disponibles</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Avis clients</CardTitle>
                <CardDescription>Ce que disent mes clients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6 last:border-b-0">
                      <div className="flex items-start space-x-4">
                        <img
                          src={review.avatar}
                          alt={review.clientName}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-semibold">{review.clientName}</h4>
                              <p className="text-sm text-gray-600">Commande: {review.order}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center space-x-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                              <p className="text-sm text-gray-600">{review.date}</p>
                            </div>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Informations de contact</CardTitle>
                <CardDescription>Comment me joindre</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Téléphone</p>
                        <p className="text-gray-600">{tailorData.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">{tailorData.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Adresse</p>
                        <p className="text-gray-600">{tailorData.location}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <p className="font-medium mb-2">Horaires d'ouverture</p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>Lundi - Vendredi: 8h - 18h</p>
                      <p>Samedi: 9h - 17h</p>
                      <p>Dimanche: 10h - 15h</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/chat">
                  <Button className="gradient-gold text-white w-full md:w-auto">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Démarrer une conversation
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <ModelDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          model={selectedModel}
        />
      </div>
    </div>
  );
};

export default TailorProfile;
