
import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 mb-4 md:mb-0">
            © 2024 Zorto Richard. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-green-400 text-sm">● Available for Work</span>
            <span className="text-white/60">Lagos, Nigeria</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
