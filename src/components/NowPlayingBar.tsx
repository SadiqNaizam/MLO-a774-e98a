import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Maximize2, ListMusic, Shuffle, Repeat } from 'lucide-react';

// Doraemon theme colors
const BAR_BG = 'bg-white dark:bg-gray-900'; // White bar, standard for players
const ACCENT_BLUE = 'blue-500'; // Doraemon's blue for progress/volume
const BUTTON_HOVER_RED = 'hover:text-red-500';

interface NowPlayingBarProps {
  currentTrack?: {
    id: string;
    name: string;
    artist: string;
    albumArtUrl?: string;
  };
  isPlaying: boolean;
  progress: number; // 0-100
  volume: number; // 0-100
  onPlayPause: () => void;
  onSkipNext: () => void;
  onSkipPrevious: () => void;
  onSeek: (value: number[]) => void;
  onVolumeChange: (value: number[]) => void;
  onToggleMute: () => void;
  isMuted: boolean;
  // Add other controls like shuffle, repeat, queue
}

const NowPlayingBar: React.FC<NowPlayingBarProps> = ({
  currentTrack,
  isPlaying,
  progress,
  volume,
  onPlayPause,
  onSkipNext,
  onSkipPrevious,
  onSeek,
  onVolumeChange,
  onToggleMute,
  isMuted
}) => {
  console.log("Rendering NowPlayingBar, currentTrack:", currentTrack?.name);

  // Dummy state for shuffle/repeat for UI
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  if (!currentTrack) {
    // Optionally render a placeholder or nothing if no track is playing
    return (
        <footer className={`fixed bottom-0 left-0 right-0 ${BAR_BG} border-t border-gray-200 dark:border-gray-700 p-3 h-[80px] flex items-center justify-center text-gray-500`}>
            No music playing. Pick a tune!
        </footer>
    );
  }

  return (
    <footer className={`fixed bottom-0 left-0 right-0 ${BAR_BG} border-t border-gray-200 dark:border-gray-700 p-3 h-[80px] z-50`}>
      <div className="grid grid-cols-3 items-center h-full">
        {/* Left: Track Info */}
        <div className="flex items-center space-x-3">
          <Avatar className="h-12 w-12 rounded">
            <AvatarImage src={currentTrack.albumArtUrl || '/placeholder.svg'} alt={currentTrack.name} />
            <AvatarFallback>{currentTrack.name.substring(0,1)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">{currentTrack.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{currentTrack.artist}</p>
          </div>
        </div>

        {/* Center: Player Controls & Progress */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => setIsShuffle(!isShuffle)} className={`${isShuffle ? `text-${ACCENT_BLUE}` : 'text-gray-500'} ${BUTTON_HOVER_RED}`}>
                <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onSkipPrevious} className={`text-gray-700 dark:text-gray-300 ${BUTTON_HOVER_RED}`}>
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button
              variant="default" // Primary play button
              size="icon"
              onClick={onPlayPause}
              className={`rounded-full h-10 w-10 bg-red-500 hover:bg-red-600 text-white`}
            >
              {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={onSkipNext} className={`text-gray-700 dark:text-gray-300 ${BUTTON_HOVER_RED}`}>
              <SkipForward className="h-5 w-5" />
            </Button>
             <Button variant="ghost" size="icon" onClick={() => setIsRepeat(!isRepeat)} className={`${isRepeat ? `text-${ACCENT_BLUE}` : 'text-gray-500'} ${BUTTON_HOVER_RED}`}>
                <Repeat className="h-4 w-4" />
            </Button>
          </div>
          <div className="w-full max-w-md mt-1 px-4 hidden md:flex items-center space-x-2">
            <span className="text-xs text-gray-500">0:00</span> {/* Replace with actual time */}
            <Slider
              defaultValue={[progress]}
              value={[progress]}
              max={100}
              step={1}
              onValueChange={onSeek}
              className={`[&>span:first-child]:h-1 [&>span:first-child>span]:bg-${ACCENT_BLUE}`} // Doraemon blue progress
            />
            <span className="text-xs text-gray-500">3:45</span> {/* Replace with actual duration */}
          </div>
        </div>

        {/* Right: Volume & Other Controls */}
        <div className="flex items-center justify-end space-x-2">
          <Button variant="ghost" size="icon" className="text-gray-500 hover:text-blue-500 hidden lg:inline-flex">
            <ListMusic className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onToggleMute} className="text-gray-500 hover:text-blue-500">
            {isMuted || volume === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </Button>
          <div className="w-24 hidden md:inline-block">
            <Slider
              defaultValue={[volume]}
              value={[isMuted ? 0 : volume]}
              max={100}
              step={1}
              onValueChange={onVolumeChange}
              className={`[&>span:first-child]:h-1 [&>span:first-child>span]:bg-${ACCENT_BLUE}`} // Doraemon blue volume
            />
          </div>
           <Button variant="ghost" size="icon" className="text-gray-500 hover:text-blue-500 hidden lg:inline-flex">
            <Maximize2 className="h-4 w-4" /> {/* Fullscreen or view options */}
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default NowPlayingBar;