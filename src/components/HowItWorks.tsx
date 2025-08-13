
import React from 'react';
import { Search, User, Package, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: "Trouvez votre tailleur",
      description: "Recherchez et comparez les tailleurs près de chez vous selon vos besoins.",
      color: "bg-african-green text-white"
    },
    {
      id: 2,
      icon: User,
      title: "Passez votre commande",
      description: "Choisissez votre modèle, donnez vos mesures et sélectionnez le tissu.",
      color: "bg-african-gold text-white"
    },
    {
      id: 3,
      icon: Package,
      title: "Suivi en temps réel",
      description: "Suivez l'avancement de votre commande étape par étape jusqu'à la finition.",
      color: "bg-african-terracotta text-white"
    },
    {
      id: 4,
      icon: Truck,
      title: "Livraison à domicile",
      description: "Recevez votre vêtement directement chez vous ou récupérez-le en atelier.",
      color: "bg-gray-700 text-white"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En quelques clics, commandez votre vêtement sur mesure et laissez-vous guider 
            dans tout le processus.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative text-center group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform translate-x-4 z-0">
                  <div className="absolute right-0 top-1/2 transform translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              )}

              {/* Step Content */}
              <div className="relative z-10 bg-white rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8" />
                </div>

                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.id}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à commencer ?
            </h3>
            <p className="text-gray-600 mb-6">
              Rejoignez des milliers de clients satisfaits qui font confiance à nos tailleurs.
            </p>
            <div className="flex justify-center">
              <button className="gradient-gold text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Commencer ma commande
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
