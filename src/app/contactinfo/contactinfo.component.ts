import { Component, OnInit, ViewChild } from '@angular/core';

import { Country } from '../bll/country';
import { CountryService } from '../services/country.service';
import { Order } from '../bll/order';
import { Company } from '../bll/company';
import { Person } from '../bll/person';
import { GlobalFunctionsService } from '../services/global-functions.service';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../validation.guard';
import { PostalCodeService } from '../services/postalcode.service';
import { environment } from '../../environments/environment';

export class ClientCheck {
  public static get ClientCode(): string {
    return environment.clientCode;
  }
}

@Component({
  moduleId: module.id,
  selector: 'fo-contactinfo',
  templateUrl: ClientCheck.ClientCode === 'gt'
    ? './contactinfo.component.gt.html'
    : './contactinfo.component.html',
  providers: [CountryService, PostalCodeService]
})

export class ContactinfoComponent implements OnInit, CanComponentDeactivate {

  countries: Country[];
  seatsAvailable = 0;
  formDeactivationCheck = false;

  order: Order = new Order();

  @ViewChild('contactForm') form;

  constructor(private countryService: CountryService,
              private globalFunctionsService: GlobalFunctionsService,
              private postalCodeService: PostalCodeService,
              private router: Router) {
    this.globalFunctionsService.showBasket(true);
    this.globalFunctionsService.showTabs(true);
  }

  getCountries(): void {
    this.countryService.getCountries().then(countries => this.countries = countries);
  }

  toggleSelf(): void {
    this.globalFunctionsService.updateStudentCount((this.order.Students ? this.order.Students.length : 0) + (this.order.FirstStudentIsContact ? 1 : 0));
  }

  toggleStudents(): void {
    if (this.order.MultipleStudents) {
      const student = new Person();
      student.CountryId = 'NL';
      this.order.Students = [student];
      this.globalFunctionsService.updateStudentCount(this.order.Students.length + (this.order.FirstStudentIsContact ? 1 : 0));
    } else {
      this.order.Students = [];
      this.globalFunctionsService.updateStudentCount(this.order.Students.length + (this.order.FirstStudentIsContact ? 1 : 0));
    }
  }

  addStudent(): void {
    if ((this.seatsAvailable - (this.order.Students.length + (this.order.FirstStudentIsContact ? 1 : 0))) > 0 && environment.clientCode !== 'gt') {
      const student = new Person();
      student.CountryId = 'NL';
      this.order.Students.push(student);

      this.globalFunctionsService.updateStudentCount(this.order.Students.length + (this.order.FirstStudentIsContact ? 1 : 0));
    }
  }

  removeStudent(student: Person): void {
    this.order.Students = this.order.Students.filter(s => s !== student);
    this.order.MultipleStudents = this.order.Students.length > 0;

    this.globalFunctionsService.updateStudentCount(this.order.Students.length + (this.order.FirstStudentIsContact ? 1 : 0));
  }

  saveInfo(isValid: boolean): void {
    if (isValid) {
      this.globalFunctionsService.updateOrder(this.order);
      this.globalFunctionsService.enableTabs(3);

      // Redirect
      // TODO: Animate
      window.scrollTo(0, 0);
      this.router.navigate(['payment'], {queryParamsHandling: 'merge'});
    }
  }

  previousTab(): void {
    // Redirect
    // TODO: Animate
    window.scrollTo(0, 0);
    this.router.navigate(['courses'], {queryParamsHandling: 'merge'});
  }

  ngOnInit(): void {
    this.order = this.globalFunctionsService.getOrder();
    if (!this.order) {
      // Initial Values
      this.order = new Order();
      this.order.OrderType = environment.clientCode === 'gt' ? 'Company' : 'Private';
      this.order.ContactPerson = new Person();
      this.order.ContactPerson.CountryId = 'NL';
      this.order.Company = new Company();
      this.order.Company.CountryId = 'NL';
      this.order.InvoicePerson = new Person();
      this.order.InvoicePerson.CountryId = 'NL';
      this.order.InvoiceCompany = new Company();
      this.order.InvoiceCompany.CountryId = 'NL';
      this.order.Students = [];

      // Update Storage
      this.globalFunctionsService.updateOrder(this.order);
    }

    this.getCountries();

    // Available Seats
    this.seatsAvailable = this.globalFunctionsService.getSelectedCourse().AvailableSeats;
  }

  canDeactivate(): boolean {
    this.formDeactivationCheck = true;
    return this.form.valid && (this.order.FirstStudentIsContact || this.order.MultipleStudents);
  }

  getAddress(): void {
    this.postalCodeService.getAddress(this.order.ContactPerson.PostalCode, this.order.ContactPerson.AddressNumber)
      .then(address => {
        this.order.ContactPerson.Address = address.Street;
        this.order.ContactPerson.City = address.City;
      })
      .catch(() => {
        // Ignore Errors.
      });
  }

  getStudentAddress(student: Person): void {
    this.postalCodeService.getAddress(student.PostalCode, student.AddressNumber)
      .then(address => {
        student.Address = address.Street;
        student.City = address.City;
      })
      .catch(() => {
        // Ignore Errors.
      });
  }
}
