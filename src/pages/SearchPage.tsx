import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContentCard from '@/components/ContentCard';
import MusicTrackItem from '@/components/MusicTrackItem';
import NowPlayingBar from '@/components/NowPlayingBar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search as SearchIcon } from 'lucide-react';
import { dummyNowPlayingBarProps, sampleMusicTracks, sampleContentCards } from './placeholder-data';

const SearchPage = () => {
  console.log('SearchPage loaded');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered results based on a dummy search logic
  const filteredTracks = sampleMusicTracks.filter(track => 
    track.trackName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.artistName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredContent = sampleContentCards.filter(content =>
    content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (content.subtitle && content.subtitle.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64 overflow-hidden">
        <Header />
        <ScrollArea className="flex-1">
          <div className="pb-[96px]">
            <main className="p-6">
              <div className="relative mb-8">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  type="search"
                  placeholder="Search for songs, artists, albums..."
                  className="pl-10 w-full max-w-xl text-base bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {searchTerm ? (
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="mb-4 bg-gray-200 dark:bg-gray-800">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="songs">Songs</TabsTrigger>
                    <TabsTrigger value="artists">Artists</TabsTrigger>
                    <TabsTrigger value="albums">Albums</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all">
                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-3">Songs</h2>
                      {filteredTracks.length > 0 ? filteredTracks.map(track => <MusicTrackItem key={track.id} {...track} />) : <p>No songs found.</p>}
                    </section>
                    <section>
                      <h2 className="text-xl font-semibold mb-3">Albums, Artists & Playlists</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredContent.length > 0 ? filteredContent.map(card => <ContentCard key={card.id} {...card} />) : <p>No other content found.</p>}
                      </div>
                    </section>
                  </TabsContent>
                  <TabsContent value="songs">
                    {filteredTracks.length > 0 ? filteredTracks.map(track => <MusicTrackItem key={track.id} {...track} />) : <p>No songs found for "{searchTerm}".</p>}
                  </TabsContent>
                  <TabsContent value="artists">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {filteredContent.filter(c => c.type === 'artist').map(card => <ContentCard key={card.id} {...card} />)}
                      {filteredContent.filter(c => c.type === 'artist').length === 0 && <p>No artists found for "{searchTerm}".</p>}
                    </div>
                  </TabsContent>
                  <TabsContent value="albums">
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {filteredContent.filter(c => c.type === 'album').map(card => <ContentCard key={card.id} {...card} />)}
                      {filteredContent.filter(c => c.type === 'album').length === 0 && <p>No albums found for "{searchTerm}".</p>}
                    </div>
                  </TabsContent>
                </Tabs>
              ) : (
                <p className="text-center text-gray-500 dark:text-gray-400">Start typing to search for your favorite music!</p>
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

export default SearchPage;