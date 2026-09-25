import React, { useState } from 'react';
import { X, Search, Sparkles, Printer, Check, Phone } from 'lucide-react';
import { MenuItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  onOpenOrders: () => void;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({
  isOpen,
  onClose,
  menuItems,
  onOpenOrders,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [onlyGF, setOnlyGF] = useState(false);

  if (!isOpen) return null;

  const categories = [
    'All',
    'Breakfast',
    'Brunch',
    'Lunch',
    'Desserts',
    'Drinks',
    'Gluten-free options',
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' ? true : item.category === selectedCategory;
    const matchesGF = onlyGF ? item.isGlutenFree : true;
    return matchesSearch && matchesCategory && matchesGF;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#FAF8F5] rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-[#E8DFD8] overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 bg-white border-b border-[#E8DFD8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-[#241C18]">
                SISTERS' KITCHEN
              </span>
              <span className="text-xs uppercase px-2 py-0.5 rounded-sm bg-[#F4EFEB] text-[#A45C40] font-medium">
                Menú Completo
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#796C64] mt-1">
              "Comfort food que abraza el alma" · 100% Seed Oils Free
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-xs text-[#796C64] hover:text-[#241C18] border border-[#E8DFD8] rounded-lg hover:bg-[#FAF8F5] flex items-center gap-1.5"
              title="Imprimir Menú"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Imprimir</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#796C64] hover:text-[#241C18] rounded-full hover:bg-[#F4EFEB]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 bg-[#F4EFEB]/80 border-b border-[#E8DFD8] flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#796C64]" />
            <input
              type="text"
              placeholder="Buscar plato, ingrediente o bebida..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-white border border-[#E8DFD8] rounded-lg focus:outline-hidden focus:border-[#A45C40]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <label className="flex items-center gap-1.5 text-xs text-[#3B302A] px-2 py-1 bg-white rounded-lg border border-[#E8DFD8] cursor-pointer shrink-0">
              <input
                type="checkbox"
                checked={onlyGF}
                onChange={(e) => setOnlyGF(e.target.checked)}
                className="text-[#A45C40] rounded"
              />
              <span>Solo Sin Gluten (GF)</span>
            </label>
          </div>
        </div>

        {/* Categories Tabs */}
        <div className="px-6 py-2 bg-white border-b border-[#E8DFD8] flex items-center gap-2 overflow-x-auto text-xs font-medium">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#241C18] text-white'
                  : 'text-[#796C64] hover:bg-[#F4EFEB]'
              }`}
            >
              {cat === 'All' ? 'Todos los Platos' : cat}
            </button>
          ))}
        </div>

        {/* Menu Items List */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-[#796C64]">
              <p className="text-base font-medium">No encontramos platos con ese criterio.</p>
              <p className="text-xs mt-1">Prueba con otra búsqueda o limpia los filtros.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-white rounded-xl border border-[#E8DFD8] hover:border-[#D8CCC3] transition-all flex gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover shrink-0 bg-[#E8DFD8]"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-base font-bold text-[#241C18] leading-tight">
                          {item.name}
                        </h4>
                        <span className="font-semibold text-sm text-[#A45C40] tabular-nums shrink-0">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-xs text-[#796C64] line-clamp-2 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-2 text-[11px] text-[#A45C40] font-medium">
                      <span>{item.category}</span>
                      {item.isSeedOilsFree && (
                        <>
                          <span className="text-gray-300">·</span>
                          <span>Seed oils free</span>
                        </>
                      )}
                      {item.isGlutenFree && (
                        <>
                          <span className="text-gray-300">·</span>
                          <span className="text-emerald-700">Sin Gluten</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-[#E8DFD8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#796C64]">
          <div className="flex items-center gap-2">
            <span>Precios incluyen impuestos y servicio.</span>
            <span>·</span>
            <span>Plaza Valeta, Local 8, Quito</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenOrders();
              }}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#241C18] hover:bg-[#3E3029] rounded-lg transition-colors"
            >
              Hacer Pedido / Para Llevar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
