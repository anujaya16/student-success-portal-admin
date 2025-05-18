
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Calendar, Clock, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from '@/hooks/use-toast';

type ScheduleEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'exam' | 'class' | 'meeting';
  participants: number;
  course?: string;
};

const Schedules = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<string>('upcoming');

  const upcomingSchedules: ScheduleEvent[] = [
    {
      id: '1',
      title: 'Final Math Examination',
      date: '2025-05-25',
      time: '09:00 - 12:00',
      location: 'Hall A',
      type: 'exam',
      participants: 124,
      course: 'Advanced Mathematics'
    },
    {
      id: '2',
      title: 'Data Science Workshop',
      date: '2025-05-21',
      time: '14:00 - 16:30',
      location: 'Lab 302',
      type: 'class',
      participants: 38,
      course: 'Introduction to Data Science'
    },
    {
      id: '3',
      title: 'Faculty Meeting',
      date: '2025-05-20',
      time: '10:00 - 11:00',
      location: 'Conference Room',
      type: 'meeting',
      participants: 12
    },
    {
      id: '4',
      title: 'Computer Science Project Presentations',
      date: '2025-05-22',
      time: '13:00 - 17:00',
      location: 'Auditorium',
      type: 'class',
      participants: 45,
      course: 'Software Engineering'
    }
  ];

  const pastSchedules: ScheduleEvent[] = [
    {
      id: '5',
      title: 'Mid-term Physics Examination',
      date: '2025-05-10',
      time: '09:00 - 11:00',
      location: 'Hall B',
      type: 'exam',
      participants: 98,
      course: 'Physics 101'
    },
    {
      id: '6',
      title: 'Parent-Teacher Meeting',
      date: '2025-05-05',
      time: '15:00 - 18:00',
      location: 'Main Building',
      type: 'meeting',
      participants: 76
    }
  ];

  const handleAction = (event: ScheduleEvent) => {
    toast({
      title: "Schedule Selected",
      description: `You selected ${event.title} on ${event.date}`,
    });
  };

  const getEventColor = (type: ScheduleEvent['type']) => {
    switch (type) {
      case 'exam': return 'bg-dashboard-red/10 text-dashboard-red dark:bg-red-400/10 dark:text-red-400';
      case 'class': return 'bg-dashboard-blue/10 text-dashboard-blue dark:bg-blue-400/10 dark:text-blue-400';
      case 'meeting': return 'bg-dashboard-green/10 text-dashboard-green dark:bg-green-400/10 dark:text-green-400';
      default: return '';
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Schedules</h1>
        <p className="text-muted-foreground">Manage and view all academic calendars and events</p>
      </div>

      <div className="mb-8">
        <Tabs defaultValue="upcoming" onValueChange={setActiveTab}>
          <div className="flex justify-between items-center mb-6">
            <TabsList className="glass">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>
            <Button className="glass hover:bg-white/20 dark:hover:bg-slate-800/60">
              <Calendar className="mr-2 h-4 w-4" />
              New Event
            </Button>
          </div>

          <TabsContent value="upcoming" className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              {upcomingSchedules.map((event) => (
                <Card key={event.id} className="glass-card hover:shadow-lg transition-all duration-300 hover-scale-subtle">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between p-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <Badge className={getEventColor(event.type)}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </Badge>
                          <span className="ml-2 text-sm text-muted-foreground">{formatDate(event.date)}</span>
                        </div>
                        <h3 className="text-xl font-medium mb-2">{event.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="h-3.5 w-3.5 mr-1" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-3.5 w-3.5 mr-1" />
                            <span>{event.participants} participants</span>
                          </div>
                          {event.course && (
                            <div className="flex items-center">
                              <BookOpen className="h-3.5 w-3.5 mr-1" />
                              <span>{event.course}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center mt-4 md:mt-0 space-x-2">
                        <Button variant="outline" size="sm" className="glass hover:bg-white/20 dark:hover:bg-slate-800/60">
                          Details
                        </Button>
                        <Button size="sm" 
                          className="bg-dashboard-blue hover:bg-dashboard-blue/80 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
                          onClick={() => handleAction(event)}>
                          Manage
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="past" className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              {pastSchedules.map((event) => (
                <Card key={event.id} className="glass-card opacity-80 hover:opacity-100 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between p-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <Badge variant="outline" className={getEventColor(event.type)}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </Badge>
                          <span className="ml-2 text-sm text-muted-foreground">{formatDate(event.date)}</span>
                        </div>
                        <h3 className="text-xl font-medium mb-2">{event.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="h-3.5 w-3.5 mr-1" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-3.5 w-3.5 mr-1" />
                            <span>{event.participants} participants</span>
                          </div>
                          {event.course && (
                            <div className="flex items-center">
                              <BookOpen className="h-3.5 w-3.5 mr-1" />
                              <span>{event.course}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center mt-4 md:mt-0">
                        <Button variant="outline" size="sm" className="glass hover:bg-white/20 dark:hover:bg-slate-800/60">
                          View Report
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="calendar">
            <Card className="glass-card p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Calendar View</CardTitle>
                <CardDescription>This feature will be available soon. Stay tuned!</CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <div className="flex items-center justify-center h-64 border border-dashed rounded-lg">
                  <div className="text-center">
                    <Calendar className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-2 text-lg font-medium">Coming Soon</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Calendar view is under development and will be available in the next update.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Schedules;
