/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MatchCenter } from './components/MatchCenter';
import { NewsSection } from './components/NewsSection';
import { PlayerDatabase } from './components/PlayerDatabase';
import { Multimedia } from './components/Multimedia';
import { Community } from './components/Community';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-green-500/30 selection:text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <NewsSection />
        <MatchCenter />
        <PlayerDatabase />
        <Multimedia />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
