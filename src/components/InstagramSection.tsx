import React from 'react';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const InstagramSection: React.FC = () => {
  const instagramPosts = [
    {
      image: "/src/assets/images/hero_sisters_kitchen_brunch_1790299680155.jpg",
      likes: "248",
      caption: "El brunch de fin de semana que te mereces. 100% Seed oils free ✨",
    },
    {
      image: "/src/assets/images/dish_brioche_french_toast_1790299706128.jpg",
      likes: "312",
      caption: "Brioche dorado con mascarpone y berries frescos de montaña 🍓",
    },
    {
      image: "/src/assets/images/dish_avocado_poached_egg_1790299715800.jpg",
      likes: "195",
      caption: "Huevos pochados al punto sobre tostón de masa madre. Pure comfort 🥑",
    },
    {
      image: "/src/assets/images/dish_gluten_free_cookie_pastry_1790299726000.jpg",
      likes: "420",
      caption: "Skillet cookie sin gluten recién salida del horno... irresistible 🍪",
    },
  ];

  return (
    <section className="py-24 bg-[#FAF8F5] relative border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A45C40] mb-2">
            <Instagram className="w-4 h-4" />
            <span>Síguenos en Instagram</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#241C18] mb-3">
            {RESTAURANT_INFO.instagram}
          </h2>

          <p className="text-sm sm:text-base text-[#796C64] font-light leading-relaxed mb-6">
            Breakfast, brunch, comfort food y mucho más.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#241C18] hover:bg-[#3E3029] rounded-full transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm"
            >
              <Instagram className="w-4 h-4" />
              <span>Ver Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </a>

            <a
              href={RESTAURANT_INFO.creatorsInstagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#796C64] hover:text-[#241C18] border border-[#D8CCC3] hover:border-[#241C18] rounded-full bg-white transition-colors"
            >
              <span>Creadoras: {RESTAURANT_INFO.creatorsInstagram}</span>
            </a>
          </div>
        </div>

        {/* Visual Instagram Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#E8DFD8] shadow-xs"
            >
              <img
                src={post.image}
                alt="Publicación de SISTERS' KITCHEN en Instagram"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-white/80" />
                </div>
                <div>
                  <p className="text-xs line-clamp-2 text-white/90 mb-2">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-3 text-xs font-medium text-white/90">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-white" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
