
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Camera, X, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PublishModalProps {
  children: React.ReactNode;
}

const PublishModal = ({ children }: PublishModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleAddTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleAddImage = () => {
    // Simulation d'ajout d'image - en réalité, ici on intégrerait un système d'upload
    const sampleImages = [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=400&fit=crop"
    ];
    
    if (images.length < 4) {
      const randomImage = sampleImages[Math.floor(Math.random() * sampleImages.length)];
      setImages([...images, randomImage]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handlePublish = () => {
    if (!title.trim() || !description.trim() || !category || !price.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    // Simulation de publication
    toast({
      title: "Publication réussie !",
      description: "Votre création a été publiée avec succès",
    });

    // Reset form
    setTitle('');
    setDescription('');
    setCategory('');
    setPrice('');
    setTags([]);
    setImages([]);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Publier une nouvelle création</DialogTitle>
          <DialogDescription>
            Partagez vos plus belles créations avec la communauté
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Images */}
          <div>
            <Label>Photos de votre création</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {images.map((image, index) => (
                <div key={index} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img src={image} alt={`Création ${index + 1}`} className="w-full h-full object-cover" />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {images.length < 4 && (
                <button
                  onClick={handleAddImage}
                  className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-primary transition-colors"
                >
                  <div className="text-center">
                    <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Ajouter une photo</p>
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Title */}
          <div>
            <Label htmlFor="title">Titre de la création *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Boubou brodé traditionnel"
              className="mt-1"
            />
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Décrivez votre création, les matériaux utilisés, le style..."
              className="mt-1"
              rows={4}
            />
          </div>

          {/* Category and Price */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="category">Catégorie *</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Choisir une catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="boubou">Boubou</SelectItem>
                  <SelectItem value="costume">Costume</SelectItem>
                  <SelectItem value="robe">Robe</SelectItem>
                  <SelectItem value="enfant">Vêtements enfant</SelectItem>
                  <SelectItem value="traditionnel">Traditionnel</SelectItem>
                  <SelectItem value="moderne">Moderne</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="price">Prix (GNF) *</Label>
              <Input
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Ex: 75,000"
                className="mt-1"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <Label>Mots-clés</Label>
            <div className="flex gap-2 mt-1">
              <Input
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                placeholder="Ajouter un mot-clé"
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
              />
              <Button type="button" onClick={handleAddTag} size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => handleRemoveTag(tag)}>
                    #{tag} <X className="w-3 h-3 ml-1" />
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handlePublish} className="gradient-gold text-white">
              Publier
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PublishModal;
