import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { Bell, Search } from 'lucide-react';

// Doraemon theme colors (conceptual)
// Blue: primary (e.g., 'bg-blue-500', 'text-blue-700')
// White: text/backgrounds
// Red: accents (e.g., 'bg-red-500')
// Yellow: highlights (e.g., 'bg-yellow-400')

interface HeaderProps {
  // Props can be added for user info, etc.
}

const Header: React.FC<HeaderProps> = () => {
  console.log("Rendering Header");

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-40 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side: Search bar or placeholder */}
          <div className="flex items-center">
            {/* This could be a global search input, or contextual actions */}
            {/* For now, a placeholder or a simple search icon */}
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-blue-500">
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Right side: Notifications, User Avatar */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-blue-500">
              <Bell className="h-5 w-5" />
              {/* Optional: Add a badge for notification count */}
            </Button>
            <Link to="/settings">
              <Avatar className="h-8 w-8 cursor-pointer ring-2 ring-offset-2 ring-transparent hover:ring-blue-400 transition-all">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>DM</AvatarFallback> {/* Doraemon initials placeholder */}
              </Avatar>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;