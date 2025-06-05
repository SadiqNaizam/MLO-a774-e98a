import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Play, Pause, Heart, MoreHorizontal, Volume2 } from 'lucide-react'; // Added Volume2 as playing indicator

interface MusicTrackItemProps {
  id: string | number;
  trackName: string;
  artistName: string;
  albumName?: string;
  albumArtUrl?: string;
  duration?: string; // e.g., "3:45"
  isPlaying?: boolean;
  isCurrentTrack?: boolean; // To highlight the currently selected/playing track in a list
  onPlayPauseClick: (id: string | number) => void;
  onLikeClick?: (id: string | number) => void;
  onMoreOptionsClick?: (id: string | number, event: React.MouseEvent) => void;
}

const MusicTrackItem: React.FC<MusicTrackItemProps> = ({
  id,
  trackName,
  artistName,
  albumName,
  albumArtUrl,
  duration,
  isPlaying = false,
  isCurrentTrack = false,
  onPlayPauseClick,
  onLikeClick,
  onMoreOptionsClick,
}) => {
  console.log("Rendering MusicTrackItem:", trackName, "isPlaying:", isPlaying);

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    onPlayPauseClick(id);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    onLikeClick?.(id);
  };

  const handleMoreOptions = (e: React.MouseEvent) => {
    e.stopPropagation();
    onMoreOptionsClick?.(id, e);
  };
  
  // Doraemon red for play button active state
  const playPauseIconColor = isPlaying || isCurrentTrack ? "text-red-500" : "text-gray-600 dark:text-gray-400";
  const trackNameColor = isPlaying || isCurrentTrack ? "text-red-500 dark:text-red-400" : "text-gray-900 dark:text-white";

  return (
    <div
      className={`flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md group transition-colors ${isCurrentTrack ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
      onClick={() => onPlayPauseClick(id)} // Click row to play/pause
      role="button"
      tabIndex={0}
      aria-label={`Play or pause ${trackName} by ${artistName}`}
    >
      <Avatar className="h-10 w-10 rounded mr-3">
        <AvatarImage src={albumArtUrl || '/placeholder.svg'} alt={albumName || trackName} />
        <AvatarFallback>{trackName.substring(0, 1)}</AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        <p className={`font-medium truncate ${trackNameColor}`}>{trackName}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{artistName}</p>
      </div>
      
      {isPlaying && <Volume2 className={`h-4 w-4 mr-3 ${playPauseIconColor}`} />}

      {onLikeClick && (
        <Button variant="ghost" size="icon" onClick={handleLike} className="hidden group-hover:inline-flex text-gray-500 hover:text-red-500 mx-1">
          <Heart className="h-4 w-4" />
        </Button>
      )}

      <Button variant="ghost" size="icon" onClick={handlePlayPause} className={`mx-1 ${playPauseIconColor} hover:text-red-600`}>
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </Button>

      {duration && <span className="text-sm text-gray-500 dark:text-gray-400 w-12 text-right mx-2 hidden sm:inline">{duration}</span>}
      
      {onMoreOptionsClick && (
        <Button variant="ghost" size="icon" onClick={handleMoreOptions} className="hidden group-hover:inline-flex text-gray-500 hover:text-blue-500 mx-1">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default MusicTrackItem;