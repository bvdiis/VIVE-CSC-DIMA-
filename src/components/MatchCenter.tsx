import { Trophy, Calendar } from 'lucide-react';

export function MatchCenter() {
  return (
    <section className="py-20 bg-neutral-900 border-t border-white/5" id="matches">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-display font-black text-4xl tracking-tight mb-2">MATCH CENTER</h2>
            <p className="text-neutral-400">Next fixtures, latest results, and live analysis.</p>
          </div>
          <button className="text-sm font-bold text-green-500 hover:text-green-400 transition-colors uppercase tracking-wider">
            View All Fixtures &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Next Match Card */}
          <div className="lg:col-span-2 bg-neutral-950 rounded-3xl border border-white/5 p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 group-hover:bg-green-500/10 transition-colors"></div>
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <span className="bg-green-600/20 text-green-500 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">Next Match</span>
              <div className="flex items-center gap-2 text-neutral-400 text-sm font-medium">
                <Calendar className="w-4 h-4" />
                <span>Sat, 24 Oct • 18:00</span>
              </div>
            </div>

            <div className="flex items-center justify-between relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center shadow-lg shadow-black/50 mb-4">
                  <span className="font-display font-black text-2xl text-green-500">CSC</span>
                </div>
                <h3 className="font-bold text-lg text-center hidden sm:block">CS Constantine</h3>
              </div>

              <div className="flex flex-col items-center px-4">
                <span className="font-display font-black text-3xl md:text-5xl text-neutral-600">VS</span>
                <span className="text-green-500 font-medium mt-2 text-sm">Ligue 1 Pro</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center shadow-lg shadow-black/50 mb-4">
                  <span className="font-display font-black text-2xl text-neutral-500">MCA</span>
                </div>
                <h3 className="font-bold text-lg text-center hidden sm:block">MC Alger</h3>
              </div>
            </div>

            <div className="mt-10 flex gap-4 relative z-10 justify-center">
              <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-neutral-200 transition-colors w-full sm:w-auto">
                Match Preview
              </button>
              <button className="bg-white/5 text-white font-bold py-3 px-8 rounded-full border border-white/10 hover:bg-white/10 transition-colors w-full sm:w-auto">
                Buy Tickets
              </button>
            </div>
          </div>

          {/* League Standings Snippet */}
          <div className="bg-neutral-950 rounded-3xl border border-white/5 p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-neutral-900 p-2 rounded-xl">
                <Trophy className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="font-display font-bold text-xl">Ligue 1 Standings</h3>
            </div>
            
            <div className="flex-1">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="text-neutral-500 border-b border-white/5">
                    <th className="pb-3 font-medium w-8">#</th>
                    <th className="pb-3 font-medium">Club</th>
                    <th className="pb-3 font-medium text-center">Played</th>
                    <th className="pb-3 font-medium text-center">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { pos: 1, name: 'CR Belouizdad', p: 10, pts: 24 },
                    { pos: 2, name: 'CS Constantine', p: 10, pts: 22, highlight: true },
                    { pos: 3, name: 'MC Alger', p: 10, pts: 19 },
                    { pos: 4, name: 'USM Alger', p: 10, pts: 18 },
                    { pos: 5, name: 'ES Sétif', p: 10, pts: 16 },
                  ].map((row) => (
                    <tr key={row.pos} className={`border-b border-white/5 last:border-0 ${row.highlight ? 'bg-green-900/20' : ''}`}>
                      <td className={`py-3 ${row.highlight ? 'text-green-500 font-bold' : 'text-neutral-400'}`}>{row.pos}</td>
                      <td className={`py-3 font-medium ${row.highlight ? 'text-green-500' : 'text-white'}`}>{row.name}</td>
                      <td className="py-3 text-center text-neutral-400">{row.p}</td>
                      <td className={`py-3 text-center font-bold ${row.highlight ? 'text-green-500' : 'text-white'}`}>{row.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <button className="w-full text-center text-sm font-bold text-neutral-400 hover:text-white py-3 mt-4 bg-white/5 rounded-xl transition-colors">
              Full Standings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
