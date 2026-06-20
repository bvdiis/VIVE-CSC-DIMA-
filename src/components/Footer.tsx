export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center font-display font-bold text-lg border border-white/10">
                CSC
              </div>
              <h2 className="font-display font-black text-xl tracking-tight">VIVE CSC <span className="text-green-500">DIMA</span></h2>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              The premium destination for CS Constantine supporters. Stay connected with the heart of Sanafir, access exclusive content, and join the most passionate football community.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:text-green-500 hover:bg-white/10 transition-colors">
                  <span className="text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white uppercase tracking-wider text-sm mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['News & Updates', 'Match Center', 'First Team', 'History & Legacy', 'Sanafir Community'].map(link => (
                <li key={link}>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-white uppercase tracking-wider text-sm mb-6">Connect</h3>
            <ul className="space-y-4">
              {['Membership Info', 'Contact Us', 'Advertising & Sponsorship', 'Write for us'].map(link => (
                <li key={link}>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-white uppercase tracking-wider text-sm mb-6">Join Newsletter</h3>
            <p className="text-sm text-neutral-400 mb-4">Get the latest CSC news, tactical analysis, and ticket updates directly in your inbox.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-3 text-sm outline-none focus:border-green-500 text-white w-full transition-colors"
              />
              <button 
                type="submit"
                className="bg-green-600 hover:bg-green-500 transition-colors text-white font-bold px-4 py-3 rounded-r-lg text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} VIVE CSC DIMA. All rights reserved. Not affiliated officially with CS Constantine management.
          </p>
          <div className="flex gap-6 text-xs text-neutral-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
