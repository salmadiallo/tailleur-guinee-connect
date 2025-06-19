
import React from 'react';
import { Users, Scissors, Star, MapPin } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Clients satisfaits",
      description: "Nous connectons des milliers de clients avec les meilleurs tailleurs"
    },
    {
      icon: Scissors,
      value: "500+",
      label: "Tailleurs partenaires",
      description: "Un réseau de tailleurs qualifiés dans toute la Guinée"
    },
    {
      icon: Star,
      value: "4.8/5",
      label: "Note moyenne",
      description: "Excellente satisfaction client basée sur des milliers d'avis"
    },
    {
      icon: MapPin,
      value: "8",
      label: "Villes couvertes",
      description: "Présents dans les principales villes de Guinée"
    }
  ];

  return (
    <section className="py-16 gradient-terracotta relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            MonTailleurGn en chiffres
          </h2>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto">
            Des résultats qui parlent d'eux-mêmes et témoignent de notre engagement 
            envers l'excellence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 border border-white/20">
                {/* Icon */}
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Value */}
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-white mb-3">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-orange-100 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-3">
              Une croissance constante depuis 2023
            </h3>
            <p className="text-orange-100">
              Notre plateforme continue de grandir grâce à la confiance de nos utilisateurs 
              et la qualité de nos tailleurs partenaires. Rejoignez une communauté qui valorise 
              le savoir-faire artisanal guinéen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
