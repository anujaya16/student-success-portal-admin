
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  BarChart, 
  GraduationCap,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '@/components/theme/ThemeProvider';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/' },
  { icon: Users, label: 'Students', path: '/students' },
  { icon: BarChart, label: 'Analytics', path: '/analytics' },
  { icon: BookOpen, label: 'Courses', path: '/courses' },
  { icon: CalendarDays, label: 'Schedules', path: '/schedules' },
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
        "min-h-screen glass z-20 transition-all duration-300",
        collapsed ? "w-20" : "w-64",
      )}
    >
      <div className={cn(
        "flex items-center h-16 px-4 border-b border-white/10 dark:border-slate-700/20",
        collapsed ? "justify-center" : "justify-between"
      )}>
        {!collapsed ? (
          <div className="flex items-center space-x-2">
            <GraduationCap size={24} className="text-dashboard-blue dark:text-blue-400" />
            <span className="text-xl font-semibold bg-gradient-to-r from-dashboard-blue to-dashboard-purple dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">EduTrack</span>
          </div>
        ) : (
          <GraduationCap size={24} className="text-dashboard-blue dark:text-blue-400" />
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-full hover:bg-white/20 dark:hover:bg-slate-800/60 transition-colors flex items-center justify-center"
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
                  "flex items-center px-3 py-3 rounded-xl transition-all duration-300 hover-scale",
                  collapsed ? "justify-center" : "space-x-3",
                  isActive 
                    ? "bg-white/20 dark:bg-slate-800/40 text-dashboard-blue dark:text-blue-400 font-medium shadow-lg backdrop-blur-sm border border-white/10 dark:border-slate-700/20" 
                    : "hover:bg-white/10 dark:hover:bg-slate-800/20 text-gray-700 dark:text-gray-300"
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
        "p-4 border-t border-white/10 dark:border-slate-700/20 mt-auto",
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
