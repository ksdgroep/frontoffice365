import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Order } from '../bll/order';
import { ContactPerson } from '../bll/contactperson';
import { Company } from '../bll/company';
import { Country } from '../bll/country';
import { Student } from '../bll/student';
import { Course } from '../bll/course';
import { CountryService } from '../services/country.service';
import { GlobalFunctionsService } from '../services/global-functions.service';
import { EnrolService } from '../services/enrol.service';

@Component({
    moduleId: module.id,
    selector: 'fo-paymentinfo',
    templateUrl: './paymentinfo.component.html',
    providers: [CountryService, EnrolService]
})

export class PaymentinfoComponent implements OnInit, OnDestroy {
    constructor(
        private countryService: CountryService,
        private globalFunctionsService: GlobalFunctionsService,
        private enrolService: EnrolService
    ) {
        this.subscription = this.globalFunctionsService.orderUpdated().subscribe(order => this.order = order);
        this.subscriptionCourse = this.globalFunctionsService.selectedCourseUpdated().subscribe(course => this.course = course);
    }
    
    subscription: Subscription;
    subscriptionCourse: Subscription;
    order: Order;
    alternativeBillingAddress: boolean;
    countries: Country[];
    conditionsAgreed: boolean;
    course: Course;

    getCountries(): void {
        this.countryService.getCountries().then(countries => this.countries = countries);
    }

    saveInfo(isValid: boolean): void {
        if (isValid) {
            console.debug("Info Saved.");

            try {

                // Create Correct Order-Message
                if (!this.order.Company.Name) {
                    // Clear Company
                    this.order.Company = null;
                }
                if (!this.order.InvoiceCompany.Name) {
                    // Clear Invoice Company
                    this.order.InvoiceCompany = null;
                }
                else {
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
                    let student = new Student();
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
                    if (!this.order.Students)
                        this.order.Students = [];
                    this.order.Students.splice(0, 0, student);
                }

                // Set Course for Students
                this.order.Students.forEach(student => {
                    student.CourseId = this.course.Id;
                });

                // Save Order
                console.debug(JSON.stringify(this.order));

                this.enrolService.create(this.order)
                    .then(response => {
                        this.globalFunctionsService.updateOrder(this.order);

                        // Show Summary
                        this.globalFunctionsService.enableTabs(4);
                        this.globalFunctionsService.activateTab('signupConfirmed');
                    })
                    .catch(response => {
                        console.debug('Save Failed');
                        this.globalFunctionsService.enableTabs(4);
                        this.globalFunctionsService.activateTab('signupFailed');
                    });
            } catch (error) {
                this.globalFunctionsService.enableTabs(4);
                this.globalFunctionsService.activateTab('signupFailed');
            }    
        }
        else
            console.debug("Not Valid!");
    }
    
    previousTab(): void {
        this.globalFunctionsService.activateTab('contactInfo');
    }
    
    ngOnInit(): void {
        this.getCountries();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        this.subscriptionCourse.unsubscribe();
    }
}