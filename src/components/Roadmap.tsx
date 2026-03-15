const phases = [
  { phase: 'Phase 01', title: 'RESEARCH & HYPOTHESIS', status: '[ NOW ]', highlight: true },
  { phase: 'Phase 02', title: 'AI MODEL + CANDIDATE SEARCH', status: '[ NEXT ]', highlight: false },
  { phase: 'Phase 03', title: 'LAB VALIDATION PARTNERSHIPS', status: '[ TARGET_2026 ]', highlight: false },
  { phase: 'Phase 04', title: 'FIRST POLYMER CANDIDATE', status: '[ TARGET_2027 ]', highlight: false },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-[#fef9f3] py-32 relative overflow-hidden">
      <div className="px-6 md:px-12 relative">
        <div className="max-w-5xl">
          <h2 className="text-5xl md:text-8xl font-bold kerning-tight mb-20">
            WE ARE RACING <br />THE CLOCK.
          </h2>

          <div className="space-y-0">
            {phases.map((p) => (
              <div
                key={p.phase}
                className="group border-t-2 border-gray-200 py-12 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white transition-colors"
              >
                <span className="text-sm font-bold uppercase opacity-30">{p.phase}</span>
                <span className="text-2xl md:text-4xl font-bold">{p.title}</span>
                <span className={`text-sm font-mono ${p.highlight ? 'text-[#ec4899]' : 'opacity-40'}`}>
                  {p.status}
                </span>
              </div>
            ))}
            <div className="border-t-2 border-gray-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
