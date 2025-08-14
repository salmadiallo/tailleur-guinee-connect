
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Package, MessageCircle, Star, Clock, MapPin, Eye } from "lucide-react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const ClientDashboard = () => {
  const recentOrders = [
    {
      id: "CMD001",
      tailorName: "Mamadou Diallo",
      item: "Boubou traditionnel",
      status: "En cours",
      progress: 60,
      price: "75,000 GNF",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop"
    },
    {
      id: "CMD002",
      tailorName: "Fatoumata Camara",
      item: "Robe de soirée",
      status: "Terminé",
      progress: 100,
      price: "120,000 GNF",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop"
    }
  ];

  const favoritesTailors = [
    {
      name: "Mamadou Diallo",
      location: "Kaloum, Conakry",
      rating: 4.9,
      specialties: ["Boubou", "Costume"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Fatoumata Camara",
      location: "Ratoma, Conakry",
      rating: 4.8,
      specialties: ["Robe", "Broderie"],
      image: "https://images.unsplash.com/photo-1494790108755-2616c667d649?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userType="client" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Bonjour, Aminata !</h1>
              <p className="text-gray-600 mt-2">Gérez vos commandes et découvrez de nouveaux tailleurs</p>
            </div>
            <Link to="/tailor-selection">
              <Button className="gradient-gold text-white">
                <Plus className="w-4 h-4 mr-2" />
                Nouvelle commande
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Commandes en cours</p>
                  <p className="text-2xl font-bold text-primary">3</p>
                </div>
                <Package className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Commandes terminées</p>
                  <p className="text-2xl font-bold text-primary">12</p>
                </div>
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Tailleurs favoris</p>
                  <p className="text-2xl font-bold text-primary">5</p>
                </div>
                <Star className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Messages non lus</p>
                  <p className="text-2xl font-bold text-primary">2</p>
                </div>
                <MessageCircle className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList>
            <TabsTrigger value="orders">Mes commandes</TabsTrigger>
            <TabsTrigger value="favorites">Tailleurs favoris</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="profile">Profil</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Commandes récentes</CardTitle>
                <CardDescription>Suivez l'avancement de vos commandes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <img
                            src={order.image}
                            alt={order.item}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="font-semibold">{order.item}</h3>
                            <p className="text-sm text-gray-600">Tailleur: {order.tailorName}</p>
                            <p className="text-sm text-gray-600">Commande #{order.id}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={order.status === "Terminé" ? "default" : "secondary"}>
                            {order.status}
                          </Badge>
                          <p className="text-sm font-medium mt-2">{order.price}</p>
                          <Link to={`/order-details/${order.id}`}>
                            <Button size="sm" variant="outline" className="mt-2">
                              <Eye className="w-4 h-4 mr-1" />
                              Détails
                            </Button>
                          </Link>
                        </div>
                      </div>
                      {order.status === "En cours" && (
                        <div className="mt-4">
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                            <span>Progression</span>
                            <span>{order.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="gradient-gold h-2 rounded-full"
                              style={{ width: `${order.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>Mes tailleurs favoris</CardTitle>
                <CardDescription>Vos tailleurs préférés pour de futures commandes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {favoritesTailors.map((tailor, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <img
                          src={tailor.image}
                          alt={tailor.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{tailor.name}</h3>
                          <div className="flex items-center text-sm text-gray-600 mb-2">
                            <MapPin className="w-3 h-3 mr-1" />
                            {tailor.location}
                          </div>
                          <div className="flex items-center space-x-1 mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">{tailor.rating}</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {tailor.specialties.map((specialty) => (
                              <span key={specialty} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Link to="/chat">
                          <Button size="sm" variant="outline">
                            Contacter
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription>Conversations avec vos tailleurs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Aucun message pour le moment</p>
                  <Link to="/chat">
                    <Button variant="outline" className="mt-4">
                      Démarrer une conversation
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Mon profil</CardTitle>
                <CardDescription>Gérez vos informations personnelles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Prénom</label>
                      <input className="w-full mt-1 p-2 border rounded" defaultValue="Aminata" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Nom</label>
                      <input className="w-full mt-1 p-2 border rounded" defaultValue="Touré" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input className="w-full mt-1 p-2 border rounded" defaultValue="aminata@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Téléphone</label>
                    <input className="w-full mt-1 p-2 border rounded" defaultValue="+224 123 456 789" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Adresse</label>
                    <input className="w-full mt-1 p-2 border rounded" defaultValue="Kipé, Ratoma, Conakry" />
                  </div>
                  <Button className="gradient-gold text-white">
                    Mettre à jour
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClientDashboard;
