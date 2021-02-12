import { Company } from './company';
import { Student } from './student';

export class StudentEvent{
    id: number;
    date: Date;
    text: string;
    company: Company;
    student:Student;
}