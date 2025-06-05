import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContentCard from '@/components/ContentCard';
import NowPlayingBar from '@/components/NowPlayingBar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { dummyNowPlayingBarProps, sampleContentCards } from './placeholder-data';

const HomePage = () => {
  console.log('HomePage loaded');

  const recentlyPlayed = sampleContentCards.slice(0, 2);
  const doraemonPicks = sampleContentCards.slice(2, 4);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64 overflow-hidden"> {/* Main content area */}
        <Header />
        <ScrollArea className="flex-1">
          <div className="pb-[96px]"> {/* Padding for NowPlayingBar */}
            <main className="p-6">
              <section className="mb-12">
                <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Welcome to DoraMusic!</h1>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Recently Played</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {recentlyPlayed.map(card => (
                    <ContentCard
                      key={card.id}
                      id={card.id}
                      title={card.title}
                      subtitle={card.subtitle}
                      type={card.type}
                      imageUrl={card.imageUrl}
                      onClick={card.onClick}
                      onPlayClick={card.onPlayClick}
                    />
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Doraemon's Picks</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {doraemonPicks.map(card => (
                    <ContentCard
                      key={card.id}
                      id={card.id}
                      title={card.title}
                      subtitle={card.subtitle}
                      type={card.type}
                      imageUrl={card.imageUrl}
                      onClick={card.onClick}
                      onPlayClick={card.onPlayClick}
                    />
                  ))}
                </div>
              </section>
            </main>
            <Footer />
          </div>
        </ScrollArea>
        <NowPlayingBar {...dummyNowPlayingBarProps} />
      </div>
    </div>
  );
};

export default HomePage;