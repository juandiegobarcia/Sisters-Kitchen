import React from 'react';
import { ArrowDown, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onExploreMenu: () => void;
  onGetDirections: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onGetDirections }) => {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background with warm ambient photography and measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_sisters_kitchen_brunch_1790299680155.jpg"
          alt="Mesa de brunch en SISTERS' KITCHEN con pancakes dorados, tostón de aguacate y café de especialidad"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.88] saturate-[1.05]"
        />
        {/* Measured gradient scrims for contrast and warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#241C18]/90 via-[#241C18]/45 to-[#241C18]/35" />
        <div className="absolute inset-0 bg-[#A45C40]/10 mix-blend-overlay" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-8">
        {/* Seed oils free subtle mark */}
        <div className="inline-flex items-center gap-2 mb-6 text-xs sm:text-sm tracking-widest uppercase font-medium text-[#FAF8F5]/90">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5B887]" />
          <span>Seed oils free</span>
          <span className="text-[#FAF8F5]/40">·</span>
          <span>Cocina libre de aceites vegetales</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5B887]" />
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.08] mb-6 text-[#FAF8F5] drop-shadow-sm text-balance">
          SISTERS' KITCHEN
        </h1>

        {/* Slogan */}
        <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#F4EFEB] font-light max-w-2xl mx-auto mb-6 drop-shadow-xs">
          “Comfort food que abraza el alma.”
        </p>

        {/* Secondary text */}
        <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] text-[#E8DFD8] font-medium mb-10">
          Breakfast · Lunch · Brunch · Dessert
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-md mx-auto">
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#FAF8F5] text-[#241C18] hover:bg-[#F4EFEB] rounded-full transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg cursor-pointer"
          >
            Ver Menú
          </button>
          <button
            onClick={onGetDirections}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-white/10 hover:bg-white/20 text-[#FAF8F5] backdrop-blur-md border border-white/25 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 shadow-xs cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#E5B887]" />
            <span>Cómo llegar</span>
          </button>
        </div>

        {/* Location subtle footer in hero */}
        <div className="mt-14 pt-8 border-t border-white/15 max-w-xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#E8DFD8]/80 font-light">
          <span>Plaza Valeta, Local 8</span>
          <span aria-hidden="true">·</span>
          <span>González Suárez, Quito</span>
          <span aria-hidden="true">·</span>
          <span>Pet Friendly</span>
        </div>
      </div>

      {/* Subtle down scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce hidden sm:block">
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
};
