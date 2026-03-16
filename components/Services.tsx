"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Code, Megaphone, Share2, Sparkles, Send } from "lucide-react";
import ServiceRequestModal from "./ServiceRequestModal";
import { ToastContainer, useToast } from "./Toast";

const services = [
  {
    id: "marketing",
    title: "Marketing Strategy",
    description: "Data-driven marketing campaigns to boost your brand visibility and ROI.",
    icon: <Megaphone className="w-12 h-12 text-blue-500" />,
  },
  {
    id: "social-media",
    title: "Social Media Management",
    description: "Engage your audience with compelling content and community management.",
    icon: <Share2 className="w-12 h-12 text-pink-500" />,
  },
  {
    id: "programming",
    title: "Custom Programming",
    description: "Full-stack development solutions tailored to your business needs.",
    icon: <Code className="w-12 h-12 text-green-500" />,
  },
  {
    id: "custom-service",
    title: "Custom Service",
    description: "Have a unique business need? Let us know and we'll craft a solution just for you.",
    icon: <Sparkles className="w-12 h-12 text-amber-500" />,
  },
];

const ServiceCard = ({ 
  service, 
  onOpenModal 
}: { 
  service: typeof services[0], 
  onOpenModal: (title: string) => void 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8 flex flex-col items-center text-center h-full border border-white/20 dark:border-gray-700 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="mb-6 p-5 bg-blue-50/80 dark:bg-gray-700/80 rounded-2xl ring-1 ring-blue-100 dark:ring-gray-600 shadow-inner group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white relative z-10">
        {service.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-8 flex-grow leading-relaxed relative z-10">
        {service.description}
      </p>
      
      <div className="w-full mt-auto relative z-10">
        <button
          onClick={() => onOpenModal(service.title)}
          className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group-hover:gap-3"
        >
          <span>Request Service</span>
          <Send size={18} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const { toasts, addToast, removeToast } = useToast();

  const handleOpenModal = (title: string) => {
    setSelectedService(title);
    setModalOpen(true);
  };

  const handleSubmit = (data: any) => {
    console.log("Submitting service request:", data);
    addToast("success", `Request for ${selectedService} submitted successfully!`);
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-blue-50/30 dark:to-gray-900/50 -z-10" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light"
          >
            Comprehensive solutions designed to help you succeed in the digital age.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </div>

      <ServiceRequestModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        serviceTitle={selectedService}
        onSubmit={handleSubmit}
      />

      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </section>
  );
};

export default Services;
