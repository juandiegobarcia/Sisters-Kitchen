import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ExperienceSection } from './components/ExperienceSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { InstagramSection } from './components/InstagramSection';
import { OrdersSection } from './components/OrdersSection';
import { Footer } from './components/Footer';

import { MenuItem, DaySchedule } from './types';
import { INITIAL_MENU_ITEMS, INITIAL_SCHEDULE } from './data/restaurantData';

export default function App() {
  // State with localStorage persistence for menu items
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    try {
      const saved = localStorage.getItem('sisters_kitchen_menu');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // fallback
    }
    return INITIAL_MENU_ITEMS;
  });

  // State with localStorage persistence for schedule
  const [schedule, setSchedule] = useState<DaySchedule[]>(() => {
    try {
      const saved = localStorage.getItem('sisters_kitchen_schedule');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // fallback
    }
    return INITIAL_SCHEDULE;
  });

  const handleUpdateMenuItems = (items: MenuItem[]) => {
    setMenuItems(items);
    try {
      localStorage.setItem('sisters_kitchen_menu', JSON.stringify(items));
    } catch {
      // ignore
    }
  };

  const handleUpdateSchedule = (newSchedule: DaySchedule[]) => {
    setSchedule(newSchedule);
    try {
      localStorage.setItem('sisters_kitchen_schedule', JSON.stringify(newSchedule));
    } catch {
      // ignore
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#241C18] flex flex-col font-sans selection:bg-[#E8DFD8]">
      {/* Fixed Navigation Top Bar */}
      <Navbar onOpenOrders={() => scrollToSection('pedidos')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero / Portada */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onGetDirections={() => scrollToSection('visitanos')}
        />

        {/* 2. Sobre SISTERS' KITCHEN */}
        <About />

        {/* 3. Menú */}
        <MenuSection
          menuItems={menuItems}
          onUpdateMenuItems={handleUpdateMenuItems}
          onOpenOrders={() => scrollToSection('pedidos')}
        />

        {/* 4. Galería */}
        <GallerySection />

        {/* 5. Experiencia */}
        <ExperienceSection />

        {/* 6. Reseñas */}
        <ReviewsSection />

        {/* 7. Ubicación / Visítanos */}
        <LocationSection
          schedule={schedule}
          onUpdateSchedule={handleUpdateSchedule}
        />

        {/* 8. Instagram */}
        <InstagramSection />

        {/* 9. Pedidos */}
        <OrdersSection
          onScrollToLocation={() => scrollToSection('visitanos')}
        />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
