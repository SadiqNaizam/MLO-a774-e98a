import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Library, Settings, Radio } from 'lucide-react'; // Added Radio for Doraemon's pocket/magic
import { ScrollArea } from '@/components/ui/scroll-area';

// Doraemon theme colors
const DORAEMON_BLUE = 'bg-blue-600'; // Main navigation background
const DORAEMON_TEXT_LIGHT = 'text-white';
const DORAEMON_ACCENT_YELLOW = 'hover:bg-yellow-400';
const ACTIVE_LINK_BG = 'bg-blue-700'; // Darker blue for active link

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon: Icon, label, isActive }) => (
  <li>
    <Link
      to={to}
      className={`flex items-center space-x-3 p-3 rounded-md transition-colors
                  ${DORAEMON_TEXT_LIGHT} ${DORAEMON_ACCENT_YELLOW}
                  ${isActive ? ACTIVE_LINK_BG : 'hover:bg-blue-500'}`}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  </li>
);

const Sidebar: React.FC = () => {
  console.log("Rendering Sidebar");
  const location = useLocation();

  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/search", icon: Search, label: "Search" },
    { to: "/library", icon: Library, label: "Your Library" },
  ];

  const secondaryNavItems = [
     // Example: Add playlist creation or other actions
    { to: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <aside className={`w-64 ${DORAEMON_BLUE} ${DORAEMON_TEXT_LIGHT} flex flex-col h-screen fixed top-0 left-0 z-50 p-4 space-y-6`}>
      <div className="flex items-center space-x-2 p-2">
        <Radio className="h-10 w-10 text-red-400" /> {/* Doraemon's bell/pocket icon */}
        <h1 className="text-2xl font-bold">DoraMusic</h1>
      </div>

      <ScrollArea className="flex-grow">
        <nav className="space-y-2">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <NavItem key={item.to} {...item} isActive={location.pathname === item.to} />
            ))}
          </ul>
        </nav>

        {/* Optional: Divider */}
        {/* <hr className="my-4 border-blue-400" /> */}

        {/* <nav className="space-y-2">
          <p className="px-3 text-xs font-semibold uppercase text-blue-200">Playlists</p>
          {/* Placeholder for playlists */}
        {/* </nav> */}
      </ScrollArea>
      
      <nav className="mt-auto space-y-1">
          {secondaryNavItems.map((item) => (
            <NavItem key={item.to} {...item} isActive={location.pathname === item.to} />
          ))}
      </nav>
    </aside>
  );
};

export default Sidebar;