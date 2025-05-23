
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Student {
  id: string;
  name: string;
  year: string;
  predictedPerformance: number;
  status: 'At Risk' | 'Warning' | 'Good' | 'Excellent';
  lastAssessment: string;
}

const students: Student[] = [
  
  {
    id: '3',
    name: 'Renuja Sathnidu',
    year: 'Year 3',
    predictedPerformance: 65,
    status: 'Warning',
    lastAssessment: '1 week ago',
  },
  {
    id: '4',
    name: 'Anujaya Jayanath',
    year: 'Year 2',
    predictedPerformance: 45,
    status: 'At Risk',
    lastAssessment: '5 days ago',
  },
  
];

export const getStatusColor = (status: Student['status']) => {
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

const StudentTable = () => {
  return (
    <Card className="col-span-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Students Requiring Attention</CardTitle>
        <Button variant="outline">View All</Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Year</TableHead>
                <TableHead className="text-right">Predicted Score</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Assessment</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.year}</TableCell>
                  <TableCell className="text-right">{student.predictedPerformance}%</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(student.status)} variant="outline">
                      {student.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{student.lastAssessment}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentTable;
