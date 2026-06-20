export function Multimedia() {
  return (
    <section className="py-20 bg-neutral-950 border-t border-white/5" id="multimedia">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-display font-black text-4xl tracking-tight mb-2">MULTIMEDIA CENTER</h2>
            <p className="text-neutral-400">Matchday galleries, videos, and fan-curated content.</p>
          </div>
          <button className="text-sm font-bold text-green-500 hover:text-green-400 transition-colors uppercase tracking-wider">
            Explore Gallery &rarr;
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
          {/* Main Video Feature */}
          <div className="col-span-2 md:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1574629810360-7efbc5da0bc7?auto=format&fit=crop&q=80&w=1000")' }}
            ></div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-green-600/90 flex items-center justify-center pl-1 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider mb-3 inline-block">Highlights</span>
              <h3 className="font-display font-bold text-2xl text-white drop-shadow-lg">Inside Training: Preparing for the Derby</h3>
            </div>
          </div>

          {/* Image Grid */}
           <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80&w=600")' }}
            ></div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=600")' }}
            ></div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer col-span-2">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&q=80&w=800")' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
               <h3 className="font-bold text-white text-lg">Matchday Atmosphere</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
