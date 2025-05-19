
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Mail, Phone, Award, BookOpen } from 'lucide-react';

const lecturers = [
  {
    id: 1,
    name: 'Dr. Rasika Rajapaksha',
    department: 'Computer Science',
    specialization: 'Mathematics for Technology',
    email: 'rasikar@kln.ac.lk',
    phone: '(555) 123-4567',
    courses: ['Mathematics for Technology I',
      'Mathematics for Technology II',
      'Mathematics for Technology III',
      'Mathematics for Computer Science II',
      'Time Series Analysis for Data Science'],
    awards: 2
  },
  {
    id: 2,
    name: 'Mr. L. Akash Tharuka',
    department: 'Computer Science',
    specialization: 'Computer networking',
    email: 'akasht@kln.ac.lk',
    phone: '(555) 234-5678',
    courses: ['Networking I'],
    awards: 1
  },
  {
    id: 3,
    name: 'Prof. N. G. J. Dias',
    department: 'Computer Science',
    specialization: 'Applied Mathematics',
    email: 'ngjdias@kln.ac.lk',
    phone: '(555) 345-6789',
courses: [
  'Data Structures and Algorithms',
  'Computer Graphics',
  'Data Communication and Networks',
  'Computer Architecture and Organization',
  'Multimedia Systems Development',
  'Cyber Security',
  'Formal Methods and Software Verification',
  'Deductive Reasoning and Logic Programming',
  'Theory of Automata',
  'Theory of Computability and Complexity',
  'Wireless Communication',
  'Visual Programming'
],
    awards: 3
  },
  
];

const Lecturers = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">University Lecturers</h1>
        <p className="text-muted-foreground">Manage and view information about the university's faculty</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-dashboard-blue" />
          <span className="font-medium text-lg">Total Lecturers: {lecturers.length}</span>
        </div>
        <Button className="bg-dashboard-blue hover:bg-dashboard-blue/80 text-white">Add New Lecturer</Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {lecturers.map((lecturer) => (
          <Card key={lecturer.id} className="glass-card hover-scale-subtle overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-64 bg-gradient-to-br from-dashboard-blue/10 to-dashboard-purple/10 p-6 flex flex-col items-center justify-center">
                  <div className="w-24 h-24 bg-dashboard-blue/20 rounded-full flex items-center justify-center mb-4">
                    <Users size={40} className="text-dashboard-blue" />
                  </div>
                  <h3 className="font-bold text-xl mb-1">{lecturer.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{lecturer.department}</p>
                  <Badge variant="outline" className="bg-dashboard-blue/10 text-dashboard-blue">
                    {lecturer.specialization}
                  </Badge>
                </div>
                
                <div className="flex-1 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-dashboard-blue" />
                      <span>{lecturer.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-dashboard-blue" />
                      <span>{lecturer.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-dashboard-orange" />
                      <span>{lecturer.awards} Academic Awards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-dashboard-green" />
                      <span>{lecturer.courses.length} Courses</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Courses Teaching:</h4>
                    <div className="flex flex-wrap gap-2">
                      {lecturer.courses.map((course) => (
                        <Badge key={course} variant="secondary" className="bg-gray-100 dark:bg-gray-800">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-6">
                    <Button variant="outline" size="sm" className="mr-2">View Profile</Button>
                    
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Lecturers;
