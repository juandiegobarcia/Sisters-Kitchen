import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenOrders: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrders }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Nosotras', href: '#sobre-nosotras' },
    { name: 'Menú', href: '#menu' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Visítanos', href: '#visitanos' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFD8]/80 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="text-xl sm:text-2xl font-serif font-bold tracking-wider text-[#241C18] hover:text-[#A45C40] transition-colors"
            >
              SISTERS' KITCHEN
            </a>

            {/* Zone 2: 4-6 text navigation links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#3B302A]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative py-1 hover:text-[#A45C40] transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#A45C40] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold text-[#5C4D44] hover:text-[#241C18] px-3 py-2 rounded-full transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#A45C40]" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>
              <button
                onClick={onOpenOrders}
                className="px-4 py-2 text-xs font-medium tracking-wide uppercase text-white bg-[#241C18] hover:bg-[#3E3029] rounded-full transition-colors shadow-xs"
              >
                Hacer Pedido
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#241C18] hover:text-[#A45C40] focus:outline-hidden"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 sm:hidden bg-black/40 backdrop-blur-xs flex justify-end">
          <div className="w-4/5 max-w-sm bg-[#FAF8F5] h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E8DFD8]">
                <span className="font-serif text-xl font-bold tracking-wider text-[#241C18]">
                  SISTERS' KITCHEN
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#3B302A] hover:text-[#A45C40]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-[#241C18] hover:text-[#A45C40] py-2 border-b border-[#F4EFEB] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-4 space-y-3">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="flex items-center gap-3 text-sm text-[#3B302A] py-2"
                >
                  <Phone className="w-4 h-4 text-[#A45C40]" />
                  <span>{RESTAURANT_INFO.phone}</span>
                </a>
                <a
                  href="#visitanos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-sm text-[#3B302A] py-2"
                >
                  <MapPin className="w-4 h-4 text-[#A45C40]" />
                  <span>Plaza Valeta, Local 8, Quito</span>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8DFD8]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrders();
                }}
                className="w-full py-3 text-center text-sm font-medium uppercase tracking-wider text-white bg-[#241C18] hover:bg-[#3E3029] rounded-xl transition-colors shadow-sm"
              >
                Hacer Pedido / Para Llevar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
