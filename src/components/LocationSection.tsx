import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Car, 
  Dog, 
  Baby, 
  Edit3, 
  ExternalLink 
} from 'lucide-react';
import { DaySchedule } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ScheduleManagerModal } from './ScheduleManagerModal';

interface LocationSectionProps {
  schedule: DaySchedule[];
  onUpdateSchedule: (newSchedule: DaySchedule[]) => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  schedule,
  onUpdateSchedule,
}) => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  // Compute if currently open
  const now = new Date();
  const dayIndex = now.getDay(); // 0 is Sunday, 1 is Monday...
  // Map JS day to our schedule day array:
  const dayMap = [6, 0, 1, 2, 3, 4, 5]; // Sunday -> 6, Monday -> 0...
  const todaySchedule = schedule[dayMap[dayIndex]];

  const googleMapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Plaza+Valeta+Federico+Gonzalez+Suarez+170184+Quito+Ecuador";

  return (
    <section id="visitanos" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A45C40]">
            Encuéntranos en González Suárez
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#241C18] mt-2 mb-4">
            Visítanos
          </h2>
          <p className="text-sm sm:text-base text-[#796C64] font-light leading-relaxed">
            Te esperamos en un entorno acogedor, con estacionamiento cómodo y la mejor vibra de Quito.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Details & Schedule */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-8 border border-[#E8DFD8] shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address Block */}
              <div>
                <div className="flex items-center gap-2 text-[#A45C40] mb-1">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span className="text-xs uppercase tracking-wider font-bold">
                    Dirección
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#241C18]">
                  Plaza Valeta
                </h3>
                <p className="text-base text-[#3B302A] mt-1">
                  Federico González Suárez 170184, Local 8
                </p>
                <p className="text-sm text-[#796C64]">
                  Quito, Ecuador
                </p>
              </div>

              {/* Telephone */}
              <div className="pt-4 border-t border-[#F4EFEB]">
                <div className="flex items-center gap-2 text-[#A45C40] mb-1">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span className="text-xs uppercase tracking-wider font-bold">
                    Teléfono & WhatsApp
                  </span>
                </div>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="text-lg font-semibold text-[#241C18] hover:text-[#A45C40] transition-colors inline-block"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              {/* Schedule Section with Edit Button */}
              <div className="pt-4 border-t border-[#F4EFEB]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-[#A45C40]">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span className="text-xs uppercase tracking-wider font-bold">
                      Horarios de Atención
                    </span>
                  </div>
                  <button
                    onClick={() => setIsScheduleModalOpen(true)}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#A45C40] hover:text-[#874730] transition-colors"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>Editar horarios</span>
                  </button>
                </div>

                <div className="space-y-1.5 text-xs text-[#3B302A]">
                  {schedule.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between py-1 border-b border-[#FAF8F5] last:border-none"
                    >
                      <span className="font-medium text-[#241C18]">{item.day}</span>
                      <span className="text-[#796C64]">
                        {item.isClosed ? 'Cerrado' : `${item.open} – ${item.close}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities overview */}
              <div className="pt-4 border-t border-[#F4EFEB] flex flex-wrap gap-2 text-xs text-[#5C4D44]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF8F5] rounded-full border border-[#E8DFD8]">
                  <Dog className="w-3.5 h-3.5 text-[#A45C40]" /> Pet Friendly
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF8F5] rounded-full border border-[#E8DFD8]">
                  <Car className="w-3.5 h-3.5 text-[#A45C40]" /> Estacionamiento
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF8F5] rounded-full border border-[#E8DFD8]">
                  <Baby className="w-3.5 h-3.5 text-[#A45C40]" /> Sillas altas
                </span>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="mt-8 pt-6 border-t border-[#E8DFD8]">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#241C18] hover:bg-[#3E3029] rounded-xl transition-all duration-200 shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#E5B887]" />
                <span>Cómo llegar (Google Maps)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-7 bg-[#E8DFD8] rounded-2xl overflow-hidden border border-[#E8DFD8] shadow-xs min-h-[420px] relative">
            <iframe
              title="Ubicación de SISTERS' KITCHEN en Plaza Valeta, González Suárez, Quito"
              src="https://maps.google.com/maps?q=Plaza+Valeta+Federico+Gonzalez+Suarez+Quito+Ecuador&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[420px] border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-md border border-[#E8DFD8] pointer-events-none">
              <p className="font-serif text-sm font-bold text-[#241C18]">
                Plaza Valeta · Local 8
              </p>
              <p className="text-[11px] text-[#796C64]">
                González Suárez, Quito
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Schedule Edit Modal */}
      <ScheduleManagerModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        schedule={schedule}
        onUpdateSchedule={onUpdateSchedule}
      />
    </section>
  );
};
