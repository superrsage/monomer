export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="flex justify-between items-center px-6 md:px-12 h-20">
        <a href="#" className="text-2xl font-bold kerning-tight uppercase">
          MONOMER<span className="text-[#ec4899]"></span>
        </a>
        <div className="hidden md:flex items-center gap-12 text-sm font-bold uppercase tracking-widest">
          <a href="#crisis" className="hover:text-[#ec4899] transition-colors">
            The Crisis
          </a>
          <a
            href="#transformation"
            className="hover:text-[#ec4899] transition-colors"
          >
            The Loop
          </a>
          <a href="#engine" className="hover:text-[#ec4899] transition-colors">
            The Engine
          </a>
        </div>
        <a
          href="#join"
          className="bg-[#ec4899] text-white px-6 py-2 text-sm font-bold uppercase tracking-tighter hover:bg-[#ef4444] transition-all warm-shadow"
        >
          Join The Race
        </a>
      </div>
    </nav>
  );
}
