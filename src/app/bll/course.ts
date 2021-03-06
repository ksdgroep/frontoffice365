import { CourseDay } from './courseday';

export class Course {
  Id: number;
  Date: Date;
  Code: string;
  Name: string;
  Region: string;
  Price: number;
  Duration: number;
  DurationType: string;
  DurationInfo: string;
  AvailableSeats: number;
  IsFull: boolean;
  CourseDays: CourseDay[];
  TemplateId: number;
}
