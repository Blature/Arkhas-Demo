"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function StickyWhatsapp() {
  return (
    <motion.a
      href="https://wa.me/96877563086"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-110 transition-transform duration-300"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
    >
      <MessageCircle size={32} />
    </motion.a>
  );
}
