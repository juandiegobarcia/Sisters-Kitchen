import React from 'react';
import { Instagram, Phone, MapPin, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#241C18] text-[#FAF8F5] pt-16 pb-12 border-t border-[#3B302A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Brand & Slogan */}
          <div className="md:col-span-6 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wider text-[#FAF8F5]">
              SISTERS' KITCHEN
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-[#E8DFD8] font-light max-w-md">
              “Comfort food que abraza el alma.”
            </p>
            <p className="text-xs uppercase tracking-widest text-[#E5B887]">
              Breakfast · Lunch · Brunch · Dessert · Seed oils free
            </p>
          </div>

          {/* Contact & Location details */}
          <div className="md:col-span-6 flex flex-col sm:flex-row justify-between gap-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#E5B887] font-semibold block">
                Ubicación
              </span>
              <p className="text-sm text-[#E8DFD8] leading-relaxed">
                Plaza Valeta, Federico González Suárez,<br />
                Quito, Ecuador
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#E5B887] font-semibold block">
                Contacto
              </span>
              <p className="text-sm text-[#E8DFD8]">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </p>
              <p className="text-sm text-[#E8DFD8]">
                Instagram:{' '}
                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E5B887] hover:underline"
                >
                  {RESTAURANT_INFO.instagram}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright line exactly as requested */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8DFD8]/60">
          <p>
            © SISTERS' KITCHEN — Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={RESTAURANT_INFO.creatorsInstagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Creado por</span>
              <span className="text-[#E5B887]">{RESTAURANT_INFO.creatorsInstagram}</span>
            </a>
            <span>·</span>
            <span>Quito, Ecuador</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
