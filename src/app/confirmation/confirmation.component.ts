import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalFunctionsService } from '../services/global-functions.service';
import { Order } from '../bll/order';
import { Course } from '../bll/course';
import { Student } from '../bll/student';
import { EnrolService } from '../services/enrol.service';
import { AppConfig } from '../app.config';

@Component({
  moduleId: module.id,
  selector: 'fo-confirmation',
  templateUrl: './confirmation.component.html',
  providers: [EnrolService]
})

export class ConfirmationComponent implements OnInit {

  order: Order;
  course: Course;
  conditionsUrl: string;
  conditionsAgreed: boolean;
  studentsList: Student[];
  isClickedOnce = false;

  constructor(private globalFunctionsService: GlobalFunctionsService,
              private enrolService: EnrolService,
              private config: AppConfig,
              private router: Router) {
    this.conditionsUrl = config.getConfig('termsUrl');
    this.globalFunctionsService.showBasket(false);
    this.globalFunctionsService.showTabs(true);
  }

  ngOnInit(): void {
    this.order = this.globalFunctionsService.getOrder();
    this.course = this.globalFunctionsService.getSelectedCourse();

    // Fill Students-List
    if (!this.studentsList) {
      this.studentsList = [];
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
      student.DateOfBirth = this.order.ContactPerson.DateOfBirth;

      // Add Contact to Students Array
      this.studentsList.splice(0, 0, student);
    }

    for (const s of this.order.Students) {
      this.studentsList.splice(0, 0, s);
    }
  }

  previousTab(): void {
    // Redirect
    // TODO: Animate
    window.scrollTo(0, 0);
    this.router.navigate(['payment'], {queryParamsHandling: 'merge'});
  }

  saveInfo(isValid: boolean): void {
    if (isValid && !this.isClickedOnce) {
      this.isClickedOnce = true;

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

        // Save Order
        this.enrolService.create(copiedOrder)
          .then(() => {
            this.globalFunctionsService.updateOrder(copiedOrder);

            // Show Summary
            this.globalFunctionsService.enableTabs(4);
            // Redirect
            // TODO: Animate
            window.scrollTo(0, 0);
            this.router.navigate(['thanks'], {queryParamsHandling: 'merge'});
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
}
