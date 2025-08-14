import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Share2, ShoppingCart, X } from "lucide-react";
import { Link } from "react-router-dom";

interface ModelDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  model: {
    id: number;
    title: string;
    image: string;
    likes: number;
    price: string;
    category: string;
    description?: string;
    materials?: string[];
    features?: string[];
  } | null;
}

const ModelDetailModal: React.FC<ModelDetailModalProps> = ({ isOpen, onClose, model }) => {
  if (!model) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            {model.title}
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={model.image}
                alt={model.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">{model.title}</h2>
              <Badge variant="secondary" className="mb-4">{model.category}</Badge>
              <p className="text-gray-600">
                {model.description || "Une création unique réalisée avec soin et expertise par notre tailleur. Cette pièce allie tradition et modernité pour un style authentique et élégant."}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Matériaux utilisés</h3>
              <div className="flex flex-wrap gap-2">
                {(model.materials || ["Bazin riche", "Fils dorés", "Doublure coton"]).map((material) => (
                  <Badge key={material} variant="outline" className="text-xs">
                    {material}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Caractéristiques</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {(model.features || [
                  "Coupe traditionnelle",
                  "Broderie main",
                  "Finitions soignées",
                  "Ajustement personnalisé"
                ]).map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-primary">{model.price}</span>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>{model.likes} j'aime</span>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <Link to="/tailor-selection" className="flex-1">
                  <Button className="w-full gradient-gold text-white">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Commander ce modèle
                  </Button>
                </Link>
                <Button variant="outline" size="icon">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-african-gold-light to-african-terracotta-light rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Ce modèle peut être adapté selon vos mesures et préférences. 
                Notre tailleur vous accompagnera pour personnaliser chaque détail.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModelDetailModal;