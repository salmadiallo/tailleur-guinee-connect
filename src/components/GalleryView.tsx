
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, Eye, Bookmark, User } from "lucide-react";

interface Publication {
  id: number;
  title: string;
  description: string;
  images: string[];
  tailor: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  category: string;
  price: string;
  likes: number;
  comments: number;
  shares: number;
  date: string;
  tags: string[];
}

interface GalleryViewProps {
  publications: Publication[];
  onModelClick?: (publication: Publication) => void;
}

const GalleryView = ({ publications, onModelClick }: GalleryViewProps) => {
  const [likedPublications, setLikedPublications] = useState<Set<number>>(new Set());
  const [savedPublications, setSavedPublications] = useState<Set<number>>(new Set());

  const handleLike = (publicationId: number) => {
    const newLiked = new Set(likedPublications);
    if (newLiked.has(publicationId)) {
      newLiked.delete(publicationId);
    } else {
      newLiked.add(publicationId);
    }
    setLikedPublications(newLiked);
  };

  const handleSave = (publicationId: number) => {
    const newSaved = new Set(savedPublications);
    if (newSaved.has(publicationId)) {
      newSaved.delete(publicationId);
    } else {
      newSaved.add(publicationId);
    }
    setSavedPublications(newSaved);
  };

  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {publications.map((publication) => (
        <Card key={publication.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover-lift">
          {/* Header */}
          <div className="p-4 pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={publication.tailor.avatar}
                  alt={publication.tailor.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-sm">{publication.tailor.name}</h3>
                    {publication.tailor.verified && (
                      <Badge className="bg-blue-100 text-blue-800 text-xs px-2 py-0">✓</Badge>
                    )}
                  </div>
                  <p className="text-xs text-gray-600">{publication.date}</p>
                </div>
              </div>
              <Badge className="bg-primary/10 text-primary text-xs">{publication.category}</Badge>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            {publication.images.length === 1 ? (
              <div className="aspect-square">
                <img
                  src={publication.images[0]}
                  alt={publication.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : publication.images.length === 2 ? (
              <div className="grid grid-cols-2 gap-1 aspect-square">
                {publication.images.slice(0, 2).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${publication.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-1 aspect-square">
                <img
                  src={publication.images[0]}
                  alt={`${publication.title} 1`}
                  className="w-full h-full object-cover"
                />
                <div className="grid grid-rows-2 gap-1">
                  <img
                    src={publication.images[1]}
                    alt={`${publication.title} 2`}
                    className="w-full h-full object-cover"
                  />
                  <div className="relative">
                    <img
                      src={publication.images[2]}
                      alt={`${publication.title} 3`}
                      className="w-full h-full object-cover"
                    />
                    {publication.images.length > 3 && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-semibold">+{publication.images.length - 3}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <CardContent className="p-4">
            <h2 className="font-bold text-lg mb-2">{publication.title}</h2>
            <p className="text-gray-700 text-sm mb-3 line-clamp-2">{publication.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-3">
              {publication.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
              {publication.tags.length > 3 && (
                <span className="text-xs text-gray-500">+{publication.tags.length - 3}</span>
              )}
            </div>

            {/* Price and Action */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-bold text-primary">{publication.price}</span>
              <Button 
                size="sm" 
                className="gradient-gold text-white"
                onClick={() => onModelClick?.(publication)}
              >
                <Eye className="w-4 h-4 mr-1" />
                Voir
              </Button>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-3 border-t">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => handleLike(publication.id)}
                  className={`flex items-center space-x-1 transition-colors ${
                    likedPublications.has(publication.id) 
                      ? 'text-red-500' 
                      : 'text-gray-600 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${likedPublications.has(publication.id) ? 'fill-current' : ''}`} />
                  <span className="text-sm">{publication.likes + (likedPublications.has(publication.id) ? 1 : 0)}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">{publication.comments}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-green-500 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm">{publication.shares}</span>
                </button>
              </div>
              <button 
                onClick={() => handleSave(publication.id)}
                className={`transition-colors ${
                  savedPublications.has(publication.id) 
                    ? 'text-yellow-500' 
                    : 'text-gray-600 hover:text-yellow-500'
                }`}
              >
                <Bookmark className={`w-5 h-5 ${savedPublications.has(publication.id) ? 'fill-current' : ''}`} />
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GalleryView;
