"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CARS } from "@/components/data";
import CarCard from "@/components/CarCard";
import { Filter, Search } from "lucide-react";

export default function CarsPage() {
  const [filter, setFilter] = useState<string>("All");
  const [search, setSearch] = useState<string>("");

  const categories = ["All", "Economic", "Sedan", "SUV", "Luxury"];

  const filteredCars = CARS.filter(car => {
    const matchCategory = filter === "All" || car.type === filter;
    const matchSearch = car.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 min-h-screen">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
        >
          Our Premium <span className="text-brand-gold">Fleet</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-textMuted text-lg"
        >
          Choose from our diverse collection of well-maintained vehicles. Every ride is an experience.
        </motion.p>
      </div>

      {/* Filters and Search */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-panel p-4 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 mb-12 relative z-20"
      >
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
          <Filter className="text-brand-gold mr-2 hidden md:block" size={20} />
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                filter === cat 
                  ? "bg-brand-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]" 
                  : "bg-surfaceLight/50 text-gray-300 hover:bg-surfaceLight hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" size={18} />
          <input 
            type="text" 
            placeholder="Search cars..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-surfaceLight/50 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder-textMuted focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all"
          />
        </div>
      </motion.div>

      {/* Grid */}
      {filteredCars.length > 0 ? (
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredCars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-6">
            <Filter size={32} className="text-brand-gold" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-white mb-2">No cars found</h3>
          <p className="text-textMuted">Try adjusting your filters or search query.</p>
        </div>
      )}
    </div>
  );
}
