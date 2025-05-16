
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen bg-background dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10 -z-10"></div>
          <div className="relative z-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
