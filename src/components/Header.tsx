import React from 'react';
import { Menu, Search, User, ChevronDown } from 'lucide-react';

export function Header() {
  const navItems = [
    'Home', 'News', 'Matches', 'Players', 'Gallery', 'Videos', 'History', 'Ultras & Supporters', 'Community'
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-white/5 tracking-tight">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center font-display font-bold text-xl border-2 border-white/10 shadow-[0_0_15px_rgba(22,163,74,0.5)]">
              CSC
            </div>
            <div>
              <h1 className="font-display font-black text-2xl leading-none tracking-tight">VIVE CSC <span className="text-green-500">DIMA</span></h1>
              <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest mt-1">Official Supporters Hub</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-sm font-medium text-neutral-300 hover:text-green-500 transition-colors whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* User & Actions */}
          <div className="flex items-center gap-4">
            <button className="text-neutral-400 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-500 transition-colors px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg shadow-green-900/50">
              <User className="w-4 h-4" />
              <span>Join Community</span>
            </button>
            <button className="lg:hidden text-neutral-400 hover:text-white transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
