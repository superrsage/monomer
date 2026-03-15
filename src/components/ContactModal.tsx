'use client';

import { useState, useEffect, useRef } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [intro, setIntro] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, intro }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? 'Something went wrong.');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className="bg-white w-full max-w-lg border border-gray-200 warm-shadow relative">
        {/* Header */}
        <div className="flex justify-between items-start px-8 pt-8 pb-6 border-b border-gray-100">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-1">Get in touch</p>
            <h2 className="text-2xl font-bold kerning-tight uppercase">Tell us who you are.</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-[#1f2937] transition-colors text-2xl leading-none mt-1"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {status === 'success' ? (
          <div className="px-8 py-12 text-center">
            <p className="text-[#ec4899] font-bold uppercase tracking-widest text-lg mb-2">✓ Received.</p>
            <p className="text-sm opacity-60">We&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                disabled={status === 'loading'}
                className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-[#ec4899] px-4 py-3 font-mono text-sm focus:outline-none focus:bg-gray-100 placeholder:text-gray-400 disabled:opacity-50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={status === 'loading'}
                className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-[#ec4899] px-4 py-3 font-mono text-sm focus:outline-none focus:bg-gray-100 placeholder:text-gray-400 disabled:opacity-50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest opacity-50 mb-2">
                Who are you / why are you reaching out?
              </label>
              <textarea
                value={intro}
                onChange={(e) => setIntro(e.target.value)}
                placeholder="e.g. I'm a materials scientist interested in collaborating..."
                required
                rows={3}
                disabled={status === 'loading'}
                className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-[#ec4899] px-4 py-3 font-mono text-sm focus:outline-none focus:bg-gray-100 placeholder:text-gray-400 disabled:opacity-50 transition-colors resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-[#ef4444] text-xs font-mono">{errorMsg}</p>
            )}

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex-1 bg-[#ec4899] text-white py-4 font-bold uppercase tracking-tighter hover:bg-[#ef4444] transition-all warm-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? '...' : 'SEND'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-4 border-2 border-gray-200 font-bold uppercase tracking-tighter text-sm hover:border-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
