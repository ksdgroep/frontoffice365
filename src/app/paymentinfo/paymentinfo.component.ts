import { Component, OnInit, ViewChild } from '@angular/core';

import { Order } from '../bll/order';
import { Country } from '../bll/country';
import { Student } from '../bll/student';
import { Course } from '../bll/course';
import { CountryService } from '../services/country.service';
import { GlobalFunctionsService } from '../services/global-functions.service';
import { EnrolService } from '../services/enrol.service';
import { Router } from '@angular/router';
import { AppConfig } from '../app.config';
import { PostalCodeService } from '../services/postalcode.service';
import { CanComponentDeactivate } from '../validation.guard';

@Component({
  moduleId: module.id,
  selector: 'fo-paymentinfo',
  templateUrl: './paymentinfo.component.html',
  providers: [CountryService, EnrolService, PostalCodeService]
})

export class PaymentinfoComponent implements OnInit, CanComponentDeactivate {

  order: Order;
  countries: Country[];
  conditionsAgreed: boolean;
  conditionsUrl: string;
  course: Course;
  formDeactivationCheck = false;

  @ViewChild('contactForm') form;

  constructor(private countryService: CountryService,
              private globalFunctionsService: GlobalFunctionsService,
              private enrolService: EnrolService,
              private postalCodeService: PostalCodeService,
              private config: AppConfig,
              private router: Router) {
    this.conditionsUrl = config.getConfig('termsUrl');
  }

  getCountries(): void {
    this.countryService.getCountries().then(countries => this.countries = countries);
  }

  saveInfo(isValid: boolean): void {
    if (isValid) {
      try {
        // Create Correct Order-Message
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
          student.DateOfBirth = this.order.ContactPerson.DateOfBirth;

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

        // Create Copy for clean-up purpose
        const copiedOrder = Object.assign({}, this.order);

        // Create Correct Order-Message
        if (!copiedOrder.Company.Name) {
          // Clear Company
          copiedOrder.Company = null;
        } else {
          // Copy Address to Company
          copiedOrder.Company.PostalCode = this.order.ContactPerson.PostalCode;
          copiedOrder.Company.AddressNumber = this.order.ContactPerson.AddressNumber;
          copiedOrder.Company.Address = this.order.ContactPerson.Address;
          copiedOrder.Company.City = this.order.ContactPerson.City;
          copiedOrder.Company.CountryId = this.order.ContactPerson.CountryId;
          // Clear ContactPerson Address
          copiedOrder.ContactPerson.PostalCode = null;
          copiedOrder.ContactPerson.AddressNumber = null;
          copiedOrder.ContactPerson.Address = null;
          copiedOrder.ContactPerson.City = null;
          copiedOrder.ContactPerson.CountryId = 'NL';
        }
        if (!copiedOrder.InvoiceCompany.Name) {
          // Clear Invoice Company
          copiedOrder.InvoiceCompany = null;
        } else {
          // Copy Address to Invoice Company
          copiedOrder.InvoiceCompany.Address = this.order.InvoicePerson.Address;
          copiedOrder.InvoiceCompany.AddressNumber = this.order.InvoicePerson.AddressNumber;
          copiedOrder.InvoiceCompany.PostalCode = this.order.InvoicePerson.PostalCode;
          copiedOrder.InvoiceCompany.City = this.order.InvoicePerson.City;
          copiedOrder.InvoiceCompany.CountryId = this.order.InvoicePerson.CountryId;
          // Clear InvoicePerson Address
          copiedOrder.InvoicePerson.Address = null;
          copiedOrder.InvoicePerson.AddressNumber = null;
          copiedOrder.InvoicePerson.PostalCode = null;
          copiedOrder.InvoicePerson.City = null;
          copiedOrder.InvoicePerson.CountryId = 'NL';
        }
        if (!copiedOrder.InvoicePerson.Surname) {
          // Clear Invoice Person
          copiedOrder.InvoicePerson = null;
        }

        console.log(JSON.stringify(copiedOrder));

        // Save Order
        this.enrolService.create(copiedOrder)
          .then(() => {
            this.globalFunctionsService.updateOrder(copiedOrder);

            // Show Summary
            this.globalFunctionsService.enableTabs(4);
            // Redirect
            // TODO: Animate
            window.scrollTo(0, 0);
            this.router.navigate(['confirm'], {queryParamsHandling: 'merge'});
          })
          .catch(() => {
            this.globalFunctionsService.enableTabs(4);
            // Redirect
            // TODO: Animate
            window.scrollTo(0, 0);
            this.router.navigate(['error'], {queryParamsHandling: 'merge'});
          });
      } catch (error) {
        this.globalFunctionsService.enableTabs(4);
        // Redirect
        // TODO: Animate
        window.scrollTo(0, 0);
        this.router.navigate(['error'], {queryParamsHandling: 'merge'});
      }
    }
  }

  previousTab(): void {
    // Redirect
    // TODO: Animate
    window.scrollTo(0, 0);
    this.router.navigate(['students'], {queryParamsHandling: 'merge'});
  }

  ngOnInit(): void {
    this.getCountries();
    this.order = this.globalFunctionsService.getOrder();
    this.course = this.globalFunctionsService.getSelectedCourse();
  }

  getAddress(): void {
    this.postalCodeService.getAddress(this.order.InvoicePerson.PostalCode, this.order.InvoicePerson.AddressNumber)
      .then(address => {
        this.order.InvoicePerson.Address = address.Street;
        this.order.InvoicePerson.City = address.City;
      })
      .catch(() => {
        // Ignore Errors.
      });
  }

  createFullName(gender: string, initials: string, middleName: string, surname: string, includeTav: boolean): string {
    let fullName = includeTav ? 'T.a.v. ' : '';

    if (gender) {
      if (gender === 'M') {
        fullName += includeTav ? 'de heer ' : 'De heer ';
      } else {
        fullName += includeTav ? 'mevrouw ' : 'Mevrouw ';
      }
    }

    if (initials) {
      fullName += initials + ' ';
    }

    if (middleName) {
      fullName += middleName + ' ';
    }

    if (surname) {
      fullName += surname;
    }

    return fullName;
  }

  canDeactivate(): boolean {
    this.formDeactivationCheck = true;
    return this.form.valid;
  }
}
