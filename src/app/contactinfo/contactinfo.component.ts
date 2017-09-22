import { Component, OnInit } from '@angular/core';

import { Country } from '../bll/country';
import { CountryService } from '../services/country.service';
import { Order } from '../bll/order';
import { ContactPerson } from '../bll/contactperson';
import { Company } from '../bll/company';
import { Student } from '../bll/student';
import { GlobalFunctionsService } from '../services/global-functions.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'fo-contactinfo',
    templateUrl: './contactinfo.component.html',
    providers: [CountryService]
})

export class ContactinfoComponent implements OnInit {

  countries: Country[];
  addMultipleStudents = false;

  order: Order = new Order();

  constructor(private countryService: CountryService,
              private globalFunctionsService: GlobalFunctionsService,
              private router: Router) {
  }

  getCountries(): void {
    this.countryService.getCountries().then(countries => this.countries = countries);
  }

  toggleSelf(): void {
    this.globalFunctionsService.updateStudentCount((this.order.Students ? this.order.Students.length : 0) + (this.order.FirstStudentIsContact ? 1 : 0));
  }

  toggleStudents(): void {
    if (this.addMultipleStudents) {
      const student = new Student();
      student.CountryId = 'NL';
      this.order.Students = [student];
      this.globalFunctionsService.updateStudentCount(this.order.Students.length + (this.order.FirstStudentIsContact ? 1 : 0));
    } else {
      this.order.Students = [];
      this.globalFunctionsService.updateStudentCount(this.order.Students.length + (this.order.FirstStudentIsContact ? 1 : 0));
    }
  }

  addStudent(): void {
    const student = new Student();
    student.CountryId = 'NL';
    this.order.Students.push(student);

    this.globalFunctionsService.updateStudentCount(this.order.Students.length + (this.order.FirstStudentIsContact ? 1 : 0));
  }

  removeStudent(student: Student): void {
    this.order.Students = this.order.Students.filter(s => s !== student);
    this.addMultipleStudents = this.order.Students.length > 0;

    this.globalFunctionsService.updateStudentCount(this.order.Students.length + (this.order.FirstStudentIsContact ? 1 : 0));
  }

  saveInfo(isValid: boolean): void {
    if (isValid) {
      this.globalFunctionsService.updateOrder(this.order);
      this.globalFunctionsService.enableTabs(3);
      // this.globalFunctionsService.activateTab('paymentInfo');

      // Redirect
      // TODO: Animate
      window.scrollTo(0, 0);
      this.router.navigate(['payment'], { queryParamsHandling: 'merge' });
    }
  }

  previousTab(): void {
    // this.globalFunctionsService.activateTab('courseSelect');
    // Redirect
    // TODO: Animate
    window.scrollTo(0, 0);
    this.router.navigate(['courses'], { queryParamsHandling: 'merge' });
  }

  ngOnInit(): void {
    // Initial Values
    this.order.OrderType = 'Private';
    this.order.ContactPerson = new ContactPerson();
    this.order.ContactPerson.CountryId = 'NL';
    this.order.Company = new Company();
    this.order.Company.CountryId = 'NL';
    this.order.InvoicePerson = new ContactPerson();
    this.order.InvoicePerson.CountryId = 'NL';
    this.order.InvoiceCompany = new Company();
    this.order.InvoiceCompany.CountryId = 'NL';

    this.getCountries();
  }

  getPostalCode(code: string, number: number): void {

  }
}
