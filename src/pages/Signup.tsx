
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Eye, EyeOff, Scissors, User, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'client' | 'tailleur'>('client');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">MT</span>
            </div>
            <h1 className="text-2xl font-bold text-gradient">MonTailleurGn</h1>
          </div>
          <p className="text-gray-600">Créez votre compte</p>
        </div>

        <Card>
          <CardHeader>
            <Tabs value={userType} onValueChange={(value) => setUserType(value as 'client' | 'tailleur')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="client" className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Client</span>
                </TabsTrigger>
                <TabsTrigger value="tailleur" className="flex items-center space-x-2">
                  <Scissors className="w-4 h-4" />
                  <span>Tailleur</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="client">
                <CardContent className="space-y-4 p-0 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input id="firstName" placeholder="Votre prénom" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom</Label>
                      <Input id="lastName" placeholder="Votre nom" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="votre@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input id="phone" placeholder="+224 XXX XXX XXX" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Adresse</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input id="address" placeholder="Votre adresse" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Mot de passe</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>

              <TabsContent value="tailleur">
                <CardContent className="space-y-4 p-0 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tailorFirstName">Prénom</Label>
                      <Input id="tailorFirstName" placeholder="Votre prénom" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tailorLastName">Nom</Label>
                      <Input id="tailorLastName" placeholder="Votre nom" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tailorEmail">Email</Label>
                    <Input id="tailorEmail" type="email" placeholder="votre@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tailorPhone">Téléphone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input id="tailorPhone" placeholder="+224 XXX XXX XXX" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="shopName">Nom de l'atelier</Label>
                    <Input id="shopName" placeholder="Nom de votre atelier" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="shopAddress">Adresse de l'atelier</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input id="shopAddress" placeholder="Adresse de votre atelier" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Années d'expérience</Label>
                    <Input id="experience" type="number" placeholder="5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialties">Spécialités</Label>
                    <Textarea id="specialties" placeholder="Boubou, Costume, Robe de soirée..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tailorPassword">Mot de passe</Label>
                    <div className="relative">
                      <Input
                        id="tailorPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>
            </Tabs>

            <Button className="w-full gradient-gold text-white mt-6">
              Créer mon compte
            </Button>
            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">Déjà un compte ? </span>
              <Link to="/login" className="text-sm text-primary hover:underline">
                Se connecter
              </Link>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
