"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, UserCheck, CreditCard, Route, ChevronDown } from "lucide-react";

export default function RulesPage() {
  const [openSection, setOpenSection] = useState<string | null>("insurance");

  const toggleSection = (id: string) => {
    if (openSection === id) {
      setOpenSection(null);
    } else {
      setOpenSection(id);
    }
  };

  const sections = [
    {
      id: "insurance",
      icon: ShieldAlert,
      title: "Insurance & Safety",
      content: [
        {
          heading: "CDW - Collision Damage Waiver",
          text: "Basic insurance is included. In case of an accident where the renter is at fault, a maximum liability may apply. Full coverage options are available upon inquiry."
        },
        {
          heading: "Police Report",
          text: "In the event of an accident or damage, the renter MUST obtain a police report. Without a police report, the renter bears full financial responsibility for all damages."
        }
      ]
    },
    {
      id: "eligibility",
      icon: UserCheck,
      title: "Eligibility Requirements",
      content: [
        {
          heading: "Age Factor",
          text: "Minimum age required to rent a vehicle is 19 years old."
        },
        {
          heading: "Driving License",
          text: "A valid local or International Driving Permit (IDP) is required. For tourists, the IDP must be valid and the renter must have entered the country within the last 6 months."
        }
      ]
    },
    {
      id: "financials",
      icon: CreditCard,
      title: "Financial Policies",
      content: [
        {
          heading: "Deposit & Refunds",
          text: "A security deposit is held at the time of rental to cover potential traffic fines or tolls. The deposit refund process takes up to 30 days after the vehicle is returned."
        },
        {
          heading: "Fuel Policy",
          text: "We follow a strict Same-to-Same fuel policy. The vehicle must be returned with the exact amount of fuel it had upon delivery."
        },
        {
          heading: "Parking & Fines",
          text: "Renters are responsible for all parking fees, speeding tickets, and road tolls incurred during the rental period."
        }
      ]
    },
    {
      id: "mileage",
      icon: Route,
      title: "Mileage Breakdown",
      content: [
        {
          heading: "Daily Limit",
          text: "Rentals include a standard mileage allowance of 200 km per day. Exceeding this limit will result in additional charges per excess kilometer as per the contract."
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-16 min-h-screen">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
        >
          Rules <span className="text-brand-gold">&</span> Regulations
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-textMuted text-lg"
        >
          Everything you need to know before you hit the road. Transparent, straightforward, and fair.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {sections.map((sec, index) => (
          <motion.div 
            key={sec.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className={`glass-panel rounded-2xl overflow-hidden border transition-colors ${
              openSection === sec.id ? "border-brand-gold/50" : "border-white/10 hover:border-white/20"
            }`}
          >
            <button 
              onClick={() => toggleSection(sec.id)}
              className="w-full text-left px-8 py-6 flex items-center justify-between bg-surfaceLight/20 hover:bg-surfaceLight/40 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                  openSection === sec.id ? "bg-brand-gold text-black" : "bg-brand-navy text-brand-gold"
                }`}>
                  <sec.icon size={24} />
                </div>
                <h2 className="text-xl font-heading font-bold text-white">{sec.title}</h2>
              </div>
              <ChevronDown 
                size={24} 
                className={`text-textMuted transition-transform duration-300 ${
                  openSection === sec.id ? "rotate-180 text-brand-gold" : ""
                }`} 
              />
            </button>
            <AnimatePresence>
              {openSection === sec.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-8 pb-8 pt-4 border-t border-white/5 space-y-6">
                    {sec.content.map((item, i) => (
                      <div key={i}>
                        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold block" />
                          {item.heading}
                        </h3>
                        <p className="text-textMuted leading-relaxed pl-3 border-l drop-shadow-sm border-white/10 ml-[3px]">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
