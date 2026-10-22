function App() {
  return (
    <div className="h-screen overflow-hidden bg-zinc-900 flex items-center justify-center px-6">
      {/* Subtle ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-zinc-800/30 pointer-events-none" />
      
      {/* Main content */}
      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Opening line */}
        <p className="animate-fade-in font-sans text-zinc-400 text-lg md:text-xl font-light tracking-wide mb-6">
          Acordate del
        </p>

        {/* Core goals — larger, bolder, serif */}
        <h1 className="animate-fade-in-slow font-serif text-zinc-200 text-3xl md:text-5xl font-semibold leading-tight tracking-wide mb-4">
          ISEN,
        </h1>
        <h1 className="animate-fade-in-slow font-serif text-zinc-200 text-3xl md:text-5xl font-semibold leading-tight tracking-wide mb-10">
          Posgrado en Europa,
        </h1>

        {/* Connecting thought */}
        <p className="animate-fade-in-delayed font-sans text-zinc-400 text-base md:text-lg font-light tracking-wide mb-8">
          y todo lo que querés después del título.
        </p>

        {/* Concluding advice — softer, italic */}
        <p className="animate-fade-in-delayed font-serif text-zinc-500 text-xl md:text-2xl italic font-normal tracking-wide">
          Si hace falta, descansa, paciencia.
        </p>

        {/* Subtle decorative line */}
        <div className="animate-fade-in-delayed mt-12 mx-auto w-16 h-px bg-zinc-700" />
      </div>
    </div>
  );
}

export default App;
