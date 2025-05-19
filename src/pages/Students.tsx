
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  year: string;
  predictedPerformance: number;
  status: 'At Risk' | 'Warning' | 'Good' | 'Excellent';
  lastAssessment: string;
  email: string;
}

const students: Student[] = [
  {
    id: '1',
    name: 'Emma Johnson',
    year: 'Year 2',
    predictedPerformance: 92,
    status: 'Excellent',
    lastAssessment: '2 days ago',
    email: 'emma.j@university.edu',
  },
  {
    id: '2',
    name: 'James Wilson',
    year: 'Year 1',
    predictedPerformance: 78,
    status: 'Good',
    lastAssessment: '3 days ago',
    email: 'j.wilson@university.edu',
  },
  {
    id: '3',
    name: 'Sophia Brown',
    year: 'Year 3',
    predictedPerformance: 65,
    status: 'Warning',
    lastAssessment: '1 week ago',
    email: 'sophia.b@university.edu',
  },
  {
    id: '4',
    name: 'Liam Garcia',
    year: 'Year 2',
    predictedPerformance: 45,
    status: 'At Risk',
    lastAssessment: '5 days ago',
    email: 'l.garcia@university.edu',
  },
  {
    id: '5',
    name: 'Olivia Martinez',
    year: 'Year 1',
    predictedPerformance: 88,
    status: 'Good',
    lastAssessment: '1 day ago',
    email: 'o.martinez@university.edu',
  },
  {
    id: '6',
    name: 'Noah Thompson',
    year: 'Year 3',
    predictedPerformance: 72,
    status: 'Good',
    lastAssessment: '4 days ago',
    email: 'noah.t@university.edu',
  },
  {
    id: '7',
    name: 'Charlotte Davis',
    year: 'Year 2',
    predictedPerformance: 56,
    status: 'Warning',
    lastAssessment: '2 days ago',
    email: 'c.davis@university.edu',
  },
  {
    id: '8',
    name: 'Ethan Anderson',
    year: 'Year 1',
    predictedPerformance: 94,
    status: 'Excellent',
    lastAssessment: '3 days ago',
    email: 'e.anderson@university.edu',
  },
  {
    id: '9',
    name: 'Ava Rodriguez',
    year: 'Year 3',
    predictedPerformance: 41,
    status: 'At Risk',
    lastAssessment: '1 week ago',
    email: 'ava.r@university.edu',
  },
  {
    id: '10',
    name: 'Lucas Thomas',
    year: 'Year 2',
    predictedPerformance: 83,
    status: 'Good',
    lastAssessment: '2 days ago',
    email: 'l.thomas@university.edu',
  }
];

const getStatusColor = (status: Student['status']) => {
  switch (status) {
    case 'At Risk':
      return 'bg-red-100 text-red-800';
    case 'Warning':
      return 'bg-orange-100 text-orange-800';
    case 'Good':
      return 'bg-green-100 text-green-800';
    case 'Excellent':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const Students = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Students</h1>
        <p className="text-muted-foreground">Manage and view student performance predictions</p>
      </div>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle>Student List</CardTitle>
          <Button>Add New Student</Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search students..." className="pl-10 w-full" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline">Export</Button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-center">Predicted Score</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Assessment</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.year}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell className="text-center">{student.predictedPerformance}%</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(student.status)} variant="outline">
                        {student.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{student.lastAssessment}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">View</Button>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-6 flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              Showing 10 of 125 students
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Students;
