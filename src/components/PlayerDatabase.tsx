import { Shield, Goal } from 'lucide-react';

export function PlayerDatabase() {
  const players = [
    {
      id: 1,
      name: 'Rahmani',
      firstName: 'Chemseddine',
      position: 'Goalkeeper',
      number: '1',
      image: 'https://images.unsplash.com/photo-1570498839593-e565b39455fc?auto=format&fit=crop&q=80&w=600',
      stats: { matches: 24, cleanSheets: 12 }
    },
    {
      id: 2,
      name: 'Dib',
      firstName: 'Brahim',
      position: 'Midfielder',
      number: '10',
      image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80&w=600',
      stats: { matches: 22, goals: 8 }
    },
    {
      id: 3,
      name: 'Khaldi',
      firstName: 'Ahmed',
      position: 'Forward',
      number: '9',
      image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=600',
      stats: { matches: 20, goals: 11 }
    },
    {
      id: 4,
      name: 'Benchaira',
      firstName: 'Mohamed',
      position: 'Midfielder',
      number: '8',
      image: 'https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&q=80&w=600',
      stats: { matches: 25, assists: 6 }
    }
  ];

  return (
    <section className="py-20 bg-neutral-900 border-t border-white/5" id="players">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-display font-black text-4xl tracking-tight mb-2">FIRST TEAM SQUAD</h2>
            <p className="text-neutral-400">Player profiles, ratings, and career statistics.</p>
          </div>
          <div className="flex gap-2">
             <button className="px-6 py-2 rounded-full border border-green-500 text-green-500 font-bold text-sm hover:bg-green-500 hover:text-white transition-colors">Goalkeepers</button>
             <button className="px-6 py-2 rounded-full border border-white/10 text-white font-bold text-sm bg-white/5 hover:bg-white/10 transition-colors">Defenders</button>
             <button className="px-6 py-2 rounded-full border border-white/10 text-white font-bold text-sm bg-white/5 hover:bg-white/10 transition-colors hidden sm:block">Midfielders</button>
             <button className="px-6 py-2 rounded-full border border-white/10 text-white font-bold text-sm bg-white/5 hover:bg-white/10 transition-colors hidden md:block">Forwards</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {players.map((player) => (
            <article key={player.id} className="group relative bg-neutral-950 rounded-2xl overflow-hidden border border-white/5 pb-6">
              <div className="aspect-[4/5] bg-neutral-900 mb-6 overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${player.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
                <span className="absolute bottom-0 right-4 font-display font-black text-7xl text-white/10 group-hover:text-green-500/20 transition-colors translate-y-4">
                  {player.number}
                </span>
              </div>
              
              <div className="px-6 relative z-10">
                <span className="text-xs font-bold text-green-500 uppercase tracking-wider mb-1 block">{player.position}</span>
                <h3 className="font-display font-black text-2xl uppercase tracking-tight leading-none mb-1 text-white">
                  {player.name}
                </h3>
                <h4 className="font-medium text-neutral-400 mb-6">
                  {player.firstName}
                </h4>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-neutral-500" />
                    <span className="font-medium text-neutral-300">{player.stats.matches} Matches</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Goal className="w-4 h-4 text-green-500" />
                    <span className="font-bold text-white">
                      {player.stats.goals ? `${player.stats.goals} Goals` : 
                       player.stats.cleanSheets ? `${player.stats.cleanSheets} CS` : 
                       `${player.stats.assists} Ast`}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
