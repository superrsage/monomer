const steps = [
  {
    num: '01',
    title: 'TARGETING',
    desc: 'Defining mechanical loads and environmental triggers.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="2" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'SIMULATION',
    desc: 'Generative AI scans chemical space for degradation paths.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 100 100">
        <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="35" y="35" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="50" r="5" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'VALIDATION',
    desc: 'Stress-testing digital twins in hyper-realistic sandboxes.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 100 100">
        <path d="M20,80 L50,20 L80,80 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'SYNTHESIS',
    desc: 'Top candidates handed off to lab partners for real-world testing.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 100 100">
        <path d="M30,50 Q50,20 70,50 T30,50" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M30,50 Q50,80 70,50 T30,50" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Engine() {
  return (
    <section id="engine" className="py-32 bg-white">
      <div className="px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24">
          <h2 className="text-5xl md:text-7xl font-bold kerning-tight max-w-2xl">
            BIOSYNTHESIZE™{' '}
            <br />
            <span className="text-[#ec4899]">THE ENGINE.</span>
          </h2>
          <div className="mt-8 lg:mt-0 lg:max-w-md">
            <p className="text-lg font-medium opacity-70">
              Traditional material science is a decade-long guessing game. The plan: use
              transformer-based models to simulate vast molecular search spaces in weeks,
              not years — and find the &lsquo;Goldilocks&rsquo; polymer computationally first.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="border-4 border-gray-100 p-8 hover:border-[#ec4899] hover:bg-[#ec4899] hover:text-white transition-all group relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-20 transition-opacity">
                {step.icon}
              </div>
              <div className="text-4xl font-bold mb-12 opacity-30 group-hover:opacity-100">{step.num}</div>
              <h4 className="text-xl font-bold uppercase mb-4">{step.title}</h4>
              <p className="text-sm opacity-60 group-hover:opacity-90">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
