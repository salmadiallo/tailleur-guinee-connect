import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Phone, 
  Download,
  Camera,
  CheckCircle,
  Truck,
  Package
} from "lucide-react";
import Header from "@/components/Header";
import { Link, useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("details");

  const orderData = {
    id: "CMD001",
    status: "En cours",
    progress: 75,
    createdDate: "15 Janvier 2025",
    estimatedDelivery: "25 Janvier 2025",
    item: {
      name: "Boubou traditionnel brodé",
      description: "Boubou traditionnel en bazin riche avec broderie dorée sur le col et les manches",
      quantity: 1,
      fabric: "Bazin riche",
      fabricAmount: "3 mètres",
      color: "Bleu royal avec broderie dorée",
      price: 85000,
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1581091012184-67b57bc0e20e?w=400&h=400&fit=crop"
      ]
    },
    tailor: {
      name: "Mamadou Diallo",
      location: "Kaloum, Conakry",
      rating: 4.9,
      reviews: 156,
      phone: "+224 123 456 789",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    timeline: [
      {
        status: "Commande confirmée",
        date: "15 Jan 2025, 14:30",
        completed: true,
        description: "Votre commande a été confirmée et l'acompte reçu"
      },
      {
        status: "Préparation en cours",
        date: "16 Jan 2025, 09:00",
        completed: true,
        description: "Le tailleur a commencé la préparation de votre commande"
      },
      {
        status: "Coupe terminée",
        date: "18 Jan 2025, 16:20",
        completed: true,
        description: "La coupe du tissu est terminée"
      },
      {
        status: "Assemblage en cours",
        date: "20 Jan 2025, 10:15",
        completed: true,
        description: "L'assemblage du vêtement est en cours"
      },
      {
        status: "Finitions",
        date: "En cours",
        completed: false,
        description: "Broderie et finitions en cours"
      },
      {
        status: "Prêt pour livraison",
        date: "À venir",
        completed: false,
        description: "Votre commande sera prête pour la livraison"
      }
    ],
    measurements: {
      "Tour de poitrine": "95 cm",
      "Tour de taille": "80 cm",
      "Tour de hanches": "100 cm",
      "Longueur": "140 cm",
      "Largeur épaules": "45 cm",
      "Longueur manches": "60 cm"
    },
    payments: [
      {
        type: "Acompte",
        amount: 25500,
        date: "15 Jan 2025",
        status: "Payé",
        method: "Orange Money"
      },
      {
        type: "Solde",
        amount: 59500,
        date: "À la livraison",
        status: "En attente",
        method: "À définir"
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En cours":
        return "bg-blue-100 text-blue-800";
      case "Terminé":
        return "bg-green-100 text-green-800";
      case "En attente":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress < 30) return "bg-red-500";
    if (progress < 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/client-dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au dashboard
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Commande #{orderData.id}</CardTitle>
                  <Badge className={getStatusColor(orderData.status)}>
                    {orderData.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Progression</span>
                      <span className="text-sm font-medium">{orderData.progress}%</span>
                    </div>
                    <Progress value={orderData.progress} className="h-2" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Date de commande:</span>
                      <p className="font-medium">{orderData.createdDate}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Livraison estimée:</span>
                      <p className="font-medium">{orderData.estimatedDelivery}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="details">Détails</TabsTrigger>
                <TabsTrigger value="timeline">Suivi</TabsTrigger>
                <TabsTrigger value="measurements">Mesures</TabsTrigger>
                <TabsTrigger value="payments">Paiements</TabsTrigger>
              </TabsList>

              <TabsContent value="details">
                <Card>
                  <CardHeader>
                    <CardTitle>Détails de la commande</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <img
                          src={orderData.item.images[0]}
                          alt={orderData.item.name}
                          className="w-full aspect-square object-cover rounded-lg"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          {orderData.item.images.slice(1).map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`${orderData.item.name} ${index + 2}`}
                              className="w-full aspect-square object-cover rounded-lg"
                            />
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold">{orderData.item.name}</h3>
                          <p className="text-gray-600 mt-1">{orderData.item.description}</p>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Quantité:</span>
                            <span className="font-medium">{orderData.item.quantity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tissu:</span>
                            <span className="font-medium">{orderData.item.fabric}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Métrage:</span>
                            <span className="font-medium">{orderData.item.fabricAmount}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Couleur:</span>
                            <span className="font-medium">{orderData.item.color}</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between text-lg">
                            <span className="font-semibold">Total:</span>
                            <span className="font-bold text-primary">
                              {orderData.item.price.toLocaleString()} GNF
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="timeline">
                <Card>
                  <CardHeader>
                    <CardTitle>Suivi de la commande</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orderData.timeline.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                          }`}>
                            {step.completed ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              <div className="w-2 h-2 bg-current rounded-full" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                                {step.status}
                              </h4>
                              <span className="text-sm text-gray-500">{step.date}</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="measurements">
                <Card>
                  <CardHeader>
                    <CardTitle>Mesures prises</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(orderData.measurements).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payments">
                <Card>
                  <CardHeader>
                    <CardTitle>Historique des paiements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orderData.payments.map((payment, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-medium">{payment.type}</h4>
                            <p className="text-sm text-gray-600">{payment.date}</p>
                            <p className="text-sm text-gray-600">Méthode: {payment.method}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold">
                              {payment.amount.toLocaleString()} GNF
                            </p>
                            <Badge className={payment.status === "Payé" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                              {payment.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
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
                    <h3 className="font-medium">{orderData.tailor.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-3 h-3 mr-1" />
                      {orderData.tailor.location}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{orderData.tailor.rating}</span>
                      <span className="text-sm text-gray-600">({orderData.tailor.reviews})</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Link to="/chat">
                    <Button className="w-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Envoyer un message
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger la facture
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Camera className="w-4 h-4 mr-2" />
                  Voir les photos de progression
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Truck className="w-4 h-4 mr-2" />
                  Suivre la livraison
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;