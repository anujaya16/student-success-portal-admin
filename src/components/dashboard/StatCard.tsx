
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  className?: string;
}

const StatCard = ({
  title,
  value,
  description,
  icon,
  trend,
  trendValue,
  className,
}: StatCardProps) => {
  return (
    <Card className={cn("p-6", className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
          {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
          
          {trend && trendValue && (
            <div className="flex items-center mt-2">
              <span className={cn(
                "text-xs font-medium px-1.5 py-0.5 rounded flex items-center",
                trend === 'up' ? "text-green-700 bg-green-100" : 
                trend === 'down' ? "text-red-700 bg-red-100" : 
                "text-blue-700 bg-blue-100"
              )}>
                {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '•'} {trendValue}
              </span>
            </div>
          )}
        </div>
        
        <div className="p-2 rounded-full bg-secondary flex items-center justify-center">
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
