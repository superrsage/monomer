'use client';

import { useState } from 'react';
import ContactModal from './ContactModal';

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}

      <footer id="join" className="bg-white text-[#1f2937] pt-32 pb-12 overflow-hidden border-t border-gray-100">
        <div className="px-6 md:px-12 relative">
          <div className="absolute -right-20 -bottom-20 text-[20vw] font-bold opacity-[0.03] pointer-events-none select-none uppercase">
            MOLECULE
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32 relative z-10">
            <h2 className="text-huge font-bold kerning-tight uppercase">
              DO NOT<br />WAIT.<br /><span className="text-[#ec4899]">SOLVE.</span>
            </h2>
            <div className="w-full lg:max-w-md">
              <p className="text-xl font-bold mb-4 uppercase tracking-widest">Get involved.</p>
              <p className="text-sm opacity-60 mb-8 leading-relaxed">
                Investor, researcher, potential collaborator, or just curious?
                We want to hear from you.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#ec4899] text-white px-12 py-5 font-bold uppercase tracking-tighter text-lg hover:bg-[#ef4444] transition-all warm-shadow"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
