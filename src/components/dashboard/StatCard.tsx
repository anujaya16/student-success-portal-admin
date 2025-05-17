
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  className?: string;
  type?: 'default' | 'success' | 'warning' | 'info' | 'danger';
}

const StatCard = ({
  title,
  value,
  description,
  icon,
  trend,
  trendValue,
  className,
  type = 'default',
}: StatCardProps) => {
  // Define card gradient classes based on type
  const cardGradientClass = cn(
    "glass-card hover-scale",
    type === 'success' && "card-success",
    type === 'warning' && "card-warning", 
    type === 'info' && "card-info",
    type === 'danger' && "card-danger"
  );
  
  // Define icon background colors based on type
  const iconBgClass = cn(
    "p-3 rounded-xl flex items-center justify-center",
    type === 'default' && "bg-dashboard-blue/10 dark:bg-dashboard-blue/20",
    type === 'success' && "bg-dashboard-green/10 dark:bg-dashboard-green/20",
    type === 'warning' && "bg-dashboard-orange/10 dark:bg-dashboard-orange/20",
    type === 'info' && "bg-dashboard-blue/10 dark:bg-dashboard-blue/20",
    type === 'danger' && "bg-dashboard-red/10 dark:bg-dashboard-red/20"
  );
  
  // Define trend colors
  const trendClass = cn(
    "text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1 w-fit",
    trend === 'up' ? "text-emerald-700 bg-emerald-100 dark:text-emerald-300 dark:bg-emerald-900/30" : 
    trend === 'down' ? "text-red-700 bg-red-100 dark:text-red-300 dark:bg-red-900/30" : 
    "text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/30"
  );

  return (
    <div className={cn("rounded-2xl overflow-hidden", cardGradientClass, className)}>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
            {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
            
            {trend && trendValue && (
              <div className="mt-3">
                <span className={trendClass}>
                  {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '•'} {trendValue}
                </span>
              </div>
            )}
          </div>
          
          <div className={iconBgClass}>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
