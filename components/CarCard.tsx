"use client";

import { useState } from "react";
import Image from "next/image";
import { CarData } from "./data";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function CarCard({ car, index }: { car: CarData; index: number }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = car.images || [car.image];

  const openGallery = () => {
    setCurrentImageIndex(0);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="glass-panel rounded-2xl overflow-hidden group flex flex-col"
      >
        <div 
          className="relative h-56 w-full overflow-hidden bg-brand-navy/30 cursor-pointer"
          onClick={openGallery}
        >
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
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 text-white font-bold bg-black/50 px-4 py-2 rounded-full transform scale-95 group-hover:scale-100 transition-all duration-300">
              View Gallery
            </span>
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
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

          <div className="space-y-2 mb-6 flex-grow">
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
            className="btn-whatsapp w-full block text-center uppercase tracking-wide text-sm font-bold mt-auto"
          >
            Book via WhatsApp
          </a>
        </div>
      </motion.div>

      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm"
            onClick={closeGallery}
          >
            <button 
              onClick={closeGallery} 
              className="absolute top-6 right-6 text-white hover:text-brand-gold transition-colors z-[101]"
            >
              <X size={36} />
            </button>

            <div 
              className="relative w-full max-w-5xl aspect-video px-4 md:px-12 flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={images[currentImageIndex]} 
                alt={`${car.name} - Gallery Image ${currentImageIndex + 1}`} 
                fill 
                className="object-contain"
                sizes="100vw"
                priority
              />
              
              {images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:text-brand-gold hover:bg-black/70 p-2 md:p-3 rounded-full transition-all"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:text-brand-gold hover:bg-black/70 p-2 md:p-3 rounded-full transition-all"
                  >
                    <ChevronRight size={32} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-y-1/2 text-white/50 text-sm tracking-widest font-heading drop-shadow-md">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
