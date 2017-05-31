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
    IsFull: boolean;
    CourseDays: CourseDay[];    
}