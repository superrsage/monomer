import { Icon } from '@iconify/react';

const pillars = [
  { icon: 'lucide:cpu', label: 'AI-First', desc: 'Machine learning drives every hypothesis.' },
  { icon: 'lucide:search', label: 'Research Stage', desc: 'Early-stage exploration of the problem space.' },
  { icon: 'lucide:globe', label: 'Open Mission', desc: 'Solving a planetary problem, not a niche one.' },
];

export default function Team() {
  return (
    <section id="team" className="py-32 px-6 md:px-12 bg-white">
      <div className="grid lg:grid-cols-2 gap-24 items-start">
        <div>
          <h3 className="text-4xl font-bold kerning-tight mb-8 uppercase">
            One person.<br />One problem worth solving.
          </h3>
          <p className="text-xl opacity-70 mb-6 leading-relaxed">
            This is an early-stage research project exploring whether AI can meaningfully
            accelerate the discovery of biodegradable plastic alternatives.
          </p>
          <p className="text-xl opacity-70 mb-12 leading-relaxed">
            The approach is straightforward: use machine learning to search chemical space
            faster than traditional lab work allows, identify promising polymer candidates,
            and validate them through simulation before any synthesis happens.
          </p>
          <p className="text-xl opacity-70 mb-12 leading-relaxed">
            No lab. No team yet. Just a clear hypothesis and the tools to test it.
          </p>
        </div>

        <div className="space-y-6">
          {pillars.map((p) => (
            <div key={p.label} className="flex items-start gap-6 border border-gray-100 p-8">
              <Icon icon={p.icon} className="text-3xl text-[#ec4899] mt-1 shrink-0" />
              <div>
                <p className="font-bold uppercase tracking-tighter text-sm mb-1">{p.label}</p>
                <p className="text-sm opacity-60">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
