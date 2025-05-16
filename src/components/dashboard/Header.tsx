
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
    <header className="bg-background/80 backdrop-blur-md border-b border-border/40 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-dashboard-blue dark:text-blue-300">
        Student Performance Prediction
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search..." 
            className="w-64 pl-10 bg-secondary/50 backdrop-blur-sm"
          />
        </div>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={toggleTheme}
                className="rounded-full bg-background/30 backdrop-blur-sm border-border/40 hover:bg-background/50"
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
        
        <Button variant="ghost" size="icon" className="relative bg-background/30 backdrop-blur-sm rounded-full">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-dashboard-red rounded-full"></span>
        </Button>
        
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8 border border-border/40">
            <AvatarImage src="/placeholder.svg" alt="Admin" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <span className="font-medium hidden md:block">Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
