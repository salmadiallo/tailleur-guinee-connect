
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Plus, Minus, Calendar, DollarSign, Clock, Star, MapPin } from "lucide-react";
import Header from "@/components/Header";

const OrderPage = () => {
  const [selectedTailor] = useState({
    name: "Mamadou Diallo",
    location: "Kaloum, Conakry",
    rating: 4.9,
    reviews: 156,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    specialties: ["Boubou", "Costume", "Robe"],
    minPrice: 50000,
    deliveryTime: "2-3 jours"
  });

  const [quantity, setQuantity] = useState(1);
  const [selectedFabric, setSelectedFabric] = useState('');
  const [orderType, setOrderType] = useState('new');

  const fabricOptions = [
    { name: "Bazin", price: 15000 },
    { name: "Wax", price: 12000 },
    { name: "Damassé", price: 20000 },
    { name: "Coton local", price: 8000 },
    { name: "Soie", price: 35000 }
  ];

  const measurements = [
    { label: "Tour de poitrine", placeholder: "Ex: 95 cm" },
    { label: "Tour de taille", placeholder: "Ex: 80 cm" },
    { label: "Tour de hanches", placeholder: "Ex: 100 cm" },
    { label: "Longueur", placeholder: "Ex: 140 cm" },
    { label: "Largeur épaules", placeholder: "Ex: 45 cm" },
    { label: "Longueur manches", placeholder: "Ex: 60 cm" }
  ];

  const calculateTotal = () => {
    const basePrice = selectedTailor.minPrice;
    const fabricPrice = fabricOptions.find(f => f.name === selectedFabric)?.price || 0;
    return (basePrice + fabricPrice) * quantity;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Order Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tailor Info */}
            <Card>
              <CardHeader>
                <CardTitle>Commande chez</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedTailor.avatar}
                    alt={selectedTailor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{selectedTailor.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="w-3 h-3 mr-1" />
                      {selectedTailor.location}
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{selectedTailor.rating}</span>
                        <span className="text-gray-600">({selectedTailor.reviews} avis)</span>
                      </div>
                      <Badge className="bg-african-gold-light text-african-gold-dark">
                        <Clock className="w-3 h-3 mr-1" />
                        {selectedTailor.deliveryTime}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Type */}
            <Card>
              <CardHeader>
                <CardTitle>Type de commande</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={orderType} onValueChange={setOrderType}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="new">Nouvelle création</TabsTrigger>
                    <TabsTrigger value="model">D'après modèle</TabsTrigger>
                  </TabsList>

                  <TabsContent value="new" className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="garmentType">Type de vêtement</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Sélectionnez le type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="boubou">Boubou traditionnel</SelectItem>
                          <SelectItem value="costume">Costume</SelectItem>
                          <SelectItem value="robe">Robe</SelectItem>
                          <SelectItem value="chemise">Chemise</SelectItem>
                          <SelectItem value="pantalon">Pantalon</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Description détaillée</Label>
                      <Textarea
                        id="description"
                        placeholder="Décrivez votre commande : style, couleurs, détails spéciaux..."
                        className="mt-1"
                        rows={4}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="model" className="space-y-4 mt-4">
                    <div>
                      <Label>Images de référence</Label>
                      <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">
                          Glissez vos images ici ou cliquez pour sélectionner
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PNG, JPG jusqu'à 10MB chacune
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="modelDescription">Notes sur le modèle</Label>
                      <Textarea
                        id="modelDescription"
                        placeholder="Modifications ou notes spéciales sur le modèle..."
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Fabric Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Choix du tissu</CardTitle>
                <CardDescription>Sélectionnez le tissu pour votre commande</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {fabricOptions.map((fabric) => (
                    <div
                      key={fabric.name}
                      onClick={() => setSelectedFabric(fabric.name)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        selectedFabric === fabric.name
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{fabric.name}</h3>
                        <span className="text-primary font-semibold">
                          {fabric.price.toLocaleString()} GNF/m
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4">
                  <Label htmlFor="fabricAmount">Quantité de tissu (en mètres)</Label>
                  <Input
                    id="fabricAmount"
                    type="number"
                    placeholder="Ex: 3"
                    className="mt-1"
                    min="1"
                    step="0.5"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Measurements */}
            <Card>
              <CardHeader>
                <CardTitle>Mesures</CardTitle>
                <CardDescription>Fournissez vos mesures précises</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {measurements.map((measurement) => (
                    <div key={measurement.label}>
                      <Label>{measurement.label}</Label>
                      <Input
                        placeholder={measurement.placeholder}
                        className="mt-1"
                      />
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Conseil :</strong> Pour des mesures précises, nous recommandons de vous rendre chez le tailleur pour une prise de mesure professionnelle.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quantity and Delivery */}
            <Card>
              <CardHeader>
                <CardTitle>Quantité et livraison</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Quantité</Label>
                  <div className="flex items-center space-x-3 mt-1">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="deadline">Date souhaitée de livraison</Label>
                  <div className="relative mt-1">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="deadline"
                      type="date"
                      className="pl-10"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="deliveryAddress">Adresse de livraison</Label>
                  <Textarea
                    id="deliveryAddress"
                    placeholder="Adresse complète pour la livraison..."
                    className="mt-1"
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Résumé de la commande</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Prix de base</span>
                    <span>{selectedTailor.minPrice.toLocaleString()} GNF</span>
                  </div>
                  {selectedFabric && (
                    <div className="flex justify-between text-sm">
                      <span>Tissu ({selectedFabric})</span>
                      <span>{fabricOptions.find(f => f.name === selectedFabric)?.price.toLocaleString()} GNF</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span>Quantité</span>
                    <span>× {quantity}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-primary">{calculateTotal().toLocaleString()} GNF</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Délai estimé: {selectedTailor.deliveryTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4" />
                    <span>Acompte requis: 30% du total</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full gradient-gold text-white">
                    Confirmer la commande
                  </Button>
                  <Button variant="outline" className="w-full">
                    Sauvegarder le devis
                  </Button>
                </div>

                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    Un acompte de 30% sera demandé pour confirmer votre commande. Le solde sera payé à la livraison.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
