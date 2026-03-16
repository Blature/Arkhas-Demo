"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";

const PricingDisclaimer = () => {
  return (
    <section className="bg-amber-50/90 backdrop-blur-sm border-l-4 border-amber-500 text-amber-900 p-6 md:p-8 dark:bg-amber-900/40 dark:text-amber-100 dark:border-amber-600 shadow-lg my-12 mx-4 md:mx-auto max-w-4xl rounded-r-lg relative z-20">
      <div className="flex items-center justify-center space-x-4">
        <AlertTriangle className="h-8 w-8 text-amber-600 dark:text-amber-400 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-bold mb-1">Important Pricing Information</h3>
          <p className="font-medium text-lg">
            The minimum fee for any consultation is <span className="font-bold underline">$10</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingDisclaimer;
