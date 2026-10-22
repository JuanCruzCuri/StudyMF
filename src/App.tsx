function App() {
  return (
    <div className="h-screen overflow-hidden bg-zinc-950 flex items-center justify-center px-6 relative">
      {/* === CYBERPUNK BACKGROUND LAYERS === */}

      {/* Deep base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d1f] to-[#12081f] pointer-events-none" />

      {/* Ambient glow orbs */}
      <div className="glow-orb-1" />
      <div className="glow-orb-2" />
      <div className="glow-orb-3" />

      {/* Perspective grid floor */}
      <div className="cyber-grid" />

      {/* Floating particles */}
      <div className="particle particle-1" />
      <div className="particle particle-2" />
      <div className="particle particle-3" />
      <div className="particle particle-4" />
      <div className="particle particle-5" />
      <div className="particle particle-6" />

      {/* Scanline */}
      <div className="scanline" />

      {/* Vignette overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)"
        }}
      />

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Opening line */}
        <p className="animate-fade-in font-sans text-zinc-400 text-lg md:text-xl font-light tracking-wide mb-6 neon-glow-pink">
          Acordate del
        </p>

        {/* Core goals — larger, bolder, serif with neon glow */}
        <h1 className="animate-fade-in-slow font-serif text-zinc-200 text-3xl md:text-5xl font-semibold leading-tight tracking-wide mb-4 neon-glow-purple">
          ISEN,
        </h1>
        <h1 className="animate-fade-in-slow font-serif text-zinc-200 text-3xl md:text-5xl font-semibold leading-tight tracking-wide mb-10 neon-glow-purple">
          Posgrado en Europa,
        </h1>

        {/* Connecting thought */}
        <p className="animate-fade-in-delayed font-sans text-zinc-400 text-base md:text-lg font-light tracking-wide mb-8">
          y todo lo que querés después del título.
        </p>

        {/* Concluding advice — softer, italic */}
        <p className="animate-fade-in-delayed font-serif text-zinc-500 text-xl md:text-2xl italic font-normal tracking-wide neon-glow-pink">
          Si hace falta, descansa, paciencia.
        </p>

        {/* Neon decorative line */}
        <div className="animate-fade-in-delayed mt-12 mx-auto w-20 h-px bg-violet-500/50 neon-line rounded-full" />
      </div>
    </div>
  );
}

export default App;
