import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MusicTrackItem from '@/components/MusicTrackItem';
import NowPlayingBar from '@/components/NowPlayingBar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Play, Shuffle } from 'lucide-react';
import { dummyNowPlayingBarProps, sampleMusicTracks, sampleContentCards } from './placeholder-data';

const ItemDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  console.log('ItemDetailPage loaded for item ID:', id);

  // Find item details based on ID (mock)
  const item = sampleContentCards.find(c => c.id === id) || 
               sampleContentCards.find(c => c.type === 'album'); // fallback to first album
  
  const tracks = item?.type === 'album' || item?.type === 'playlist' ? sampleMusicTracks : sampleMusicTracks.slice(0,1);


  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64 overflow-hidden">
        <Header />
        <ScrollArea className="flex-1">
          <div className="pb-[96px]">
            <main className="p-6">
              {item ? (
                <>
                  <section className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-8">
                    <img 
                      src={item.imageUrl || 'https://source.unsplash.com/random/200x200?music&sig=50'} 
                      alt={item.title}
                      className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-lg shadow-xl"
                    />
                    <div className="text-center md:text-left">
                      <h2 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-wider">{item.type}</h2>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold my-2 text-gray-800 dark:text-white">{item.title}</h1>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">{item.subtitle}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Created by Doraemon · {tracks.length} songs, approx. {Math.floor(tracks.reduce((sum, t) => sum + (parseInt(t.duration.split(':')[0])*60 + parseInt(t.duration.split(':')[1])), 0) / 60)} min
                      </p>
                      <div className="mt-6 flex gap-4 justify-center md:justify-start">
                        <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                          <Play className="mr-2 h-5 w-5 fill-current" /> Play All
                        </Button>
                        <Button size="lg" variant="outline">
                          <Shuffle className="mr-2 h-5 w-5" /> Shuffle
                        </Button>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Tracks</h2>
                    <div className="space-y-1">
                      {tracks.map((track, index) => (
                        <div key={track.id} className="flex items-center">
                           <span className="text-sm text-gray-500 dark:text-gray-400 w-8 text-center">{index + 1}</span>
                           <MusicTrackItem {...track} />
                        </div>
                      ))}
                    </div>
                  </section>
                </>
              ) : (
                <p>Item not found.</p>
              )}
            </main>
            <Footer />
          </div>
        </ScrollArea>
        <NowPlayingBar {...dummyNowPlayingBarProps} />
      </div>
    </div>
  );
};

export default ItemDetailPage;