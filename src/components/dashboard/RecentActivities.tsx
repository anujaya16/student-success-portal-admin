
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertTriangle, Clock, ArrowRight } from 'lucide-react';

interface Activity {
  id: string;
  type: 'assessment' | 'alert' | 'update';
  title: string;
  description: string;
  time: string;
}

const activities: Activity[] = [
  {
    id: '1',
    type: 'assessment',
    title: 'Math Assessment Complete',
    description: 'Grade 10 midterm prediction model updated',
    time: '1 hour ago'
  },
  {
    id: '2',
    type: 'alert',
    title: 'At-Risk Students Identified',
    description: '5 students flagged for intervention',
    time: '3 hours ago'
  },
  {
    id: '3',
    type: 'update',
    title: 'Prediction Model Updated',
    description: 'New attendance factors incorporated',
    time: '1 day ago'
  },
  {
    id: '4',
    type: 'assessment',
    title: 'Science Quiz Results',
    description: 'Grade 9 prediction accuracy improved',
    time: '2 days ago'
  }
];

const ActivityIcon = ({ type }: { type: Activity['type'] }) => {
  switch (type) {
    case 'assessment':
      return <Check className="h-5 w-5 text-dashboard-green dark:text-green-400" />;
    case 'alert':
      return <AlertTriangle className="h-5 w-5 text-dashboard-orange dark:text-orange-400" />;
    case 'update':
      return <Clock className="h-5 w-5 text-dashboard-blue dark:text-blue-400" />;
    default:
      return null;
  }
};

const RecentActivities = () => {
  return (
    <div className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Recent Activities</CardTitle>
        <button className="text-sm text-dashboard-blue dark:text-blue-400 flex items-center hover:underline">
          View all <ArrowRight className="h-3 w-3 ml-1" />
        </button>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start hover:bg-white/10 dark:hover:bg-slate-800/20 p-2 rounded-lg transition-colors">
              <div className="mr-4 mt-1">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  activity.type === 'assessment' ? 'bg-green-100 dark:bg-green-900/30' : 
                  activity.type === 'alert' ? 'bg-amber-100 dark:bg-amber-900/30' : 
                  'bg-blue-100 dark:bg-blue-900/30'
                }`}>
                  <ActivityIcon type={activity.type} />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{activity.title}</p>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </div>
  );
};

export default RecentActivities;
