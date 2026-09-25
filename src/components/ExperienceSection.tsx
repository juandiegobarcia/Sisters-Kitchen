import React from 'react';
import { 
  Heart, 
  Sparkles, 
  Leaf, 
  Dog, 
  Coffee, 
  ShieldCheck, 
  Car, 
  Baby, 
  ShoppingBag, 
  Clock 
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ExperienceSection: React.FC = () => {
  const pillars = [
    {
      icon: Heart,
      title: "Comfort Food",
      description: "Recetas cálidas pensadas para reconfortar el espíritu, elaboradas con técnicas tradicionales y dedicación artesanal en cada plato.",
    },
    {
      icon: Sparkles,
      title: "Ingredientes Cuidadosamente Seleccionados",
      description: "Frutas frescas de temporada, huevos de gallinas de campo, harinas de calidad y cafés de especialidad tostados localmente.",
    },
    {
      icon: ShieldCheck,
      title: "Cocina Libre de Aceites Vegetales",
      description: "Preparamos todo con grasas naturales como mantequilla de pastura pura y aceite de oliva extra virgen, sin aceites de semillas.",
    },
    {
      icon: Leaf,
      title: "Opciones Sin Gluten",
      description: "Alternativas deliciosas de repostería y platos salados adaptados para quienes prefieren o requieren evitar el gluten.",
    },
    {
      icon: Coffee,
      title: "Ambiente Acogedor",
      description: "Un espacio íntimo y luminoso en Plaza Valeta para disfrutar solo con un libro, en pareja o compartiendo entre amigos.",
    },
    {
      icon: Dog,
      title: "Pet Friendly",
      description: "Las mascotas son familia. Tu perrito es siempre bienvenido en nuestro espacio con agua fresca y cariño sincero.",
    },
  ];

  return (
    <section id="experiencia" className="py-24 bg-[#F4EFEB]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A45C40]">
            Nuestra Filosofía
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#241C18] mt-2 mb-4">
            La Experiencia SISTERS' KITCHEN
          </h2>
          <p className="text-sm sm:text-base text-[#796C64] font-light leading-relaxed">
            Cada detalle está pensado para hacerte sentir como en la cocina de casa, pero con la elegancia y cuidado de un restaurante boutique contemporáneo.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white p-7 rounded-2xl border border-[#E8DFD8] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8DFD8] flex items-center justify-center text-[#A45C40] mb-5">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#241C18] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#796C64] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Amenities Bar */}
        <div className="bg-white rounded-2xl border border-[#E8DFD8] p-6 sm:p-8 shadow-xs">
          <h4 className="text-xs uppercase tracking-widest font-semibold text-[#796C64] text-center mb-6">
            Comodidades & Servicios del Local
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {RESTAURANT_INFO.services.map((service) => (
              <div key={service.id} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E8DFD8] flex items-center justify-center text-[#241C18] mb-2">
                  {service.id === 'dogs' && <Dog className="w-5 h-5 text-[#A45C40]" />}
                  {service.id === 'chairs' && <Baby className="w-5 h-5 text-[#A45C40]" />}
                  {service.id === 'parking' && <Car className="w-5 h-5 text-[#A45C40]" />}
                  {service.id === 'takeout' && <ShoppingBag className="w-5 h-5 text-[#A45C40]" />}
                  {service.id === 'delivery' && <Clock className="w-5 h-5 text-[#A45C40]" />}
                </div>
                <span className="text-xs font-semibold text-[#241C18]">
                  {service.label}
                </span>
                <span className="text-[11px] text-[#796C64] mt-0.5 max-w-[150px] hidden sm:block">
                  {service.description}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
