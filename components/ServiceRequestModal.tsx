"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Instagram, MessageCircle, Globe, Link as LinkIcon } from "lucide-react";

interface ServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  onSubmit: (data: any) => void;
}

const platforms = [
  { id: "instagram", name: "Instagram Page", icon: <Instagram size={18} /> },
  { id: "telegram", name: "Telegram Channel", icon: <Send size={18} className="-rotate-45" /> },
  { id: "whatsapp", name: "WhatsApp", icon: <MessageCircle size={18} /> },
  { id: "website", name: "Website", icon: <Globe size={18} /> },
  { id: "other", name: "Other", icon: <LinkIcon size={18} /> },
];

const ServiceRequestModal: React.FC<ServiceRequestModalProps> = ({
  isOpen,
  onClose,
  serviceTitle,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    businessName: "",
    description: "",
    platform: "instagram",
    platformId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
    setFormData({
      businessName: "",
      description: "",
      platform: "instagram",
      platformId: "",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"
              >
                <X size={20} />
              </button>
              <h2 className="text-2xl font-bold">Request Service</h2>
              <p className="text-blue-100 text-sm mt-1">
                For: <span className="font-semibold">{serviceTitle}</span>
              </p>
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white transition-all"
                    placeholder="e.g. Arkhas Tech"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Business Description
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white transition-all resize-none"
                    placeholder="Tell us a bit about what you do..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Platform
                    </label>
                    <div className="relative">
                      <select
                        name="platform"
                        value={formData.platform}
                        onChange={handleChange}
                        className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white appearance-none transition-all"
                      >
                        {platforms.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400 pointer-events-none">
                        {platforms.find((p) => p.id === formData.platform)?.icon}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Platform ID / Link
                    </label>
                    <input
                      type="text"
                      name="platformId"
                      required
                      value={formData.platformId}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white transition-all"
                      placeholder="@username or https://..."
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceRequestModal;
