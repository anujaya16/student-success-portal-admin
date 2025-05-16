
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
      return <Check className="h-5 w-5 text-green-500" />;
    case 'alert':
      return <AlertTriangle className="h-5 w-5 text-amber-500" />;
    case 'update':
      return <Clock className="h-5 w-5 text-blue-500" />;
    default:
      return null;
  }
};

const RecentActivities = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Recent Activities</CardTitle>
        <button className="text-sm text-dashboard-blue flex items-center">
          View all <ArrowRight className="h-3 w-3 ml-1" />
        </button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
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
    </Card>
  );
};

export default RecentActivities;
