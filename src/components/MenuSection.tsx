import React, { useState } from 'react';
import { Sparkles, Edit2, ArrowRight } from 'lucide-react';
import { MenuItem } from '../types';
import { FullMenuModal } from './FullMenuModal';
import { MenuManagerModal } from './MenuManagerModal';

interface MenuSectionProps {
  menuItems: MenuItem[];
  onUpdateMenuItems: (items: MenuItem[]) => void;
  onOpenOrders: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  menuItems,
  onUpdateMenuItems,
  onOpenOrders,
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuItem['category']>('Brunch');
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [isManagerOpen, setIsManagerOpen] = useState(false);

  const categories: MenuItem['category'][] = [
    'Breakfast',
    'Brunch',
    'Lunch',
    'Desserts',
    'Drinks',
    'Gluten-free options',
  ];

  const currentCategoryItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="menu" className="py-24 bg-[#F4EFEB]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A45C40]">
            Gastronomía Consciente
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#241C18] mt-2 mb-4">
            Nuestro Menú
          </h2>
          <p className="text-sm sm:text-base text-[#796C64] font-light leading-relaxed">
            Platos preparados al momento con ingredientes enteros, mantequilla de pastura pura y 100% libres de aceites vegetales o de semillas.
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-[#796C64]">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#241C18]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A45C40]" />
              Cocina libre de aceites de semillas
            </span>
            <span className="text-gray-300">·</span>
            <span>Opciones aptas para celíacos</span>
          </div>
        </div>

        {/* Category Filter Tabs (Segmented Controls) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#241C18] text-[#FAF8F5] shadow-xs'
                  : 'bg-white text-[#796C64] hover:text-[#241C18] hover:bg-[#FAF8F5] border border-[#E8DFD8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {currentCategoryItems.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8DFD8] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Dish Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#E8DFD8]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#241C18] shadow-xs tabular-nums">
                  ${dish.price.toFixed(2)}
                </div>
              </div>

              {/* Dish Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-xl font-bold text-[#241C18]">
                      {dish.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#796C64] leading-relaxed mb-4">
                    {dish.description}
                  </p>
                </div>

                {/* Dietary Tags (unboxed text style) */}
                <div className="pt-3 border-t border-[#F4EFEB] flex items-center justify-between text-xs text-[#A45C40] font-medium">
                  <div className="flex items-center gap-2">
                    {dish.isSeedOilsFree && <span>Seed oils free</span>}
                    {dish.isSeedOilsFree && dish.isGlutenFree && (
                      <span className="text-gray-300">·</span>
                    )}
                    {dish.isGlutenFree && <span className="text-emerald-700">Sin Gluten</span>}
                  </div>
                  <button
                    onClick={onOpenOrders}
                    className="text-[11px] font-semibold uppercase tracking-wider text-[#241C18] hover:text-[#A45C40] transition-colors"
                  >
                    Pedir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons Bar: VER MENÚ COMPLETO & Customization */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            onClick={() => setIsFullMenuOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#241C18] text-[#FAF8F5] hover:bg-[#3E3029] rounded-full transition-all duration-200 transform hover:-translate-y-0.5 shadow-md cursor-pointer"
          >
            <span>Ver Menú Completo</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsManagerOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium text-[#796C64] hover:text-[#241C18] border border-[#D8CCC3] hover:border-[#241C18] rounded-full bg-white transition-colors cursor-pointer"
            title="Actualizar o añadir platos al menú"
          >
            <Edit2 className="w-3.5 h-3.5 text-[#A45C40]" />
            <span>Editar menú</span>
          </button>
        </div>

      </div>

      {/* Full Menu Modal */}
      <FullMenuModal
        isOpen={isFullMenuOpen}
        onClose={() => setIsFullMenuOpen(false)}
        menuItems={menuItems}
        onOpenOrders={onOpenOrders}
      />

      {/* Menu Manager Modal */}
      <MenuManagerModal
        isOpen={isManagerOpen}
        onClose={() => setIsManagerOpen(false)}
        menuItems={menuItems}
        onUpdateMenuItems={onUpdateMenuItems}
      />
    </section>
  );
};
