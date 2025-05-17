
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen bg-background dark:bg-slate-900 overflow-hidden transition-colors duration-300 relative">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10 bg-grid-pattern"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 mix-blend-multiply dark:mix-blend-soft-light"></div>
      
      {/* Sidebar with glass effect */}
      <div className="relative z-10">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden relative z-10">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 relative">
          <div className="container mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
