import React from 'react';
import { Link }from 'react-router-dom';
import { Github, Twitter } from 'lucide-react'; // Example icons

const Footer: React.FC = () => {
  console.log("Rendering Footer");
  const currentYear = new Date().getFullYear();

  // Minimalist footer, assuming NowPlayingBar is the primary bottom element
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p>&copy; {currentYear} DoraMusic Inc. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to="/about" className="hover:text-blue-500">About</Link>
            <Link to="/privacy" className="hover:text-blue-500">Privacy</Link>
            <Link to="/terms" className="hover:text-blue-500">Terms</Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><Github className="h-4 w-4 inline"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;