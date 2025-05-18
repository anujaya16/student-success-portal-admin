
import React from 'react';
import { LineChart, Line, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { BookOpen, GraduationCap, Users, Award } from 'lucide-react';

// Sample data for charts
const weeklyData = [
  { name: 'M', value: 5 },
  { name: 'T', value: 10 },
  { name: 'W', value: 7 },
  { name: 'T', value: 2 },
  { name: 'F', value: 12 },
  { name: 'S', value: 15 },
  { name: 'S', value: 29 }
];

const monthlyData = [
  { name: 'J', value: 250 },
  { name: 'F', value: 300 },
  { name: 'M', value: 450 },
  { name: 'A', value: 320 },
  { name: 'M', value: 380 },
  { name: 'J', value: 450 },
  { name: 'J', value: 400 },
  { name: 'A', value: 500 },
  { name: 'S', value: 450 },
  { name: 'O', value: 600 },
  { name: 'N', value: 550 },
  { name: 'D', value: 700 }
];

const dailyTasksData = [
  { name: '12p3p', value: 800 },
  { name: '6p', value: 400 },
  { name: '9p', value: 200 },
  { name: '12p3a', value: 300 },
  { name: '6a', value: 200 },
  { name: '9a', value: 100 }
];

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="text-muted-foreground">View detailed analytics about student performance</p>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Daily Attendance Chart */}
        <Card className="glass-card hover-scale">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Daily Attendance</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[200px] w-full bg-dashboard-green/10 dark:bg-dashboard-green/20 rounded-lg overflow-hidden">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                  <Line type="monotone" dataKey="value" stroke="#51CF66" strokeWidth={2} dot={{ r: 4 }} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--chart-text-color)' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--chart-text-color)' }} />
                  <CartesianGrid vertical={false} stroke="rgba(255, 255, 255, 0.1)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-dashboard-green font-medium flex items-center">↑ 15% increase in attendance</span>
              <span className="text-xs text-muted-foreground">Updated 4 minutes ago</span>
            </div>
          </CardContent>
        </Card>
        
        {/* Monthly Submissions Chart */}
        <Card className="glass-card hover-scale">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Monthly Submissions</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[200px] w-full bg-dashboard-orange/10 dark:bg-dashboard-orange/20 rounded-lg overflow-hidden">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                  <Bar dataKey="value" fill="#FF922B" radius={[4, 4, 0, 0]} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--chart-text-color)' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--chart-text-color)' }} />
                  <CartesianGrid vertical={false} stroke="rgba(255, 255, 255, 0.1)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Last Semester Performance</span>
              <span className="text-xs text-muted-foreground">Last 30 days</span>
            </div>
          </CardContent>
        </Card>
        
        {/* Completed Tasks Chart */}
        <Card className="glass-card hover-scale">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Completed Tasks</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[200px] w-full bg-dashboard-red/10 dark:bg-dashboard-red/20 rounded-lg overflow-hidden">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyTasksData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                  <Line type="monotone" dataKey="value" stroke="#FA5252" strokeWidth={2} dot={{ r: 4 }} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--chart-text-color)' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--chart-text-color)' }} />
                  <CartesianGrid vertical={false} stroke="rgba(255, 255, 255, 0.1)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Completion Rate Tracker</span>
              <span className="text-xs text-muted-foreground">Past 24 hours</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Row - Updated with education-focused metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="glass-card hover-scale bg-gradient-to-br from-orange-50/40 to-amber-50/40 dark:from-orange-900/20 dark:to-amber-900/20">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Average GPA</CardTitle>
            <div className="w-10 h-10 rounded-md bg-dashboard-orange/20 flex items-center justify-center">
              <Award className="h-5 w-5 text-dashboard-orange dark:text-orange-400" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-bold">3.7/4.0</div>
            <p className="text-xs text-muted-foreground">Current Semester</p>
            <div className="mt-4 text-sm text-green-600 dark:text-green-400 flex items-center">
              <span>↑ 0.2 improvement from last semester</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover-scale bg-gradient-to-br from-green-50/40 to-emerald-50/40 dark:from-green-900/20 dark:to-emerald-900/20">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Course Completion</CardTitle>
            <div className="w-10 h-10 rounded-md bg-dashboard-green/20 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-dashboard-green dark:text-green-400" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">Student Course Completion Rate</p>
            <div className="mt-4 text-xs text-muted-foreground flex items-center">
              <span>📅 Current Academic Year</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover-scale bg-gradient-to-br from-red-50/40 to-rose-50/40 dark:from-red-900/20 dark:to-rose-900/20">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">At-Risk Students</CardTitle>
            <div className="w-10 h-10 rounded-md bg-dashboard-red/20 flex items-center justify-center">
              <Users className="h-5 w-5 text-dashboard-red dark:text-red-400" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Students needing intervention</p>
            <div className="mt-4 text-xs text-muted-foreground flex items-center">
              <span>⚠️ 8% of total student body</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover-scale bg-gradient-to-br from-blue-50/40 to-cyan-50/40 dark:from-blue-900/20 dark:to-cyan-900/20">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Graduation Rate</CardTitle>
            <div className="w-10 h-10 rounded-md bg-dashboard-blue/20 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-dashboard-blue dark:text-blue-400" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">Expected graduation rate</p>
            <div className="mt-4 text-xs text-muted-foreground flex items-center">
              <span>↑ 2.5% increase from last year</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Students Stats */}
        <Card className="glass-card hover-scale bg-gradient-to-br from-purple-50/40 to-indigo-50/40 dark:from-purple-900/20 dark:to-indigo-900/20">
          <CardHeader>
            <CardTitle>Student Statistics</CardTitle>
            <CardDescription>New students enrolled as of September 15, 2023</CardDescription>
          </CardHeader>
          <CardContent>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">ID</th>
                  <th className="text-left py-2 font-medium">Name</th>
                  <th className="text-left py-2 font-medium">Major</th>
                  <th className="text-left py-2 font-medium">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">1</td>
                  <td className="py-2">John Smith</td>
                  <td className="py-2">Computer Science</td>
                  <td className="py-2">California</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">2</td>
                  <td className="py-2">Emma Johnson</td>
                  <td className="py-2">Mathematics</td>
                  <td className="py-2">New York</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">3</td>
                  <td className="py-2">Michael Chen</td>
                  <td className="py-2">Physics</td>
                  <td className="py-2">Massachusetts</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      
        {/* Tasks Box */}
        <Card className="glass-card hover-scale bg-gradient-to-br from-orange-50/40 to-amber-50/40 dark:from-orange-900/20 dark:to-amber-900/20">
          <CardHeader>
            <CardTitle>Tasks:</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-dashboard-red/20 text-dashboard-red rounded-md flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>STUDENTS</span>
              </div>
              <div className="px-4 py-2 bg-dashboard-blue/20 text-dashboard-blue rounded-md flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span>CURRICULUM</span>
              </div>
              <div className="px-4 py-2 bg-dashboard-green/20 text-dashboard-green rounded-md flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>COURSES</span>
              </div>
            </div>
            
            {/* Task List */}
            <div className="space-y-2">
              <div className="flex items-center p-3 bg-white/40 dark:bg-white/5 rounded-md">
                <input type="checkbox" className="mr-3" id="task1" />
                <label htmlFor="task1" className="flex-1">Review student performance data</label>
                <button className="text-muted-foreground hover:text-primary">✏️</button>
                <button className="ml-2 text-muted-foreground hover:text-destructive">❌</button>
              </div>
              <div className="flex items-center p-3 bg-white/40 dark:bg-white/5 rounded-md">
                <input type="checkbox" className="mr-3" id="task2" checked />
                <label htmlFor="task2" className="flex-1 line-through">Prepare quarterly analytics report</label>
                <button className="text-muted-foreground hover:text-primary">✏️</button>
                <button className="ml-2 text-muted-foreground hover:text-destructive">❌</button>
              </div>
              <div className="flex items-center p-3 bg-white/40 dark:bg-white/5 rounded-md">
                <input type="checkbox" className="mr-3" id="task3" />
                <label htmlFor="task3" className="flex-1">Update prediction algorithm with new variables</label>
                <button className="text-muted-foreground hover:text-primary">✏️</button>
                <button className="ml-2 text-muted-foreground hover:text-destructive">❌</button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
