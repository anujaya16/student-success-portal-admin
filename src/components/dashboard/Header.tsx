
import React from 'react';
import { Bell, Search, Moon, Sun } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from '@/components/theme/ThemeProvider';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="glass sticky top-0 z-30 border-b border-white/20 dark:border-slate-700/20 p-4 flex justify-between items-center backdrop-blur-lg">
      <div className="text-2xl font-bold text-foreground dark:text-gray-300">
        Student Performance Prediction
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-muted-foreground h-4 w-4" />
          </div>
          <Input 
            placeholder="Search..." 
            className="pl-10 bg-white/10 dark:bg-slate-800/40 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-800/60 transition-all duration-200 w-64"
          />
        </div>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={toggleTheme}
                className="rounded-full glass border-white/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-800/60"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle {theme === 'light' ? 'dark' : 'light'} mode</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative glass rounded-full border-white/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-800/60"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-dashboard-red rounded-full animate-pulse-glow"></span>
        </Button>
        
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8 border border-white/30 dark:border-slate-700/30 hover-scale">
            <AvatarImage src="/placeholder.svg" alt="Admin" />
            <AvatarFallback className="bg-gradient-to-br from-dashboard-blue to-dashboard-purple text-white">AD</AvatarFallback>
          </Avatar>
          <span className="font-medium hidden md:block">Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
