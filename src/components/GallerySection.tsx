import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/restaurantData';

export const GallerySection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A45C40]">
            Momentos en SISTERS' KITCHEN
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#241C18] mt-2 mb-4">
            Nuestra Galería
          </h2>
          
          {/* Requested Quote verbatim */}
          <p className="font-serif italic text-xl sm:text-2xl text-[#874730] font-light mt-3">
            “Good food. Good mood. Good company.”
          </p>
        </div>

        {/* Masonry / Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Item 1: Large Featured (Spans 2 columns, 2 rows on desktop) */}
          <div
            onClick={() => setActivePhoto(GALLERY_IMAGES[0].src)}
            className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer bg-[#E8DFD8] shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <img
              src={GALLERY_IMAGES[0].src}
              alt={GALLERY_IMAGES[0].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#E5B887] font-medium mb-1">
                  Brunch & Desayunos
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  {GALLERY_IMAGES[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 mt-1">
                  {GALLERY_IMAGES[0].subtitle}
                </p>
              </div>
              <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div
            onClick={() => setActivePhoto(GALLERY_IMAGES[1].src)}
            className="relative rounded-2xl overflow-hidden group cursor-pointer bg-[#E8DFD8] shadow-sm hover:shadow-md transition-all duration-300"
          >
            <img
              src={GALLERY_IMAGES[1].src}
              alt={GALLERY_IMAGES[1].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h4 className="font-serif text-lg font-bold">
                {GALLERY_IMAGES[1].title}
              </h4>
              <p className="text-xs text-gray-200">{GALLERY_IMAGES[1].subtitle}</p>
            </div>
          </div>

          {/* Item 3 */}
          <div
            onClick={() => setActivePhoto(GALLERY_IMAGES[2].src)}
            className="relative rounded-2xl overflow-hidden group cursor-pointer bg-[#E8DFD8] shadow-sm hover:shadow-md transition-all duration-300"
          >
            <img
              src={GALLERY_IMAGES[2].src}
              alt={GALLERY_IMAGES[2].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h4 className="font-serif text-lg font-bold">
                {GALLERY_IMAGES[2].title}
              </h4>
              <p className="text-xs text-gray-200">{GALLERY_IMAGES[2].subtitle}</p>
            </div>
          </div>

          {/* Item 4 */}
          <div
            onClick={() => setActivePhoto(GALLERY_IMAGES[3].src)}
            className="relative rounded-2xl overflow-hidden group cursor-pointer bg-[#E8DFD8] shadow-sm hover:shadow-md transition-all duration-300"
          >
            <img
              src={GALLERY_IMAGES[3].src}
              alt={GALLERY_IMAGES[3].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h4 className="font-serif text-lg font-bold">
                {GALLERY_IMAGES[3].title}
              </h4>
              <p className="text-xs text-gray-200">{GALLERY_IMAGES[3].subtitle}</p>
            </div>
          </div>

          {/* Item 5 */}
          <div
            onClick={() => setActivePhoto(GALLERY_IMAGES[4].src)}
            className="md:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer bg-[#E8DFD8] shadow-sm hover:shadow-md transition-all duration-300"
          >
            <img
              src={GALLERY_IMAGES[4].src}
              alt={GALLERY_IMAGES[4].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
              <div>
                <h4 className="font-serif text-xl font-bold">
                  {GALLERY_IMAGES[4].title}
                </h4>
                <p className="text-xs text-gray-200">{GALLERY_IMAGES[4].subtitle}</p>
              </div>
              <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-xl">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activePhoto}
              alt="Detalle de galería SISTERS' KITCHEN"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain max-h-[85vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};
