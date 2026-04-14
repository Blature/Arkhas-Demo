"use client";

import Image from "next/image";
import { CarData } from "./data";
import { motion } from "framer-motion";
import { Gauge, Users, Car as CarIcon, CheckCircle2 } from "lucide-react";

export default function CarCard({ car, index }: { car: CarData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="glass-panel rounded-2xl overflow-hidden group"
    >
      <div className="relative h-56 w-full overflow-hidden bg-brand-navy/30">
        <Image 
          src={car.image} 
          alt={car.name} 
          fill 
          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-brand-gold text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
          {car.type}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-heading font-bold text-white group-hover:text-brand-gold transition-colors">{car.name}</h3>
            <p className="text-brand-gold font-bold text-2xl mt-1">{car.price} <span className="text-sm font-normal text-textMuted uppercase">OMR / Day</span></p>
          </div>
        </div>

        {car.description && (
          <p className="text-textMuted text-sm mb-4 line-clamp-3">
            {car.description}
          </p>
        )}

        <div className="space-y-2 mb-6">
          {car.features.map((feature, i) => (
            <div key={i} className="flex items-center text-sm text-textMuted gap-2">
              <CheckCircle2 size={14} className="text-brand-gold" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <a 
          href={`https://wa.me/96877563086?text=Hello,%20I%20am%20interested%20in%20renting%20the%20${encodeURIComponent(car.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp w-full block text-center uppercase tracking-wide text-sm font-bold"
        >
          Book via WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
