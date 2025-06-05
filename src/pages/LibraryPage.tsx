import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContentCard from '@/components/ContentCard';
import MusicTrackItem from '@/components/MusicTrackItem';
import NowPlayingBar from '@/components/NowPlayingBar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { dummyNowPlayingBarProps, sampleMusicTracks, sampleContentCards } from './placeholder-data';

const LibraryPage = () => {
  console.log('LibraryPage loaded');

  const likedSongs = sampleMusicTracks.slice(0, 2);
  const userAlbums = sampleContentCards.filter(c => c.type === 'album').slice(0,2);
  const userArtists = sampleContentCards.filter(c => c.type === 'artist');
  const userPlaylists = sampleContentCards.filter(c => c.type === 'playlist');


  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64 overflow-hidden">
        <Header />
        <ScrollArea className="flex-1">
          <div className="pb-[96px]">
            <main className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Your Library</h1>
                <Button variant="outline" className="bg-red-500 hover:bg-red-600 text-white border-red-500 hover:border-red-600">
                  <PlusCircle className="mr-2 h-4 w-4" /> Create Playlist
                </Button>
              </div>

              <Tabs defaultValue="playlists" className="w-full">
                <TabsList className="mb-6 bg-gray-200 dark:bg-gray-800">
                  <TabsTrigger value="playlists">Playlists</TabsTrigger>
                  <TabsTrigger value="songs">Liked Songs</TabsTrigger>
                  <TabsTrigger value="albums">Albums</TabsTrigger>
                  <TabsTrigger value="artists">Artists</TabsTrigger>
                </TabsList>

                <TabsContent value="playlists">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {userPlaylists.map(card => <ContentCard key={card.id} {...card} />)}
                  </div>
                  {userPlaylists.length === 0 && <p>You haven't created or saved any playlists yet.</p>}
                </TabsContent>
                <TabsContent value="songs">
                  {likedSongs.map(track => <MusicTrackItem key={track.id} {...track} />)}
                  {likedSongs.length === 0 && <p>You haven't liked any songs yet.</p>}
                </TabsContent>
                <TabsContent value="albums">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {userAlbums.map(card => <ContentCard key={card.id} {...card} />)}
                  </div>
                  {userAlbums.length === 0 && <p>You haven't saved any albums yet.</p>}
                </TabsContent>
                <TabsContent value="artists">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {userArtists.map(card => <ContentCard key={card.id} {...card} />)}
                  </div>
                   {userArtists.length === 0 && <p>You haven't followed any artists yet.</p>}
                </TabsContent>
              </Tabs>
            </main>
            <Footer />
          </div>
        </ScrollArea>
        <NowPlayingBar {...dummyNowPlayingBarProps} />
      </div>
    </div>
  );
};

export default LibraryPage;