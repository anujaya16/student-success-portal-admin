
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  BarChart, 
  FileText,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BookOpen
} from 'lucide-react';
import { useTheme } from '@/components/theme/ThemeProvider';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/' },
  { icon: Users, label: 'Students', path: '/students' },
  { icon: BarChart, label: 'Analytics', path: '/analytics' },
  { icon: BookOpen, label: 'Courses', path: '/courses' },
  { icon: FileText, label: 'Reports', path: '/reports' },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { theme } = useTheme();
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div 
      className={cn(
        "min-h-screen backdrop-blur-md transition-all duration-300 z-10",
        collapsed ? "w-20" : "w-64",
        theme === 'light' 
          ? "bg-white/80 border-r border-border/40" 
          : "bg-slate-900/80 border-r border-slate-700/40"
      )}
    >
      <div className={cn(
        "flex items-center h-16 px-4 border-b border-border/40 dark:border-slate-700/40",
        collapsed ? "justify-center" : "justify-between"
      )}>
        {!collapsed ? (
          <div className="flex items-center space-x-2">
            <GraduationCap size={24} className="text-dashboard-blue dark:text-blue-300" />
            <span className="text-xl font-semibold text-dashboard-blue dark:text-blue-300">EduTrack</span>
          </div>
        ) : (
          <GraduationCap size={24} className="text-dashboard-blue dark:text-blue-300" />
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-full hover:bg-secondary dark:hover:bg-slate-800 flex items-center justify-center"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
      
      <nav className="flex-1 py-6">
        <ul className="space-y-2 px-2">
          {sidebarItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => cn(
                  "flex items-center px-3 py-3 rounded-md transition-colors",
                  collapsed ? "justify-center" : "space-x-3",
                  isActive 
                    ? "bg-dashboard-light-blue dark:bg-blue-900/30 text-dashboard-blue dark:text-blue-300 font-medium backdrop-blur-sm" 
                    : "hover:bg-secondary/70 dark:hover:bg-slate-800/70 text-gray-700 dark:text-gray-300 backdrop-blur-sm"
                )}
              >
                <item.icon size={20} />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className={cn(
        "p-4 border-t border-border/40 dark:border-slate-700/40 mt-auto",
        collapsed ? "text-center" : ""
      )}>
        {!collapsed && (
          <div className="text-sm text-muted-foreground dark:text-slate-400">
            EduTrack Admin v1.0
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
