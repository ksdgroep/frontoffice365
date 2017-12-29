import { Company } from './company';
import { Person } from './person';

export class Order {
  OrderType: string;
  InvoiceReference: string;
  ContactPerson: Person;
  Company: Company;
  InvoicePerson: Person;
  InvoiceCompany: Company;
  Students: Person[];
  Remarks: string;
  FirstStudentIsContact: boolean;
  AlternateInvoiceAddress: boolean;
  MultipleStudents: boolean;
  UserField8: string; 
  UserField9: string;
}
