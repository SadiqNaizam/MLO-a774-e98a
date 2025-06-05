// Shared placeholder data for DoraMusic pages

export const dummyNowPlayingBarProps = {
  currentTrack: {
    id: "dora-theme-song",
    name: "Doraemon no Uta",
    artist: "Kumiko Osugi",
    albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273b974891f9ef0d62989a2dfa5", // Doraemon image
  },
  isPlaying: false,
  progress: 30,
  volume: 70,
  isMuted: false,
  onPlayPause: () => console.log("Shared: Play/Pause clicked"),
  onSkipNext: () => console.log("Shared: Skip next clicked"),
  onSkipPrevious: () => console.log("Shared: Skip previous clicked"),
  onSeek: (value: number[]) => console.log("Shared: Seek to", value[0]),
  onVolumeChange: (value: number[]) => console.log("Shared: Volume to", value[0]),
  onToggleMute: () => console.log("Shared: Toggle mute"),
};

export const sampleMusicTracks = [
  { id: "track1", trackName: "Doraemon no Uta", artistName: "Kumiko Osugi", albumName: "Doraemon Best", albumArtUrl: "https://i.scdn.co/image/ab67616d00001e02b974891f9ef0d62989a2dfa5", duration: "3:15", onPlayPauseClick: (id: string | number) => console.log(`Play/pause ${id}`) },
  { id: "track2", trackName: "Yume wo Kanaete Doraemon", artistName: "mao", albumName: "Doraemon Movie Themes", albumArtUrl: "https://source.unsplash.com/random/100x100?cartoon,song&sig=1", duration: "4:05", onPlayPauseClick: (id: string | number) => console.log(`Play/pause ${id}`) },
  { id: "track3", trackName: "Boku Doraemon", artistName: "Nobuyo Ōyama", albumName: "Classic Doraemon", albumArtUrl: "https://source.unsplash.com/random/100x100?robot,cat&sig=2", duration: "2:50", onPlayPauseClick: (id: string | number) => console.log(`Play/pause ${id}`) },
  { id: "track4", trackName: "Aoi Sora wa Pocket sa", artistName: "Satoko Yamano", albumName: "Doraemon Adventures", albumArtUrl: "https://source.unsplash.com/random/100x100?sky,pocket&sig=3", duration: "3:30", onPlayPauseClick: (id: string | number) => console.log(`Play/pause ${id}`) },
];

export const sampleContentCards = [
  { id: "album1", title: "Doraemon's Greatest Hits", subtitle: "Compilation Album", type: "album" as const, imageUrl: "https://source.unsplash.com/random/300x300?music,compilation&sig=10", onPlayClick: (id: string | number) => console.log(`Play ${id}`), onClick: (id: string | number) => console.log(`Content click ${id}`) },
  { id: "artist1", title: "Doraemon Band", subtitle: "Artist", type: "artist" as const, imageUrl: "https://source.unsplash.com/random/300x300?music,band&sig=11", onClick: (id: string | number) => console.log(`Content click ${id}`) },
  { id: "playlist1", title: "Future Funk Vibes", subtitle: "Playlist by Nobita", type: "playlist" as const, imageUrl: "https://source.unsplash.com/random/300x300?future,funk&sig=12", onPlayClick: (id: string | number) => console.log(`Play ${id}`), onClick: (id: string | number) => console.log(`Content click ${id}`) },
  { id: "album2", title: "Nobita's Study Mix", subtitle: "Focus Album", type: "album" as const, imageUrl: "https://source.unsplash.com/random/300x300?study,chill&sig=13", onPlayClick: (id: string | number) => console.log(`Play ${id}`), onClick: (id: string | number) => console.log(`Content click ${id}`) },
];