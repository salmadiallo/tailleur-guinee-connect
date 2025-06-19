
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Package, 
  Clock, 
  CheckCircle, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Star,
  Camera,
  Download,
  Calendar,
  User,
  Scissors,
  Truck
} from "lucide-react";
import Header from "@/components/Header";

const OrderDetails = () => {
  const [rating, setRating] = useState(0);

  const orderData = {
    id: "CMD001",
    status: "En cours",
    progress: 75,
    item: "Boubou traditionnel brodé",
    client: {
      name: "Aminata Touré",
      phone: "+224 123 456 789",
      address: "Kipé, Ratoma, Conakry"
    },
    tailor: {
      name: "Mamadou Diallo",
      phone: "+224 987 654 321",
      location: "Kaloum, Conakry",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    price: "75,000 GNF",
    orderDate: "2024-01-15",
    estimatedDelivery: "2024-01-25",
    actualDelivery: null,
    fabric: "Bazin riche bleu royal",
    measurements: {
      tour_poitrine: "95 cm",
      tour_taille: "80 cm",
      longueur: "145 cm",
      tour_bras: "30 cm"
    },
    specifications: "Broderie dorée sur le col et les manches, motifs traditionnels guinéens",
    timeline: [
      {
        step: "Commande confirmée",
        date: "15 Jan 2024",
        time: "14:30",
        status: "completed",
        description: "Votre commande a été confirmée et les détails envoyés au tailleur"
      },
      {
        step: "Prise de mesures",
        date: "16 Jan 2024",
        time: "10:00",
        status: "completed",
        description: "Mesures vérifiées et validées par le tailleur"
      },
      {
        step: "Achat du tissu",
        date: "17 Jan 2024",
        time: "09:15",
        status: "completed",
        description: "Tissu bazin riche bleu royal acheté et préparé"
      },
      {
        step: "Coupe du tissu",
        date: "18 Jan 2024",
        time: "08:30",
        status: "completed",
        description: "Tissu coupé selon les mesures et le patron"
      },
      {
        step: "Couture en cours",
        date: "19 Jan 2024",
        time: "07:00",
        status: "in_progress",
        description: "Assemblage des pièces et broderie en cours"
      },
      {
        step: "Finitions",
        date: "23 Jan 2024",
        time: "Estimé",
        status: "pending",
        description: "Finitions et contrôle qualité"
      },
      {
        step: "Livraison",
        date: "25 Jan 2024",
        time: "Estimé",
        status: "pending",
        description: "Livraison à votre adresse"
      }
    ],
    photos: [
      {
        title: "Tissu sélectionné",
        url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
        date: "17 Jan 2024"
      },
      {
        title: "Patron et découpe",
        url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
        date: "18 Jan 2024"
      },
      {
        title: "Couture en cours",
        url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=300&fit=crop",
        date: "20 Jan 2024"
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500";
      case "in_progress": return "bg-blue-500";
      default: return "bg-gray-300";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="w-4 h-4 text-white" />;
      case "in_progress": return <Clock className="w-4 h-4 text-white" />;
      default: return <div className="w-2 h-2 bg-white rounded-full" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Commande #{orderData.id}</h1>
              <p className="text-gray-600 mt-2">{orderData.item}</p>
            </div>
            <Badge 
              className={`text-white ${
                orderData.status === "Terminé" ? "bg-green-500" : 
                orderData.status === "En cours" ? "bg-blue-500" : "bg-yellow-500"
              }`}
            >
              {orderData.status}
            </Badge>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Progression de la commande</span>
              <span className="text-sm text-gray-600">{orderData.progress}% terminé</span>
            </div>
            <Progress value={orderData.progress} className="h-3 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Commandé le {orderData.orderDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Livraison estimée: {orderData.estimatedDelivery}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Package className="w-4 h-4 text-primary" />
                <span className="font-medium text-primary">{orderData.price}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Suivi de la commande</CardTitle>
                <CardDescription>Suivez chaque étape de la confection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {orderData.timeline.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor(step.status)}`}>
                        {getStatusIcon(step.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{step.step}</h3>
                          <span className="text-sm text-gray-600">{step.date} • {step.time}</span>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Photos Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Photos de progression</CardTitle>
                <CardDescription>Voir l'évolution de votre commande en images</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {orderData.photos.map((photo, index) => (
                    <div key={index} className="group">
                      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-2">
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="font-medium text-sm">{photo.title}</h4>
                      <p className="text-xs text-gray-600">{photo.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Order Details */}
            <Tabs defaultValue="details" className="space-y-4">
              <TabsList>
                <TabsTrigger value="details">Détails</TabsTrigger>
                <TabsTrigger value="measurements">Mesures</TabsTrigger>
                <TabsTrigger value="communication">Messages</TabsTrigger>
              </TabsList>

              <TabsContent value="details">
                <Card>
                  <CardHeader>
                    <CardTitle>Détails de la commande</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Article</label>
                      <p className="font-semibold">{orderData.item}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Tissu</label>
                      <p>{orderData.fabric}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Spécifications</label>
                      <p>{orderData.specifications}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Prix total</label>
                      <p className="text-xl font-bold text-primary">{orderData.price}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="measurements">
                <Card>
                  <CardHeader>
                    <CardTitle>Mesures</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(orderData.measurements).map(([key, value]) => (
                        <div key={key} className="flex justify-between p-3 bg-gray-50 rounded">
                          <span className="text-sm font-medium capitalize">
                            {key.replace('_', ' ')}
                          </span>
                          <span className="font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="communication">
                <Card>
                  <CardHeader>
                    <CardTitle>Messages avec le tailleur</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <img
                            src={orderData.tailor.avatar}
                            alt={orderData.tailor.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="font-medium text-sm">{orderData.tailor.name}</span>
                          <span className="text-xs text-gray-600">Il y a 2 heures</span>
                        </div>
                        <p className="text-sm">La broderie dorée est en cours. Le motif traditionnel prend forme magnifiquement ! 😊</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <User className="w-6 h-6 text-gray-400" />
                          <span className="font-medium text-sm">Vous</span>
                          <span className="text-xs text-gray-600">Il y a 3 heures</span>
                        </div>
                        <p className="text-sm">Merci pour la mise à jour ! J'ai hâte de voir le résultat.</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex space-x-2">
                      <input
                        type="text"
                        placeholder="Tapez votre message..."
                        className="flex-1 p-2 border rounded-lg"
                      />
                      <Button size="sm" className="gradient-gold text-white">
                        Envoyer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tailor Info */}
            <Card>
              <CardHeader>
                <CardTitle>Votre tailleur</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={orderData.tailor.avatar}
                    alt={orderData.tailor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{orderData.tailor.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-3 h-3 mr-1" />
                      {orderData.tailor.location}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger facture
                </Button>
                <Button variant="outline" className="w-full">
                  <Camera className="w-4 h-4 mr-2" />
                  Demander photo
                </Button>
                {orderData.status === "Terminé" && (
                  <div className="space-y-3">
                    <div className="text-sm font-medium">Noter ce tailleur</div>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setRating(star)}
                          className={`w-6 h-6 ${
                            star <= rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                        >
                          <Star className="w-full h-full fill-current" />
                        </button>
                      ))}
                    </div>
                    <Button className="w-full gradient-gold text-white">
                      Laisser un avis
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card>
              <CardHeader>
                <CardTitle>Livraison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Truck className="w-4 h-4 text-primary" />
                    <span className="text-sm">Livraison à domicile</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    {orderData.client.address}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Estimée:</span> {orderData.estimatedDelivery}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
