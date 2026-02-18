import HeroSlider from "./HeroSlider";

export default function HeroSection() {
  return (
    <section className="relative min-h-[65vh] flex flex-col justify-center pt-[120px] pb-[80px] hero-noise">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-1/4 top-1/3 w-[700px] h-[700px] bg-cyan-500/20 blur-[160px] rounded-full" />
        <div className="absolute left-1/4 bottom-1/4 w-[600px] h-[600px] bg-blue-600/20 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-8">
        {/* Headline */}
        <h1 className="text-[64px] md:text-[80px] font-black leading-[1.05] tracking-[-1px] mb-8">
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Where Crypto
          </span>
          <span className="block text-white">Ideas Compete.</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
          Join a futuristic crypto community where insights battle, rankings
          evolve, and the strongest ideas rise to the top.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-6 mb-16">
          <button className="px-8 py-4 rounded-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold hover:opacity-90 transition">
            Join Community
          </button>

          <button className="px-8 py-4 rounded-sm border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition">
            Explore Rankings
          </button>
        </div>
      </div>

      {/* Slider */}
      <HeroSlider />
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#0B1220]" />
    </section>
  );
}
