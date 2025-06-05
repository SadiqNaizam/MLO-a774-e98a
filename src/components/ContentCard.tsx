import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { PlayCircle } from 'lucide-react';

interface ContentCardProps {
  id: string | number;
  imageUrl?: string;
  title: string;
  subtitle?: string;
  type?: 'album' | 'artist' | 'playlist' | 'track'; // To slightly vary presentation
  onClick?: (id: string | number) => void;
  onPlayClick?: (id: string | number) => void; // For directly playing content like an album/playlist
}

const ContentCard: React.FC<ContentCardProps> = ({
  id,
  imageUrl,
  title,
  subtitle,
  type = 'album',
  onClick,
  onPlayClick,
}) => {
  console.log("Rendering ContentCard:", title);

  const handleCardClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  const handlePlayButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click if play button is hit
    if (onPlayClick) {
      onPlayClick(id);
    }
  };
  
  // Doraemon theme play button
  const playButtonClass = "bg-red-500 hover:bg-red-600 text-white";

  return (
    <Card
      className="w-full max-w-xs overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-white dark:bg-gray-800 group"
      onClick={handleCardClick}
    >
      <CardHeader className="p-0 relative">
        <AspectRatio ratio={1 / 1} className="bg-gray-200 dark:bg-gray-700">
          <img
            src={imageUrl || '/placeholder.svg'}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            onError={(e) => (e.currentTarget.src = '/placeholder.svg')}
          />
        </AspectRatio>
        {onPlayClick && (
          <Button
            size="icon"
            className={`absolute bottom-2 right-2 rounded-full h-12 w-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${playButtonClass}`}
            onClick={handlePlayButtonClick}
            aria-label={`Play ${title}`}
          >
            <PlayCircle className="h-7 w-7" />
          </Button>
        )}
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold truncate text-gray-900 dark:text-white">{title}</CardTitle>
        {subtitle && <CardDescription className="text-sm text-gray-500 dark:text-gray-400 truncate">{subtitle}</CardDescription>}
        {type && <p className="text-xs text-blue-500 dark:text-blue-400 mt-1 capitalize">{type}</p>}
      </CardContent>
      {/* CardFooter can be used for additional actions if needed */}
    </Card>
  );
};

export default ContentCard;