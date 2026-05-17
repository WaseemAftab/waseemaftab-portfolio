
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const whatsappNumber = "971506309005";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Waseem,%20I%20want%20to%20discuss%20a%20marketing%20opportunity`;

const highlights = [
  { label: "Experience", value: "3+ Years UAE Market" },
  { label: "Specialization", value: "Performance Marketing & Meta Ads" },
  { label: "Industries", value: "Real Estate • Banking • Automotive" }
];

const clients = [
  "DAMAC Properties",
  "Danube Properties",
  "Reportage Properties",
  "Emirates NBD",
  "RAK Bank",
  "Luxury Car Rental Brands"
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white text-black min-h-screen font-sans">

      <a href={whatsappLink} target="_blank" className="fixed bottom-6 right-6 bg-green-500 text-black p-4 rounded-full shadow-xl z-50">
        <MessageCircle />
      </a>

      <section className="flex flex-col items-center justify-center text-center px-6 py-32 bg-gradient-to-b from-white to-gray-100">

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-semibold tracking-tight">
          Waseem Aftab
        </motion.h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
          Performance Marketing Portfolio
        </p>

        <p className="mt-4 text-gray-600 max-w-xl">
          I help UAE real estate, banking, and automotive brands generate high-quality leads through Meta Ads and conversion systems.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {highlights.map((h, i) => (
            <div key={i} className="text-sm text-gray-700 border px-4 py-2 rounded-full bg-white shadow-sm">
              <b>{h.label}:</b> {h.value}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 text-center">
        <p className="text-gray-500 text-sm mb-6">Trusted UAE Brands</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
          {clients.map((c, i) => (
            <span key={i} className="px-3 py-1 border rounded-full bg-gray-50">{c}</span>
          ))}
        </div>
      </section>

      <section className="text-center py-28 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-semibold">Let’s Build Your Next Campaign</h2>
        <p className="text-gray-500 mt-3">Available for marketing roles in Dubai / UAE</p>

        <a href={whatsappLink} className="mt-10 inline-block bg-black text-white px-8 py-3 rounded-full">
          Contact on WhatsApp
        </a>
      </section>

    </div>
  );
}
