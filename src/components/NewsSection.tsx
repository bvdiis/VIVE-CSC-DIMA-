import { ArrowRight, MessageSquare } from 'lucide-react';

export function NewsSection() {
  const news = [
    {
      id: 1,
      category: 'Club Announcement',
      title: 'New training facility officially opens doors to the academy players.',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbc5da0bc7?auto=format&fit=crop&q=80&w=800',
      comments: 124,
      date: '2 hours ago',
      featured: true
    },
    {
      id: 2,
      category: 'Match Report',
      title: 'Tactical Masterclass: How CSC dominated the midfield battle.',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32fc3e64b?auto=format&fit=crop&q=80&w=800',
      comments: 89,
      date: '1 day ago',
      featured: false
    },
    {
      id: 3,
      category: 'Transfers',
      title: 'Exclusive: Transfer talks heat up for the upcoming window.',
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=800',
      comments: 342,
      date: '2 days ago',
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-neutral-950" id="news">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-display font-black text-4xl tracking-tight mb-2">LATEST NEWS</h2>
            <p className="text-neutral-400">Stay up to date with match reports, transfers, and club announcements.</p>
          </div>
          <button className="text-sm font-bold text-green-500 hover:text-green-400 transition-colors uppercase tracking-wider">
            All News Stories &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured News */}
          {news.filter(n => n.featured).map(item => (
            <article key={item.id} className="group relative rounded-3xl overflow-hidden cursor-pointer h-[500px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-sm font-bold text-green-500 uppercase tracking-wider mb-3 block">{item.category}</span>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-6 text-sm text-neutral-300 font-medium">
                  <span>{item.date}</span>
                  <div className="flex items-center gap-1.5 focus">
                    <MessageSquare className="w-4 h-4" />
                    <span>{item.comments}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* Secondary News */}
          <div className="flex flex-col gap-8">
            {news.filter(n => !n.featured).map(item => (
              <article key={item.id} className="group flex flex-col sm:flex-row gap-6 cursor-pointer hover:bg-white/[0.02] p-4 -m-4 rounded-2xl transition-colors">
                <div className="w-full sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden rounded-xl">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-bold text-green-500 uppercase tracking-wider mb-2 block">{item.category}</span>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-3 line-clamp-2 group-hover:text-green-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-6 text-sm text-neutral-400 font-medium mb-4">
                    <span>{item.date}</span>
                    <div className="flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4" />
                      <span>{item.comments}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-green-500 transition-colors mt-auto">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
