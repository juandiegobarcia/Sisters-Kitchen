import React from 'react';
import { Star, ShieldCheck, ExternalLink, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF8F5] relative border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A45C40]">
            Reputación & Confianza
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#241C18] mt-2 mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-sm sm:text-base text-[#796C64] font-light leading-relaxed">
            Calificaciones reales y verificadas en plataformas públicas por quienes disfrutan a diario de nuestra cocina.
          </p>
        </div>

        {/* Aggregate Ratings Cards (Exact numbers from prompt) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          
          {/* Google Reviews Card */}
          <div className="bg-white rounded-2xl p-8 border border-[#E8DFD8] shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#796C64]">
                  Opiniones Verificadas
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#241C18] mt-1">
                  Google
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E8DFD8] flex items-center justify-center font-bold text-sm text-[#241C18]">
                G
              </div>
            </div>

            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-serif text-5xl font-bold text-[#241C18] tabular-nums">
                {RESTAURANT_INFO.googleRating.score.toFixed(1)}
              </span>
              <div>
                <div className="flex items-center gap-1 text-[#E5A84B] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4 ? 'fill-[#E5A84B]' : 'fill-[#E5A84B]/40'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-[#796C64]">
                  Basado en <span className="font-semibold text-[#241C18]">{RESTAURANT_INFO.googleRating.reviewsCount} opiniones</span>
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F4EFEB] flex items-center justify-between">
              <span className="text-xs text-[#796C64]">
                Precio promedio: <strong className="text-[#241C18]">{RESTAURANT_INFO.pricePerPerson}</strong> / persona
              </span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=SISTERS+KITCHEN+Plaza+Valeta+Quito"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#A45C40] hover:text-[#874730]"
              >
                <span>Ver en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Uber Eats Reviews Card */}
          <div className="bg-white rounded-2xl p-8 border border-[#E8DFD8] shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#796C64]">
                  Calificación de Entrega
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#241C18] mt-1">
                  Uber Eats
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E8DFD8] flex items-center justify-center font-bold text-xs text-[#06C167]">
                UE
              </div>
            </div>

            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-serif text-5xl font-bold text-[#241C18] tabular-nums">
                {RESTAURANT_INFO.uberEatsRating.score.toFixed(1)}
              </span>
              <div>
                <div className="flex items-center gap-1 text-[#06C167] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#06C167]" />
                  ))}
                </div>
                <p className="text-xs text-[#796C64]">
                  Basado en <span className="font-semibold text-[#241C18]">{RESTAURANT_INFO.uberEatsRating.reviewsCount} opiniones</span>
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F4EFEB] flex items-center justify-between">
              <span className="text-xs text-[#796C64]">
                Excelente satisfacción en empaque y sabor
              </span>
              <span className="text-xs font-semibold text-[#06C167]">
                4.9 Excelente
              </span>
            </div>
          </div>

        </div>

        {/* Commitment note adhering to prompt policy */}
        <div className="max-w-2xl mx-auto text-center p-4 rounded-xl bg-[#F4EFEB] border border-[#E8DFD8]">
          <p className="text-xs text-[#796C64] leading-relaxed">
            * Mostramos exclusivamente métricas y valoraciones oficiales registradas en Google y Uber Eats. Tu opinión es el ingrediente más valioso para seguir mejorando.
          </p>
        </div>

      </div>
    </section>
  );
};
