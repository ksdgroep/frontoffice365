import { Component, OnInit } from '@angular/core';

import { Order } from '../bll/order';
import { Country } from '../bll/country';
import { Student } from '../bll/student';
import { Course } from '../bll/course';
import { CountryService } from '../services/country.service';
import { GlobalFunctionsService } from '../services/global-functions.service';
import { EnrolService } from '../services/enrol.service';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'fo-paymentinfo',
    templateUrl: './paymentinfo.component.html',
    providers: [CountryService, EnrolService]
})

export class PaymentinfoComponent implements OnInit {

  order: Order;
  alternativeBillingAddress: boolean;
  countries: Country[];
  conditionsAgreed: boolean;
  course: Course;

  constructor(private countryService: CountryService,
              private globalFunctionsService: GlobalFunctionsService,
              private enrolService: EnrolService,
              private router: Router) {}

  getCountries(): void {
    this.countryService.getCountries().then(countries => this.countries = countries);
  }

  saveInfo(isValid: boolean): void {
    if (isValid) {
      try {
        // Create Correct Order-Message
        if (!this.order.Company.Name) {
          // Clear Company
          this.order.Company = null;
        }
        if (!this.order.InvoiceCompany.Name) {
          // Clear Invoice Company
          this.order.InvoiceCompany = null;
        } else {
          // Copy Address to Invoice Company
          this.order.InvoiceCompany.Address = this.order.InvoicePerson.Address;
          this.order.InvoiceCompany.AddressNumber = this.order.InvoicePerson.AddressNumber;
          this.order.InvoiceCompany.PostalCode = this.order.InvoicePerson.PostalCode;
          this.order.InvoiceCompany.City = this.order.InvoicePerson.City;
          this.order.InvoiceCompany.CountryId = this.order.InvoicePerson.CountryId;
        }
        if (!this.order.InvoicePerson.Surname) {
          // Clear Invoice Person
          this.order.InvoicePerson = null;
        }
        if (this.order.FirstStudentIsContact) {
          // Create Student from Contact
          const student = new Student();
          student.FirstName = this.order.ContactPerson.FirstName;
          student.Initials = this.order.ContactPerson.Initials;
          student.Surname = this.order.ContactPerson.Surname;
          student.MiddleName = this.order.ContactPerson.MiddleName;
          student.Gender = this.order.ContactPerson.Gender;
          student.Email = this.order.ContactPerson.Email;
          student.Phone = this.order.ContactPerson.Phone;
          student.Address = this.order.ContactPerson.Address;
          student.AddressNumber = this.order.ContactPerson.AddressNumber;
          student.PostalCode = this.order.ContactPerson.PostalCode;
          student.City = this.order.ContactPerson.City;
          student.CountryId = this.order.ContactPerson.CountryId;

          // Add Contact to Students Array
          if (!this.order.Students) {
            this.order.Students = [];
          }
          this.order.Students.splice(0, 0, student);
        }

        // Set Course for Students
        this.order.Students.forEach(student => {
          student.CourseId = this.course.Id;
        });

        // Save Order
        this.enrolService.create(this.order)
          .then(() => {
            this.globalFunctionsService.updateOrder(this.order);

            // Show Summary
            this.globalFunctionsService.enableTabs(4);
            // Redirect
            // TODO: Animate
            window.scrollTo(0, 0);
            this.router.navigate(['confirm'], { queryParamsHandling: 'merge' });
          })
          .catch(() => {
            this.globalFunctionsService.enableTabs(4);
            // Redirect
            // TODO: Animate
            window.scrollTo(0, 0);
            this.router.navigate(['error'], { queryParamsHandling: 'merge' });
          });
      } catch (error) {
        this.globalFunctionsService.enableTabs(4);
        // Redirect
        // TODO: Animate
        window.scrollTo(0, 0);
        this.router.navigate(['error'], { queryParamsHandling: 'merge' });
      }
    }
  }

  previousTab(): void {
    // Redirect
    // TODO: Animate
    window.scrollTo(0, 0);
    this.router.navigate(['payment'], { queryParamsHandling: 'merge' });
  }

  ngOnInit(): void {
    this.getCountries();
    this.order = this.globalFunctionsService.getOrder();
    this.course = this.globalFunctionsService.getSelectedCourse();
  }
}
