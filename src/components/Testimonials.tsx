
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aissatou Diallo",
      location: "Conakry",
      rating: 5,
      text: "Excellent service ! Mon tailleur était très professionnel et a livré ma robe exactement comme je l'avais imaginée. La plateforme facilite vraiment les échanges.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c667d649?w=100&h=100&fit=crop&crop=face",
      order: "Robe de soirée"
    },
    {
      id: 2,
      name: "Mamadou Bah",
      location: "Kankan",
      rating: 5,
      text: "Très satisfait de ma commande. Le suivi en temps réel m'a permis de voir l'évolution de mon boubou. Livraison rapide et qualité au rendez-vous !",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      order: "Boubou traditionnel"
    },
    {
      id: 3,
      name: "Mariama Camara",
      location: "Labé",
      rating: 5,
      text: "Interface très intuitive et tailleurs compétents. J'ai pu facilement comparer les profils et choisir celui qui correspondait à mes attentes.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      order: "Ensemble complet"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Témoignages clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos clients pensent de leur expérience avec MonTailleurGn.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative group hover:shadow-xl transition-shadow duration-300">
              {/* Quote Icon */}
              <div className="absolute -top-3 left-6 w-8 h-8 gradient-gold rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              <CardContent className="p-6 pt-8">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Order Info */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <span className="text-sm text-gray-600">Commande: </span>
                  <span className="text-sm font-medium text-primary">{testimonial.order}</span>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-african-gold-light to-african-terracotta-light rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rejoignez nos clients satisfaits
            </h3>
            <p className="text-gray-700 mb-6">
              Commandez dès maintenant et découvrez pourquoi nos clients nous font confiance 
              pour leurs vêtements sur mesure.
            </p>
            <button className="gradient-gold text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Commencer ma première commande
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
