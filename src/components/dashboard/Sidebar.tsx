
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  BarChart, 
  FileText,
  Calendar,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BookOpen
} from 'lucide-react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/' },
  { icon: Users, label: 'Students', path: '/students' },
  { icon: BarChart, label: 'Analyticsdfs', path: '/analytics' },
  { icon: BookOpen, label: 'Courses', path: '/courses' },
  { icon: FileText, label: 'Reports', path: '/reports' },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div 
      className={cn(
        "min-h-screen bg-white border-r flex flex-col transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className={cn(
        "flex items-center h-16 px-4 border-b",
        collapsed ? "justify-center" : "justify-between"
      )}>
        {!collapsed ? (
          <div className="flex items-center space-x-2">
            <GraduationCap size={24} className="text-dashboard-blue" />
            <span className="text-xl font-semibold text-dashboard-blue">EduTrack</span>
          </div>
        ) : (
          <GraduationCap size={24} className="text-dashboard-blue" />
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-full hover:bg-secondary flex items-center justify-center"
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
                    ? "bg-dashboard-light-blue text-dashboard-blue font-medium" 
                    : "hover:bg-secondary text-gray-700"
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
        "p-4 border-t mt-auto",
        collapsed ? "text-center" : ""
      )}>
        {!collapsed && (
          <div className="text-sm text-muted-foreground">
            EduTrack Admin v1.0
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
