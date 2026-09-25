import React from 'react';
import { Heart, Sparkles, Instagram } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const About: React.FC = () => {
  const highlights = [
    {
      title: "Seed oils free",
      tagline: "Libre de aceites de semillas",
      description: "Cocinamos exclusivamente con grasas nobles: mantequilla de pastura pura, aceite de oliva extra virgen y aceites enteros naturales.",
    },
    {
      title: "Breakfast",
      tagline: "Desayunos artesanales",
      description: "Huevos pochados al punto, sourdough crujiente, pancakes dorados y café de especialidad para iniciar la mañana.",
    },
    {
      title: "Brunch",
      tagline: "El ritual del fin de semana",
      description: "El balance idóneo entre lo dulce y lo salado: French toasts con mascarpone, bowls energéticos y jugos naturales.",
    },
    {
      title: "Lunch",
      tagline: "Almuerzos nutritivos",
      description: "Platos completos, bowls balanceados, sándwiches en masa madre y sopas reconfortantes para recargar energías.",
    },
    {
      title: "Desserts",
      tagline: "Postres & opciones sin gluten",
      description: "Skillet cookies recién horneadas, tartas rústicas y repostería cuidada con ingredientes puros y opciones celíaco-amigables.",
    },
  ];

  return (
    <section id="sobre-nosotras" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Editorial Image Block */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/5 bg-[#E8DFD8]">
              <img
                src="/src/assets/images/about_sisters_kitchen_table_1790299692201.jpg"
                alt="Ambiente cálido y acogedor en SISTERS' KITCHEN Quito"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241C18]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif italic text-lg sm:text-xl text-[#F4EFEB]">
                  "Cocinar con intención, servir con cariño."
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs text-[#E8DFD8]">
                  <span>Plaza Valeta, González Suárez</span>
                  <span>·</span>
                  <span>Quito</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative floating badge */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-lg border border-[#E8DFD8] max-w-[210px]">
              <div className="flex items-center gap-2 text-[#A45C40] mb-1">
                <Heart className="w-4 h-4 fill-[#A45C40]" />
                <span className="text-xs uppercase font-bold tracking-wider">Hecho con amor</span>
              </div>
              <p className="text-xs text-[#796C64] leading-relaxed">
                Creado por las hermanas de <span className="font-semibold text-[#241C18]">@sisters.thatcook</span>
              </p>
            </div>
          </div>

          {/* Right: Story and Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A45C40]">
                Nuestra Historia
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#241C18] mt-2 mb-6 leading-tight text-balance">
                Comida reconfortante que abraza desde el primer bocado.
              </h2>
              
              {/* Concept Quote verbatim from prompt */}
              <div className="p-6 rounded-2xl bg-[#F4EFEB] border-l-4 border-[#A45C40]">
                <p className="font-serif italic text-lg sm:text-xl text-[#3B302A] leading-relaxed">
                  “SISTERS' KITCHEN nace de la pasión por crear comida reconfortante, deliciosa y hecha con intención. Un espacio para desayunar, disfrutar un brunch, almorzar y compartir algo rico en un ambiente cálido y acogedor.”
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={RESTAURANT_INFO.creatorsInstagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A45C40] hover:text-[#874730] transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Conoce a las creadoras: {RESTAURANT_INFO.creatorsInstagram}</span>
                  </a>
                  <span className="text-xs text-[#796C64]">Quito, Ecuador</span>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="pt-2">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-[#796C64] mb-4">
                Nuestros Pilares Gastronómicos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={item.title}
                    className={`p-4 rounded-xl border border-[#E8DFD8] bg-white transition-all duration-200 hover:border-[#A45C40]/50 hover:shadow-xs ${
                      index === 0 ? 'sm:col-span-2 bg-[#FAF8F5] border-[#D8CCC3]' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-serif text-lg font-bold text-[#241C18]">
                        {item.title}
                      </h4>
                      <span className="text-[11px] font-medium text-[#A45C40] tracking-wide">
                        {item.tagline}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#796C64] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
