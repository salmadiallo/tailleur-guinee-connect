
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Package, MessageCircle, Star, DollarSign, TrendingUp, Camera, Eye } from "lucide-react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const TailorDashboard = () => {
  const recentOrders = [
    {
      id: "CMD001",
      clientName: "Aminata Touré",
      item: "Boubou traditionnel",
      status: "En cours",
      progress: 60,
      price: "75,000 GNF",
      deadline: "2024-01-25"
    },
    {
      id: "CMD002",
      clientName: "Moussa Camara",
      item: "Costume 3 pièces",
      status: "Nouveau",
      progress: 0,
      price: "150,000 GNF",
      deadline: "2024-01-30"
    }
  ];

  const portfolioItems = [
    {
      title: "Boubou brodé",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
      likes: 24
    },
    {
      title: "Robe de soirée",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop",
      likes: 18
    },
    {
      title: "Costume moderne",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop",
      likes: 31
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Bienvenue, Mamadou !</h1>
              <p className="text-gray-600 mt-2">Gérez votre atelier et vos créations</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline">
                <Camera className="w-4 h-4 mr-2" />
                Ajouter photo
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Commandes en cours</p>
                  <p className="text-2xl font-bold text-primary">5</p>
                </div>
                <Package className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Revenus ce mois</p>
                  <p className="text-2xl font-bold text-primary">450,000 GNF</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Note moyenne</p>
                  <p className="text-2xl font-bold text-primary">4.9</p>
                </div>
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Publications</p>
                  <p className="text-2xl font-bold text-primary">23</p>
                </div>
                <TrendingUp className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList>
            <TabsTrigger value="orders">Commandes</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="analytics">Statistiques</TabsTrigger>
            <TabsTrigger value="profile">Profil</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Commandes récentes</CardTitle>
                <CardDescription>Gérez vos commandes en cours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{order.item}</h3>
                          <p className="text-sm text-gray-600">Client: {order.clientName}</p>
                          <p className="text-sm text-gray-600">Commande #{order.id}</p>
                          <p className="text-sm text-gray-600">Échéance: {order.deadline}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={order.status === "Nouveau" ? "secondary" : "default"}>
                            {order.status}
                          </Badge>
                          <p className="text-sm font-medium mt-2">{order.price}</p>
                          <div className="flex space-x-2 mt-2">
                            <Link to={`/order-details/${order.id}`}>
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4 mr-1" />
                                Détails
                              </Button>
                            </Link>
                            <Button size="sm" className="gradient-gold text-white">
                              Mettre à jour
                            </Button>
                          </div>
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

          <TabsContent value="portfolio">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Mon Portfolio</CardTitle>
                    <CardDescription>Présentez vos plus belles créations</CardDescription>
                  </div>
                  <Button className="gradient-gold text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter création
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {portfolioItems.map((item, index) => (
                    <div key={index} className="group relative">
                      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button variant="secondary" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            Voir détails
                          </Button>
                        </div>
                      </div>
                      <div className="mt-3">
                        <h3 className="font-semibold">{item.title}</h3>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <Star className="w-4 h-4 text-red-500 fill-current" />
                          <span>{item.likes} j'aime</span>
                        </div>
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
                <CardTitle>Messages clients</CardTitle>
                <CardDescription>Communiquez avec vos clients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Aucun message récent</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenus mensuels</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Graphique des revenus</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Commandes par mois</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Graphique des commandes</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Mon profil d'atelier</CardTitle>
                <CardDescription>Gérez vos informations professionnelles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                      <Camera className="w-8 h-8 text-gray-500" />
                    </div>
                    <div>
                      <Button variant="outline">Changer photo</Button>
                      <p className="text-sm text-gray-600 mt-1">PNG, JPG jusqu'à 5MB</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Nom de l'atelier</label>
                      <input className="w-full mt-1 p-2 border rounded" defaultValue="Atelier Mamadou" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Années d'expérience</label>
                      <input className="w-full mt-1 p-2 border rounded" defaultValue="15" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Spécialités</label>
                    <textarea className="w-full mt-1 p-2 border rounded h-20" defaultValue="Boubou traditionnel, Costume moderne, Vêtements sur mesure" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <textarea className="w-full mt-1 p-2 border rounded h-32" defaultValue="Tailleur expérimenté spécialisé dans la confection de vêtements traditionnels et modernes. Service de qualité avec livraison rapide." />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Prix minimum</label>
                      <input className="w-full mt-1 p-2 border rounded" defaultValue="25,000 GNF" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Délai moyen</label>
                      <input className="w-full mt-1 p-2 border rounded" defaultValue="3-5 jours" />
                    </div>
                  </div>
                  
                  <Button className="gradient-gold text-white">
                    Mettre à jour le profil
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

export default TailorDashboard;
