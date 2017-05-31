import { Trainer } from './trainer';
import { Location } from './location';

export class CourseDay {
    Date: Date;
    TimeFrom: string;
    TimeTill: string;
    Description: string;
    Trainers: Trainer[];
    Locations: Location[];
}