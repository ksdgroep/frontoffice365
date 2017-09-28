import { ContactPerson } from './contactperson';
import { Company } from './company';
import { Student } from './student';

export class Order {
  OrderType: string;
  InvoiceReference: string;
  ContactPerson: ContactPerson;
  Company: Company;
  InvoicePerson: ContactPerson;
  InvoiceCompany: Company;
  Students: Student[];
  Remarks: string;
  FirstStudentIsContact: boolean;
  AlternateInvoiceAddress: boolean;
  MultipleStudents: boolean;
}
