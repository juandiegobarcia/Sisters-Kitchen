import React, { useState } from 'react';
import { X, Plus, Trash2, Edit3, Check, RotateCcw } from 'lucide-react';
import { MenuItem } from '../types';
import { INITIAL_MENU_ITEMS } from '../data/restaurantData';

interface MenuManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  onUpdateMenuItems: (items: MenuItem[]) => void;
}

export const MenuManagerModal: React.FC<MenuManagerModalProps> = ({
  isOpen,
  onClose,
  menuItems,
  onUpdateMenuItems,
}) => {
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const [formName, setFormName] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formPrice, setFormPrice] = useState('8.50');
  const [formCategory, setFormCategory] = useState<MenuItem['category']>('Brunch');
  const [formIsGF, setFormIsGF] = useState(false);
  const [formIsSOF, setFormIsSOF] = useState(true);

  if (!isOpen) return null;

  const categories: MenuItem['category'][] = [
    'Breakfast',
    'Brunch',
    'Lunch',
    'Desserts',
    'Drinks',
    'Gluten-free options',
  ];

  const handleStartEdit = (item: MenuItem) => {
    setEditingItem(item);
    setIsAddingNew(false);
    setFormName(item.name);
    setFormDescription(item.description);
    setFormPrice(item.price.toString());
    setFormCategory(item.category);
    setFormIsGF(!!item.isGlutenFree);
    setFormIsSOF(!!item.isSeedOilsFree);
  };

  const handleStartAdd = () => {
    setEditingItem(null);
    setIsAddingNew(true);
    setFormName('');
    setFormDescription('');
    setFormPrice('9.00');
    setFormCategory('Brunch');
    setFormIsGF(false);
    setFormIsSOF(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const priceNum = parseFloat(formPrice) || 0;

    if (isAddingNew) {
      const newItem: MenuItem = {
        id: `item-${Date.now()}`,
        name: formName || 'Nuevo Plato',
        description: formDescription || 'Descripción del plato casero.',
        price: priceNum,
        category: formCategory,
        image: '/src/assets/images/hero_sisters_kitchen_brunch_1790299680155.jpg',
        isGlutenFree: formIsGF,
        isSeedOilsFree: formIsSOF,
      };
      onUpdateMenuItems([...menuItems, newItem]);
      setIsAddingNew(false);
    } else if (editingItem) {
      const updated = menuItems.map((item) =>
        item.id === editingItem.id
          ? {
              ...item,
              name: formName,
              description: formDescription,
              price: priceNum,
              category: formCategory,
              isGlutenFree: formIsGF,
              isSeedOilsFree: formIsSOF,
            }
          : item
      );
      onUpdateMenuItems(updated);
      setEditingItem(null);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('¿Estás seguro de eliminar este plato del menú?')) {
      onUpdateMenuItems(menuItems.filter((item) => item.id !== id));
    }
  };

  const handleResetToDefaults = () => {
    if (confirm('¿Deseas restaurar el menú a los platos iniciales predeterminados?')) {
      onUpdateMenuItems(INITIAL_MENU_ITEMS);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#FAF8F5] rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#E8DFD8] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#E8DFD8] flex items-center justify-between bg-white">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#241C18]">
              Administrador de Menú
            </h3>
            <p className="text-xs text-[#796C64]">
              Actualiza platos, precios y opciones fácilmente
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleResetToDefaults}
              title="Restaurar menú original"
              className="p-2 text-xs text-[#796C64] hover:text-[#241C18] rounded-lg border border-[#E8DFD8] hover:bg-[#FAF8F5] flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Restaurar</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#796C64] hover:text-[#241C18] rounded-full hover:bg-[#F4EFEB]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Add / Edit Form */}
          {(isAddingNew || editingItem) ? (
            <form onSubmit={handleSave} className="bg-white p-5 rounded-xl border border-[#E8DFD8] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#F4EFEB]">
                <h4 className="font-semibold text-sm text-[#241C18]">
                  {isAddingNew ? 'Añadir Nuevo Plato' : `Editar: ${editingItem?.name}`}
                </h4>
                <button
                  type="button"
                  onClick={() => {
                    setEditingItem(null);
                    setIsAddingNew(false);
                  }}
                  className="text-xs text-[#796C64] hover:underline"
                >
                  Cancelar
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#3B302A] mb-1">
                    Nombre del Plato
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full text-sm px-3 py-2 border border-[#E8DFD8] rounded-lg focus:outline-hidden focus:border-[#A45C40]"
                    placeholder="Ej. Golden Waffles de Espelta"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#3B302A] mb-1">
                    Precio ($ USD)
                  </label>
                  <input
                    type="number"
                    step="0.25"
                    min="0"
                    required
                    value={formPrice}
                    onChange={(e) => setFormPrice(e.target.value)}
                    className="w-full text-sm px-3 py-2 border border-[#E8DFD8] rounded-lg focus:outline-hidden focus:border-[#A45C40]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#3B302A] mb-1">
                    Categoría
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value as MenuItem['category'])}
                    className="w-full text-sm px-3 py-2 border border-[#E8DFD8] rounded-lg focus:outline-hidden focus:border-[#A45C40] bg-white"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-4 pt-5">
                  <label className="flex items-center gap-2 text-xs text-[#3B302A] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formIsSOF}
                      onChange={(e) => setFormIsSOF(e.target.checked)}
                      className="rounded text-[#A45C40]"
                    />
                    <span>Seed oils free</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-[#3B302A] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formIsGF}
                      onChange={(e) => setFormIsGF(e.target.checked)}
                      className="rounded text-[#A45C40]"
                    />
                    <span>Sin Gluten (GF)</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#3B302A] mb-1">
                  Descripción e Ingredientes
                </label>
                <textarea
                  rows={2}
                  required
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="w-full text-sm px-3 py-2 border border-[#E8DFD8] rounded-lg focus:outline-hidden focus:border-[#A45C40]"
                  placeholder="Detalla los ingredientes y características..."
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#241C18] hover:bg-[#3E3029] rounded-lg"
                >
                  Guardar Plato
                </button>
              </div>
            </form>
          ) : (
            <div className="flex justify-end">
              <button
                onClick={handleStartAdd}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#A45C40] hover:bg-[#874730] rounded-xl shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Añadir nuevo plato</span>
              </button>
            </div>
          )}

          {/* List of current items */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#796C64]">
              Platos Registrados ({menuItems.length})
            </h4>
            <div className="divide-y divide-[#E8DFD8] bg-white rounded-xl border border-[#E8DFD8] overflow-hidden">
              {menuItems.map((item) => (
                <div key={item.id} className="p-4 flex items-center justify-between gap-4 hover:bg-[#FAF8F5]">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-[#241C18] truncate">
                        {item.name}
                      </span>
                      <span className="text-xs text-[#796C64]">· {item.category}</span>
                      {item.isGlutenFree && (
                        <span className="text-[10px] text-[#A45C40] bg-[#FAF8F5] px-1.5 py-0.5 rounded border border-[#E8DFD8]">GF</span>
                      )}
                    </div>
                    <p className="text-xs text-[#796C64] truncate mt-0.5">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-medium text-sm text-[#241C18] tabular-nums">
                      ${item.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleStartEdit(item)}
                      className="p-1.5 text-[#796C64] hover:text-[#241C18] rounded-md hover:bg-[#F4EFEB]"
                      title="Editar"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-1.5 text-red-500 hover:text-red-700 rounded-md hover:bg-red-50"
                      title="Eliminar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#E8DFD8] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#241C18] hover:bg-[#3E3029] rounded-lg"
          >
            Listo
          </button>
        </div>
      </div>
    </div>
  );
};
