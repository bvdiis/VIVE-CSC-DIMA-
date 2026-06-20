import { Users, Flame, Star, MessageCircle } from 'lucide-react';

export function Community() {
  return (
    <section className="py-20 bg-neutral-950 border-t border-white/5 relative overflow-hidden" id="community">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight mb-6">ULTRAS & <span className="text-green-500">COMMUNITY</span></h2>
          <p className="text-lg text-neutral-400">Join the discussion, participate in polls, earn supporter badges, and connect with Sanafir from around the world.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Discussion Boards */}
          <div className="lg:col-span-2 bg-neutral-900 border border-white/5 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-green-500" />
                <h3 className="font-display font-bold text-2xl">Trending Discussions</h3>
              </div>
              <button className="text-sm font-bold text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-colors">
                New Topic
              </button>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Thoughts on the new tactical formation?', author: 'GreenEagle99', replies: 45, hot: true },
                { title: 'Away travel arrangements for the next CCL match', author: 'SanafirUltra', replies: 120, hot: true },
                { title: 'Player ratings from yesterday\'s win', author: 'CSC_Fanatic', replies: 32, hot: false },
                { title: 'Historical: Our 1997 Championship Run Memories', author: 'OldGuard', replies: 89, hot: false }
              ].map((topic, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-neutral-950 border border-white/5 hover:border-green-500/30 transition-colors cursor-pointer group">
                  <div className="mb-4 sm:mb-0">
                    <div className="flex items-center gap-2 mb-1">
                      {topic.hot && <Flame className="w-4 h-4 text-red-500" />}
                      <h4 className="font-bold text-white group-hover:text-green-400 transition-colors text-lg">{topic.title}</h4>
                    </div>
                    <p className="text-sm text-neutral-500">Started by <span className="text-neutral-300 font-medium">{topic.author}</span></p>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <span className="bg-white/5 px-3 py-1 rounded-full text-neutral-300">{topic.replies} Replies</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Supporter Rankings / Polls */}
          <div className="flex flex-col gap-8">
            <div className="bg-gradient-to-br from-green-900/40 to-neutral-900 border border-green-500/20 rounded-3xl p-8 relative overflow-hidden">
              <Star className="absolute top-4 right-4 w-24 h-24 text-green-500/10" />
              <h3 className="font-display font-bold text-xl mb-2 relative z-10">Fan Poll</h3>
              <p className="text-neutral-300 text-sm mb-6 relative z-10">Who was the Man of the Match against USMA?</p>
              
              <div className="space-y-3 relative z-10">
                <button className="w-full relative overflow-hidden bg-white/5 border border-white/10 rounded-xl p-3 text-left hover:bg-white/10 transition-colors">
                  <div className="absolute top-0 left-0 bottom-0 bg-green-600/30 w-[65%]"></div>
                  <div className="relative flex justify-between font-medium">
                    <span>Brahim Dib</span>
                    <span>65%</span>
                  </div>
                </button>
                <button className="w-full relative overflow-hidden bg-white/5 border border-white/10 rounded-xl p-3 text-left hover:bg-white/10 transition-colors">
                  <div className="absolute top-0 left-0 bottom-0 bg-green-600/30 w-[20%]"></div>
                  <div className="relative flex justify-between font-medium">
                    <span>Miloud Rebiai</span>
                    <span>20%</span>
                  </div>
                </button>
                <button className="w-full relative overflow-hidden bg-white/5 border border-white/10 rounded-xl p-3 text-left hover:bg-white/10 transition-colors">
                  <div className="absolute top-0 left-0 bottom-0 bg-green-600/30 w-[15%]"></div>
                  <div className="relative flex justify-between font-medium">
                    <span>Other</span>
                    <span>15%</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="bg-neutral-900 border border-white/5 rounded-3xl p-8">
               <div className="flex items-center gap-3 mb-6">
                <Users className="w-5 h-5 text-green-500" />
                <h3 className="font-display font-bold text-xl">Top Supporters</h3>
              </div>
              <div className="space-y-4">
                {[
                  { rank: 1, name: 'Tarek_CSC', points: '12,450' },
                  { rank: 2, name: 'Sanafir_Ldr', points: '11,200' },
                  { rank: 3, name: 'GreenLife', points: '9,850' },
                ].map((user, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-yellow-500 text-black' : i === 1 ? 'bg-zinc-300 text-black' : 'bg-amber-700 text-white'}`}>{user.rank}</span>
                      <span className="font-medium">{user.name}</span>
                    </div>
                    <span className="text-sm font-bold text-green-500">{user.points} pt</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
