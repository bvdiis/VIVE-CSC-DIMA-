import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-neutral-900">
      {/* Background Image / Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&q=80&w=2000")' }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-neutral-950 via-neutral-950/50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        {/* Breaking News Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 bg-red-600/10 border border-red-500/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
        >
          <span className="flex w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse"></span>
          <span className="text-xs font-bold text-red-500 tracking-wider uppercase">Breaking News</span>
          <span className="text-sm font-medium text-neutral-200 border-l border-white/10 pl-3">CSC announces new major sponsorship deal for the 2026 season</span>
        </motion.div>

        <div className="max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-6xl md:text-8xl leading-[0.95] tracking-tight mb-6"
          >
            THE HEART <br />
            OF <span className="text-green-500">SANAFIR</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 mb-10 max-w-xl leading-relaxed"
          >
            Welcome to the ultimate digital sanctuary for CS Constantine supporters. Stay updated, connect with true fans, and honor the legacy of the Eagles.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button className="bg-green-600 hover:bg-green-500 transition-all px-8 py-4 rounded-full font-bold text-white shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:shadow-[0_0_30px_rgba(22,163,74,0.5)] transform hover:-translate-y-0.5">
              Explore Community
            </button>
            <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/5 transition-all px-8 py-4 rounded-full font-bold text-white backdrop-blur-sm">
              <Play className="w-5 h-5 fill-white" />
              <span>Watch Latest Highlights</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
