"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Info, AlertCircle, X } from "lucide-react";

export type ToastType = "success" | "error" | "info" | "warning";

interface ToastProps {
  id: string;
  type: ToastType;
  message: string;
  onClose: (id: string) => void;
}

const toastConfig = {
  success: {
    icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    bg: "bg-green-50 dark:bg-green-900/30",
    border: "border-green-200 dark:border-green-800",
    text: "text-green-800 dark:text-green-200",
  },
  error: {
    icon: <XCircle className="w-5 h-5 text-red-500" />,
    bg: "bg-red-50 dark:bg-red-900/30",
    border: "border-red-200 dark:border-red-800",
    text: "text-red-800 dark:text-red-200",
  },
  info: {
    icon: <Info className="w-5 h-5 text-blue-500" />,
    bg: "bg-blue-50 dark:bg-blue-900/30",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-blue-800 dark:text-blue-200",
  },
  warning: {
    icon: <AlertCircle className="w-5 h-5 text-amber-500" />,
    bg: "bg-amber-50 dark:bg-amber-900/30",
    border: "border-amber-200 dark:border-amber-800",
    text: "text-amber-800 dark:text-amber-200",
  },
};

const ToastItem: React.FC<ToastProps> = ({ id, type, message, onClose }) => {
  const config = toastConfig[type];

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 4000);
    return () => clearTimeout(timer);
  }, [id, onClose]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`flex items-center w-full max-w-sm p-4 mb-4 rounded-lg border shadow-lg backdrop-blur-sm ${config.bg} ${config.border} ${config.text}`}
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0">
        {config.icon}
      </div>
      <div className="ml-3 text-sm font-medium">{message}</div>
      <button
        type="button"
        className={`ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8 hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${config.text}`}
        onClick={() => onClose(id)}
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export const ToastContainer = ({ toasts, removeToast }: { toasts: ToastProps[], removeToast: (id: string) => void }) => {
  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end space-y-2 pointer-events-none">
      <div className="pointer-events-auto">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <ToastItem key={toast.id} {...toast} onClose={removeToast} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (type: ToastType, message: string) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, type, message, onClose: removeToast }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return { toasts, addToast, removeToast };
};
