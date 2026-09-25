import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Truck, 
  MapPin, 
  Phone, 
  ArrowRight, 
  MessageCircle, 
  Clock, 
  ExternalLink 
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OrdersSectionProps {
  onScrollToLocation: () => void;
}

export const OrdersSection: React.FC<OrdersSectionProps> = ({ onScrollToLocation }) => {
  const [takeoutNotes, setTakeoutNotes] = useState('');
  const [takeoutName, setTakeoutName] = useState('');

  const whatsappTakeoutUrl = `https://wa.me/593968493083?text=${encodeURIComponent(
    `¡Hola SISTERS' KITCHEN! Me gustaría hacer un pedido para llevar.${
      takeoutName ? ` A nombre de: ${takeoutName}.` : ''
    }${takeoutNotes ? ` Detalle: ${takeoutNotes}` : ''}`
  )}`;

  const whatsappDeliveryUrl = `https://wa.me/593968493083?text=${encodeURIComponent(
    "¡Hola SISTERS' KITCHEN! Me gustaría consultar disponibilidad de pedido a domicilio."
  )}`;

  return (
    <section id="pedidos" className="py-24 bg-[#F4EFEB]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A45C40]">
            Disfruta Donde Quieras
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#241C18] mt-2 mb-4">
            ¿Cómo Deseas Ordenar?
          </h2>
          <p className="text-sm sm:text-base text-[#796C64] font-light leading-relaxed">
            Elige la opción que mejor se adapte a tu plan del día. Preparamos cada orden con empaque ecológico y todo el cariño.
          </p>
        </div>

        {/* 3 Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Option 1: Pedir para llevar */}
          <div className="bg-white rounded-2xl p-8 border border-[#E8DFD8] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8DFD8] flex items-center justify-center text-[#A45C40] mb-6">
                <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#241C18] mb-3">
                Pedir para llevar
              </h3>
              <p className="text-xs sm:text-sm text-[#796C64] leading-relaxed mb-6">
                Pide con anticipación por WhatsApp o teléfono. Lo tendremos fresco y listo para que lo retires rápidamente en Plaza Valeta.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#F4EFEB]">
              <a
                href={whatsappTakeoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#241C18] hover:bg-[#3E3029] rounded-xl transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Pedir por WhatsApp</span>
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-[#5C4D44] hover:text-[#241C18] hover:bg-[#FAF8F5] rounded-xl transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Llamar: {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Option 2: Pedir a domicilio */}
          <div className="bg-white rounded-2xl p-8 border border-[#A45C40]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative">
            <div className="absolute top-4 right-4">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FAF8F5] text-[#A45C40] border border-[#E8DFD8]">
                A tu puerta
              </span>
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8DFD8] flex items-center justify-center text-[#A45C40] mb-6">
                <Truck className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#241C18] mb-3">
                Pedir a domicilio
              </h3>
              <p className="text-xs sm:text-sm text-[#796C64] leading-relaxed mb-6">
                Disfruta de nuestros brunch y comfort food en casa u oficina. Calificación 4.9⭐ en delivery.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#F4EFEB]">
              {/* Ready for official delivery link or direct WhatsApp ordering */}
              <a
                href={whatsappDeliveryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#A45C40] hover:bg-[#874730] rounded-xl transition-colors shadow-xs"
              >
                <span>Pedir a Domicilio</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-center text-[#796C64]">
                También disponible en apps de delivery en Quito
              </p>
            </div>
          </div>

          {/* Option 3: Visítanos */}
          <div className="bg-white rounded-2xl p-8 border border-[#E8DFD8] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8DFD8] flex items-center justify-center text-[#A45C40] mb-6">
                <MapPin className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#241C18] mb-3">
                Visítanos
              </h3>
              <p className="text-xs sm:text-sm text-[#796C64] leading-relaxed mb-6">
                Ven a vivir la experiencia en Plaza Valeta. Espacio pet friendly, sillas altas y estacionamiento disponible.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#F4EFEB]">
              <button
                onClick={onScrollToLocation}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#241C18] hover:text-white bg-[#FAF8F5] hover:bg-[#241C18] border border-[#D8CCC3] rounded-xl transition-all duration-200 cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                <span>Ver Mapa & Dirección</span>
              </button>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#796C64]">
                <Clock className="w-3.5 h-3.5 text-[#A45C40]" />
                <span>Consulta nuestros horarios</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
