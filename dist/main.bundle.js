webpackJsonp([1,4],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiUrl: 'http://api.viper365beta.nl',
    apiKey: 'A20EC0A0-F5F2-4499-96B0-10370A8E7854',
    contactEmail: 'info@ksdgroep.nl'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav nav-tabs\" role=\"tablist\">\n                <li role=\"presentation\" [class.active]=\"selectedTab == 'courseSelect'\" [class.disabled]=\"enabledTabCount == 4\">\n                    <a aria-controls=\"courseSelect\" role=\"tab\" (click)=\"selectTab('courseSelect')\">Stap 1: Inschrijven cursus\n                        <span class=\"sr-only\">(current)</span>\n                    </a>\n                </li>\n                <li role=\"presentation\" [class.active]=\"selectedTab == 'contactInfo'\" [class.disabled]=\"enabledTabCount < 2 || enabledTabCount == 4\">\n                    <a aria-controls=\"contactInfo\" role=\"tab\" (click)=\"selectTab('contactInfo')\">Stap 2: Contactgegevens</a>\n                </li>\n                <li role=\"presentation\" [class.active]=\"selectedTab == 'paymentInfo'\" [class.disabled]=\"enabledTabCount < 3 || enabledTabCount == 4\">\n                    <a aria-controls=\"paymentInfo\" role=\"tab\" (click)=\"selectTab('paymentInfo')\">Stap 3: Betaalgegevens</a>\n                </li>\n                <li role=\"presentation\" [class.active]=\"selectedTab == 'signupConfirmed' || selectedTab == 'signupFailed'\" [class.disabled]=\"enabledTabCount < 4\">\n                    <a aria-controls=\"signupConfirmed\" role=\"tab\" (click)=\"selectTab('signupConfirmed')\">Stap 4: Inschrijving voltooid</a>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container-fluid -->\n</nav>\n\n<div class=\"container course-selection\">\n    <div class=\"row\">\n        <!-- When hiding the sidebar give col-sm-12 to this container -->\n        <div class=\"col-xs-12 col-sm-7\" id=\"main-content\" [class.col-sm-7]=\"selectedTab != 'signupConfirmed' && selectedTab != 'signupFailed'\" [class.col-sm-12]=\"selectedTab == 'signupConfirmed' || selectedTab == 'signupFailed'\">\n            <div class=\"tab-content\">\n                <div [class.active]=\"selectedTab == 'courseSelect'\" role=\"tabpanel\" class=\"tab-pane fade in\" id=\"courseSelect\">\n                    <fo-courseselection></fo-courseselection>\n                </div>\n                <div [class.active]=\"selectedTab == 'contactInfo'\" role=\"tabpanel\" class=\"tab-pane fade in\" id=\"contactInfo\">\n                    <fo-contactinfo></fo-contactinfo>\n                </div>\n                <div [class.active]=\"selectedTab == 'paymentInfo'\" role=\"tabpanel\" class=\"tab-pane fade in\" id=\"paymentInfo\">\n                    <fo-paymentinfo></fo-paymentinfo>\n                </div>\n                <div [class.active]=\"selectedTab == 'signupConfirmed' || selectedTab == 'signupFailed'\" role=\"tabpanel\" class=\"tab-pane fade in\" id=\"signupConfirmed\">\n                    <fo-confirmation *ngIf=\"!errors\"></fo-confirmation>\n                    <div *ngIf=\"errors\">\n                        <h2>Uw inschrijving is niet voltooid</h2>\n                        <div class=\"form-group \">\n                            <label class=\"col-xs-12 col-sm-2 \">Er is iets misgegaan</label>\n                            <div class=\"col-xs-12 col-sm-10 \">\n                                <p>Ga terug naar stap 1 of neem <a href=\"mailto:{{providerContactMail}}\">contact</a> op met de cursus aanbieder.</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"hidden-xs col-sm-1\">\n            <!-- Spacing -->\n        </div>\n\n        <!-- Hide sidebar on tab 4 & 5 -->\n        <!-- When hiding the sidebar give col-sm-12 to the main content container (line 49)s -->\n        <div *ngIf=\"selectedTab != 'signupConfirmed' && selectedTab != 'signupFailed'\" class=\"col-xs-12 col-sm-3\">\n            <fo-basket></fo-basket>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-container\">\n    <h4>Uw keuze</h4>\n    <ul *ngIf=\"selectedCourse\">\n        <li class=\"sidebar-item-title\">Geselecteerde cursus</li>\n        <li>{{selectedCourse.Name}}</li>\n        <br/>\n        <li class=\"sidebar-item-title\">Startdatum</li>\n        <li>{{selectedCourse.Date | date: 'dd-MM-yyyy' }}</li>\n        <br/>\n        <li class=\"sidebar-item-title\">Regio</li>\n        <li>{{selectedCourse.Region}}</li>\n        <br/>\n        <li class=\"sidebar-item-title\">Lesdagen</li>\n        <li *ngFor=\"let courseDay of selectedCourse.CourseDays\">{{courseDay.Date | dutchDateFormat }} <span>{{courseDay.TimeFrom}} - {{courseDay.TimeTill}}</span></li>\n        <br/>\n        <li class=\"sidebar-item-title\">Prijs van uw cursus</li>\n        <li>{{selectedCourse.Price * (studentCount == 0 ? 1 : studentCount) | currencyFormat}} <span>excl. BTW</span></li>\n        <br/>\n        <li class=\"sidebar-item-title\">Aantal deelnemers</li>\n        <li>{{studentCount}}</li>\n    </ul>\n    <ul *ngIf=\"!selectedCourse\">\n        <li>U heeft nog geen cursus geselecteerd.</li>\n        <br/>\n        <li>Selecteer een cursus om verder te gaan</li>\n    </ul>\n</div>"

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = "<h2>Uw inschrijving</h2>\n<div class=\"col-xs-12 col-sm-6\">\n    <div class=\"form-group\">\n        <label class=\"col-xs-12 col-sm-3 control-label\">Hartelijk dank</label>\n        <div class=\"col-xs-12 col-sm-9\">\n            <p>U ontvangt een e-mail ter bevestiging.</p>\n            <br/>\n            <p>Uw inschrijving is voltooid voor de cursus:</p>\n            <p class=\"signupConfirmedTitle\">{{course?.Name}}</p>\n            <p class=\"signupConfirmedTitle\">Startdatum</p>\n            <p class=\"signupConfirmedContent\">{{course?.Date | dutchDateFormat }}</p>\n            <p class=\"signupConfirmedTitle\">Regio</p>\n            <p class=\"signupConfirmedContent\">{{course?.Region}}</p>\n            <p class=\"signupConfirmedTitle\">Lesdagen</p>\n            <ul class=\"signupConfirmedDayList\">\n                <li *ngFor=\"let courseDay of course?.CourseDays\">{{courseDay.Date | dutchDateFormat }} <span>{{courseDay.TimeFrom}} - {{courseDay.TimeTill}}</span></li>\n            </ul>\n        </div>\n    </div>\n</div>\n<div class=\"col-xs-12 col-sm-6\">\n    <p>De volgende deelnemers hebben zich ingeschreven:</p>\n    <br/>\n    <ul class=\"participants-list\" *ngFor=\"let student of order?.Students; let index = index\">\n        <li>Deelnemer {{index + 1}}</li>\n        <li>{{student.Initials}} {{student.Surname}}</li>\n        <li>{{student.Address}} {{student.AddressNumber}}</li>\n        <li>{{student.PostalCode}} {{student.City}}</li>\n        <li>{{student.Email}}</li>\n    </ul>\n</div>"

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"no-margin-bottom\">Contactgegevens</h2>\n<h4 class=\"subtitle\">Met wie mogen wij contact opnemen?</h4>\n<form class=\"form-horizontal\" data-toggle=\"validator\" (ngSubmit)=\"saveInfo(contactForm.valid)\" #contactForm=\"ngForm\">\n    <div class=\"form-group\" [class.has-error]=\"optionGender.errors && (optionGender.dirty || optionGender.touched || contactForm.submitted)\" [class.has-feedback]=\"optionGender.errors && (optionGender.dirty || optionGender.touched || contactForm.submitted)\">\n        <label class=\"col-xs-12 col-sm-3 col-md-3 control-label\">Aanhef</label>\n        <div class=\"col-xs-12 col-sm-4 col-md-7\">\n            <label class=\"radio-inline\">\n                <input type=\"radio\" name=\"optionGender\" value=\"V\" [(ngModel)]=\"order.ContactPerson.Gender\" required #optionGender=\"ngModel\"> Mevrouw\n            </label>\n            <label class=\"radio-inline\">\n                <input type=\"radio\" name=\"optionGender\" value=\"M\" [(ngModel)]=\"order.ContactPerson.Gender\" required #optionGender=\"ngModel\"> De heer\n            </label>\n            <label *ngIf=\"optionGender.errors && (optionGender.dirty || optionGender.touched || contactForm.submitted)\" class=\"control-label\">Gelieve een aanhef te selecteren.</label>\n        </div>\n    </div>\n    <div class=\"form-group\" [class.has-error]=\"initials.errors && (initials.dirty || initials.touched || contactForm.submitted)\" [class.has-feedback]=\"initials.errors && (initials.dirty || initials.touched || contactForm.submitted)\">\n        <label for=\"initials\" class=\"col-xs-12 col-sm-3 control-label\">Voorletters</label>\n        <div class=\"col-xs-12 col-sm-6\">\n            <input type=\"text\" class=\"form-control \" id=\"initials\" name=\"initials\" [(ngModel)]=\"order.ContactPerson.Initials\" required #initials=\"ngModel\">\n            <span *ngIf=\"initials.errors && (initials.dirty || initials.touched || contactForm.submitted)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n            <label *ngIf=\"initials.errors && (initials.dirty || initials.touched || contactForm.submitted)\" class=\"control-label\">Voorletters zijn verpllicht.</label>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"firstName\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Voornaam<br/><span>Optioneel</span></label>\n        <div class=\"col-xs-12 col-sm-6\">\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" [(ngModel)]=\"order.ContactPerson.FirstName\">\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"middleName \" class=\"col-xs-12 col-sm-3 control-label optional-label\">Tussenvoegsel<br/><span>Optioneel</span></label>\n        <div class=\"col-xs-12 col-sm-6\">\n            <input type=\"text\" class=\"form-control\" id=\"middleName\" name=\"middleName\" [(ngModel)]=\"order.ContactPerson.MiddleName\">\n        </div>\n    </div>\n\n    <div class=\"form-group\" [class.has-error]=\"lastName.errors && (lastName.dirty || lastName.touched || contactForm.submitted)\" [class.has-feedback]=\"lastName.errors && (lastName.dirty || lastName.touched || contactForm.submitted)\">\n        <label for=\"lastName\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Achternaam</label>\n        <div class=\"col-xs-12 col-sm-6\">\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" [(ngModel)]=\"order.ContactPerson.Surname\" required #lastName=\"ngModel\">\n            <span *ngIf=\"lastName.errors && (lastName.dirty || lastName.touched || contactForm.submitted)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n            <label *ngIf=\"lastName.errors && (lastName.dirty || lastName.touched || contactForm.submitted)\" class=\"control-label\">Achternaam is verpllicht.</label>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label class=\"col-xs-12 col-sm-3 control-label\">Type inschrijving</label>\n        <div class=\"col-xs-12 col-sm-4 col-md-7\">\n            <label class=\"radio-inline\">\n                <input type=\"radio\" name=\"optionType\" value=\"Private\" [(ngModel)]=\"order.OrderType\"> Particulier\n            </label>\n            <label class=\"radio-inline\">\n                <input type=\"radio\" name=\"optionType\" value=\"Company\" [(ngModel)]=\"order.OrderType\"> Zakelijk\n            </label>\n        </div>\n    </div>\n\n    <!-- Zakelijke inschrijving -->\n\n    <div *ngIf=\"order.OrderType == 'Company'\" class=\"form-group\" [class.has-error]=\"companyName.errors && (companyName.dirty || companyName.touched || contactForm.submitted)\" [class.has-feedback]=\"companyName.errors && (companyName.dirty || companyName.touched || contactForm.submitted)\">\n        <label for=\"business\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Bedrijf</label>\n        <div class=\"col-xs-12 col-sm-6\">\n            <input type=\"text\" class=\"form-control\" id=\"business\" name=\"companyName\" [(ngModel)]=\"order.Company.Name\" required #companyName=\"ngModel\">\n            <span *ngIf=\"companyName.errors && (companyName.dirty || companyName.touched || contactForm.submitted)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n            <label *ngIf=\"companyName.errors && (companyName.dirty || companyName.touched || contactForm.submitted)\" class=\"control-label\">Bedrijfsnaam is verpllicht.</label>\n        </div>\n    </div>\n\n    <!-- -->\n\n    <div class=\"form-group\">\n        <label for=\"postalcodeBusiness\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Postcode<br/><span>Optioneel</span></label>\n        <div class=\"col-sm-6\">\n            <div class=\"form-group row\">\n                <div class=\"col-sm-5 col-xs-12 margin-bottom-15\">\n                    <input id=\"postalcodeBusiness\" type=\"text\" class=\"form-control\" name=\"postalCode\" [(ngModel)]=\"order.ContactPerson.PostalCode\">\n                </div>\n                <label for=\"numberBusiness\" class=\"col-xs-12 col-sm-3 control-label optional-label margin-bottom-15\">Nummer<br/><span>Optioneel</span></label>\n                <div class=\"col-sm-4 col-xs-12\">\n                    <input id=\"numberBusiness\" type=\"text\" class=\"form-control\" name=\"number\" [(ngModel)]=\"order.ContactPerson.AddressNumber\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"addressBusiness\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Straat<br/><span>Optioneel</span></label>\n        <div class=\"col-xs-12 col-sm-6\">\n            <input type=\"text\" class=\"form-control\" id=\"addressBusiness\" name=\"address\" [(ngModel)]=\"order.ContactPerson.Address\">\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"placeBusiness\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Plaats<br/><span>Optioneel</span></label>\n        <div class=\"col-xs-12 col-sm-6\">\n            <input type=\"text\" class=\"form-control\" id=\"placeBusiness\" name=\"place\" [(ngModel)]=\"order.ContactPerson.City\">\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"countryBusiness\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Land<br/><span>Optioneel</span></label>\n        <div class=\"col-xs-12 col-sm-6\">\n            <select class=\"form-control\" id=\"countryBusiness\" [(ngModel)]=\"order.ContactPerson.CountryId\" name=\"countrySelection\">\n                <option *ngFor=\"let c of countries\" [ngValue]=\"c.Id\">{{c.Name}}</option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"form-group\" [class.has-error]=\"emailBusiness.errors && (emailBusiness.dirty || emailBusiness.touched || contactForm.submitted)\" [class.has-feedback]=\"emailBusiness.errors && (emailBusiness.dirty || emailBusiness.touched || contactForm.submitted)\">\n        <label for=\"emailBusiness\" class=\"col-xs-12 col-sm-3 control-label optional-label\">E-mail</label>\n        <div class=\"col-xs-12 col-sm-6\">\n            <input type=\"text\" class=\"form-control\" id=\"emailBusiness\" name=\"email\" [(ngModel)]=\"order.ContactPerson.Email\" #emailBusiness=\"ngModel\" required pattern=\"[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\"\n            />\n            <span *ngIf=\"emailBusiness.errors && (emailBusiness.dirty || emailBusiness.touched || contactForm.submitted)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n            <label *ngIf=\"emailBusiness.hasError('required') && (emailBusiness.dirty || emailBusiness.touched || contactForm.submitted)\" class=\"control-label\">E-mail is verpllicht.</label>\n            <label *ngIf=\"emailBusiness.hasError('pattern') && (emailBusiness.dirty || emailBusiness.touched || contactForm.submitted)\" class=\"control-label\">Geef een geldig e-mailadres op.</label>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"phoneBusiness\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Telefoon<br/><span>Optioneel</span></label>\n        <div class=\"col-xs-12 col-sm-6\">\n            <input type=\"text\" class=\"form-control\" id=\"phoneBusiness\" name=\"phone\" [(ngModel)]=\"order.ContactPerson.Phone\">\n        </div>\n    </div>\n\n    <hr class=\"divider\" />\n\n    <h2>Deelnemers</h2>\n\n    <div class=\"form-group\">\n        <label class=\"col-xs-12 col-sm-3 control-label\">Bent u zelf deelnemer?</label>\n        <div class=\"col-xs-12 col-sm-6\">\n            <label class=\"checkbox-inline\">\n                <input type=\"checkbox\" name=\"participantInfo\" [(ngModel)]=\"order.FirstStudentIsContact\" (change)=\"toggleSelf()\" > Ja, gebruik hiervoor de contactgegevens\n            </label>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"col-xs-12 col-sm-3 control-label\">Schrijft u in voor een ander?</label>\n        <div class=\"col-xs-12 col-sm-6\">\n            <label class=\"checkbox-inline\">\n                <input type=\"checkbox\" name=\"extraParticipant\" [(ngModel)]=\"addMultipleStudents\" (change)=\"toggleStudents()\"> Extra deelnemer(s) toevoegen\n            </label>\n        </div>\n    </div>\n\n    <div *ngIf=\"addMultipleStudents\" class=\"form-group\" name=\"studentLabel\">\n        <label class=\"col-xs-12 col-sm-3 control-label\">Andere deelnemers</label>\n    </div>\n    <div *ngFor=\"let s of order.Students; let index = index\" class=\"participant-block\" name=\"studentList\">\n        <div class=\"form-group\">\n            <label class=\"col-xs-12 col-sm-3 control-label participant-title\">Deelnemer 1</label>\n        </div>\n\n        <div class=\"form-group\" [class.has-error]=\"studentGender.errors && (studentGender.dirty || studentGender.touched || contactForm.submitted)\" [class.has-feedback]=\"studentGender.errors && (studentGender.dirty || studentGender.touched || contactForm.submitted)\">\n            <label class=\"col-xs-12 col-sm-3 control-label\">Aanhef</label>\n            <div class=\"col-xs-12 col-sm-4 col-md-7\">\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" name=\"optionGender_{{index}}\" value=\"V\" [(ngModel)]=\"s.Gender\" required #studentGender=\"ngModel\"> Mevrouw\n                </label>\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" name=\"optionGender_{{index}}\" value=\"M\" [(ngModel)]=\"s.Gender\" required #studentGender=\"ngModel\"> De heer\n                </label>\n                <label *ngIf=\"studentGender.errors && (studentGender.dirty || studentGender.touched || contactForm.submitted)\" class=\"control-label\">Gelieve een aanhef te selecteren.</label>\n            </div>\n        </div>\n        <div class=\"form-group\" [class.has-error]=\"studentInitials.errors && (studentInitials.dirty || studentInitials.touched || contactForm.submitted)\" [class.has-feedback]=\"studentInitials.errors && (studentInitials.dirty || studentInitials.touched || contactForm.submitted)\">\n            <label for=\"initialsParticipant\" class=\"col-xs-12 col-sm-3 control-label\">Voorletters</label>\n            <div class=\"col-xs-12 col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"initialsParticipant\" name=\"initials_{{index}}\" [(ngModel)]=\"s.Initials\" required #studentInitials=\"ngModel\">\n                <span *ngIf=\"studentInitials.errors && (studentInitials.dirty || studentInitials.touched || contactForm.submitted)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                <label *ngIf=\"studentInitials.errors && (studentInitials.dirty || studentInitials.touched || contactForm.submitted)\" class=\"control-label\">Voorletters zijn verpllicht.</label>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"firstNameParticipant\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Voornaam<br/><span>Optioneel</span></label>\n            <div class=\"col-xs-12 col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"firstNameParticipant\" name=\"firstName_{{index}}\" [(ngModel)]=\"order.Students[index].FirstName\">\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"middleNameParticipant\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Tussenvoegsel<br/><span>Optioneel</span></label>\n            <div class=\"col-xs-12 col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"middleNameParticipant\" name=\"middleName_{{index}}\" [(ngModel)]=\"s.MiddleName\">\n            </div>\n        </div>\n\n        <div class=\"form-group\" [class.has-error]=\"studentLastName.errors && (studentLastName.dirty || studentLastName.touched || contactForm.submitted)\" [class.has-feedback]=\"studentLastName.errors && (studentLastName.dirty || studentLastName.touched || contactForm.submitted)\">\n            <label for=\"lastNameParticipant\" class=\"col-xs-12 col-sm-3 control-label\">Achternaam</label>\n            <div class=\"col-xs-12 col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"lastNameParticipant\" name=\"lastName_{{index}}\" [(ngModel)]=\"s.Surname\" required #studentLastName=\"ngModel\">\n                <span *ngIf=\"studentLastName.errors && (studentLastName.dirty || studentLastName.touched || contactForm.submitted)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                <label *ngIf=\"studentLastName.errors && (studentLastName.dirty || studentLastName.touched || contactForm.submitted)\" class=\"control-label\">Achternaam is verpllicht.</label>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"privatePostalcodeParticipant\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Postcode<br/><span>Optioneel</span></label>\n            <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                    <div class=\"col-sm-5 col-xs-12 margin-bottom-15\">\n                        <input id=\"privatePostalcodeParticipant\" type=\"text\" class=\"form-control\" name=\"postalCode_{{index}}\" [(ngModel)]=\"s.PostalCode\">\n                    </div>\n                    <label for=\"privateNumberParticipant\" class=\"col-xs-12 col-sm-3 control-label optional-label margin-bottom-15\">Nummer<br/><span>Optioneel</span></label>\n                    <div class=\"col-sm-4 col-xs-12\">\n                        <input id=\"privateNumberParticipant\" type=\"text\" class=\"form-control\" name=\"addressNumber_{{index}}\">\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"privateAddressParticipant\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Straat<br/><span>Optioneel</span></label>\n            <div class=\"col-xs-12 col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"privateAddressParticipant\" name=\"address_{{index}}\" [(ngModel)]=\"s.Address\">\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"privatePlaceParticipant\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Plaats<br/><span>Optioneel</span></label>\n            <div class=\"col-xs-12 col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"privatePlaceParticipant\" name=\"place_{{index}}\" [(ngModel)]=\"s.City\">\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"privateCountryParticipant\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Land<br/><span>Optioneel</span></label>\n            <div class=\"col-xs-12 col-sm-6\">\n                <select class=\"form-control\" id=\"privateCountryParticipant\" name=\"country_{{index}}\" [(ngModel)]=\"s.CountryId\">\n                    <option *ngFor=\"let c of countries\" [ngValue]=\"c.Id\">{{c.Name}}</option>\n                </select>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"phoneNumberParticipant\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Telefoonnummer<br/><span>Optioneel</span></label>\n            <div class=\"col-xs-12 col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"phoneNumberParticipant\" name=\"phone_{{index}}\" [(ngModel)]=\"s.Phone\">\n            </div>\n        </div>\n        <div class=\"form-group\" [class.has-error]=\"studentEmail.errors && (studentEmail.dirty || studentEmail.touched || contactForm.submitted)\" [class.has-feedback]=\"studentEmail.errors && (studentEmail.dirty || studentEmail.touched || contactForm.submitted)\">\n            <label for=\"emailParticipant\" class=\"col-xs-12 col-sm-3 control-label optional-label\">E-mail adres</label>\n            <div class=\"col-xs-12 col-sm-6 \">\n                <input type=\"email\" class=\"form-control\" id=\"emailParticipant\" name=\"email_{{index}}\" [(ngModel)]=\"s.Email\" required pattern=\"[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\"\n                    #studentEmail=\"ngModel\">\n                <span *ngIf=\"studentEmail.errors && (studentEmail.dirty || studentEmail.touched || contactForm.submitted)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                <label *ngIf=\"studentEmail.hasError('required') && (studentEmail.dirty || studentEmail.touched || contactForm.submitted)\" class=\"control-label\">E-mail is verpllicht.</label>\n                <label *ngIf=\"studentEmail.hasError('pattern') && (studentEmail.dirty || studentEmail.touched || contactForm.submitted)\" class=\"control-label\">Geef een geldig e-mailadres op.</label>\n            </div>\n        </div>\n        <div class=\"form-group participant-control\">\n            <div class=\"col-xs-12 col-sm-9 text-right\">\n                <a class=\"btn btn-link delete-participant\" (click)=\"removeStudent(s)\">Verwijder deelnemer</a>\n                <br/>\n                <a class=\"btn btn-link\" (click)=\"addStudent()\">Voeg nieuwe deelnemer toe</a>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"divider\" />\n\n    <h2>Vragen of opmerkingen</h2>\n    <div class=\"form-group\">\n        <label class=\"col-xs-12 col-sm-3 control-label optional optional-label\" for=\"questions\">Optioneel</label>\n        <div class=\"col-xs-12 col-sm-6\">\n            <textarea class=\"form-control\" id=\"questions\" rows=\"10\" [(ngModel)]=\"order.Remarks\" name=\"remarks\"></textarea>\n        </div>\n    </div>\n    <span class=\"btn-spacer\"></span>\n    <button (click)=\"previousTab()\" class=\"btn btn-link pull-left\" aria-controls=\"courseSelect\" role=\"tab\">Vorige</button>\n    <button type=\"submit\" class=\"btn btn-default pull-right\" aria-controls=\"paymentInfo\" role=\"tab\">Volgende</button>\n</form>"

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = "<h2>Inschrijven cursus</h2>\n<form class=\"form-horizontal\">\n    <div class=\"form-group\">\n        <label for=\"courseSelector\" class=\"col-xs-12 col-sm-3 control-label filter-label\">Selecteer cursus</label>\n        <div class=\"col-xs-12 col-sm-5\">\n            <select id=\"courseSelector\" class=\"form-control\" [(ngModel)]=\"selectedCourseTemplate\" (ngModelChange)=\"selectedCourseTemplateChanged($event)\" name=\"CourseSelector\">\n                    <option value=\"null\" selected></option>\n                    <option *ngFor=\"let ct of courseTemplates\" [ngValue]=\"ct\">{{ct.Name}}</option>\n            </select>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"regionSelector\" class=\"col-xs-12 col-sm-3 control-label filter-label\">Selecteer regio</label>\n        <div class=\"col-xs-12 col-sm-5\">\n            <select id=\"regionSelector\" class=\"form-control\" [(ngModel)]=\"selectedRegion\" (ngModelChange)=\"selectedRegionChanged($event)\" name=\"RegionSelector\">\n                    <option value=\"null\" selected></option>\n                    <option *ngFor=\"let r of regions\" [ngValue]=\"r\">{{r.Name}}</option>\n            </select>\n        </div>\n    </div>\n</form>\n<hr class=\"divider\" />\n<div class=\"table-responsive\">\n    <table class=\"table table-hover\">\n        <thead>\n            <tr>\n                <th>\n                    <!--selection-->\n                </th>\n                <th>Startdatum</th>\n                <th>Cursus</th>\n                <th>Regio</th>\n                <th>Duur</th>\n                <th>Prijs</th>\n                <th>\n                    <!--status-->\n                </th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let course of courses\" [class.disabled]=\"course.IsFull\" [class.active]=\"course.Id == selectedCourseId\">\n                <td>\n                    <input type=\"radio\" name=\"courseSelector\" [value]=\"course.Id\" [(ngModel)]=\"selectedCourseId\" [disabled]=\"course.IsFull\" (change)=\"selectedCourseChanged(course)\"></td>\n                <td>{{course.Date | date: 'dd-MM-yyyy'}}</td>\n                <td>{{course.Name}}</td>\n                <td>{{course.Region}}</td>\n                <td>{{course.DurationInfo}}</td>\n                <td>{{course.Price | currencyFormat}}</td>\n                <td><span *ngIf=\"course.IsFull\">Vol</span></td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<span class=\"btn-spacer\"></span>\n<button class=\"btn btn-default pull-right \" aria-controls=\"contactInfo\" role=\"tab\" [disabled]=\"!selectedCourseId\" (click)=\"nextTab()\">Volgende</button>"

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports = "<h2>Factuuradres</h2>\n<form class=\"form-horizontal\" (ngSubmit)=\"saveInfo(contactForm.valid)\" #contactForm=\"ngForm\">\n    <div class=\"form-group\">\n        <label class=\"col-xs-12 col-sm-3 control-label\">Adres</label>\n        <div class=\"col-xs-12 col-sm-5 col-md-7\">\n            <ul class=\"address-list\">\n                <li>\n                    T.a.v. {{order?.ContactPerson.Initials}} {{order?.ContactPerson.Surname}}\n                </li>\n                <li *ngIf=\"order?.Company\">\n                    {{order.Company.Name}}\n                </li>\n                <li>\n                    {{order?.ContactPerson.Address}} {{order?.ContactPerson.AddressNumber}}\n                </li>\n                <li>\n                    {{order?.ContactPerson.PostalCode}}\n                </li>\n                <li>\n                    {{order?.ContactPerson.City}}\n                </li>\n            </ul>\n            <label class=\"checkbox-inline\">\n                <input type=\"checkbox\" name=\"diffBillingAddress\" value=\"billingAddress\" (change)=\"alternativeBillingAddress = !alternativeBillingAddress\"> Gebruik een ander factuuradres\n            </label>\n        </div>\n    </div>\n    <div *ngIf=\"alternativeBillingAddress\">\n        <div class=\"form-group\">\n            <label class=\"col-xs-12 col-sm-3 control-label optional-label\">Aanhef<br/><span>Optioneel</span></label>\n            <div class=\"col-xs-12 col-sm-4 col-md-7\">\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" name=\"optionGender\" value=\"V\" [(ngModel)]=\"order.InvoicePerson.Gender\"> Mevrouw\n                </label>\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" name=\"optionGender\" value=\"M\" [(ngModel)]=\"order.InvoicePerson.Gender\"> De heer\n                </label>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"initialsBillAddress\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Voorletters<br/><span>Optioneel</span></label>\n            <div class=\"col-xs-12 col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"initialsBillAddress\" [(ngModel)]=\"order.InvoicePerson.Initials\" name=\"initials\">\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"firstNameBillAddress\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Voornaam<br/><span>Optioneel</span></label>\n            <div class=\"col-xs-12 col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"firstNameBillAddress\" [(ngModel)]=\"order.InvoicePerson.FirstName\" name=\"firstName\">\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"middleNameBillAddress\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Tussenvoegsel<br/><span>Optioneel</span></label>\n            <div class=\"col-xs-12 col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"middleNameBillAddress\" [(ngModel)]=\"order.InvoicePerson.MiddleName\" name=\"middleName\">\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"lastNameBillAddress\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Achternaam<br/><span>Optioneel</span></label>\n            <div class=\"col-xs-12 col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"lastNameBillAddress\" [(ngModel)]=\"order.InvoicePerson.Surname\" name=\"surname\">\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"companyBillAddress\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Bedrijf<br/><span>Optioneel</span></label>\n            <div class=\"col-xs-12 col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"companyBillAddress\" [(ngModel)]=\"order.InvoiceCompany.Name\" name=\"company\">\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"postalcodeBillAddress\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Postcode<br/><span>Optioneel</span></label>\n            <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                    <div class=\"col-sm-5 col-xs-12 margin-bottom-15\">\n                        <input id=\"postalcodeBillAddress\" type=\"text\" class=\"form-control\" [(ngModel)]=\"order.InvoicePerson.PostalCode\" name=\"postalcode\">\n                    </div>\n                    <label for=\"numberBillAddress\" class=\"col-xs-12 col-sm-3 control-label optional-label margin-bottom-15\">Nummer<br/><span>Optioneel</span></label>\n                    <div class=\"col-sm-4 col-xs-12\">\n                        <input id=\"numberBillAddress\" type=\"text\" class=\"form-control\" [(ngModel)]=\"order.InvoicePerson.AddressNumber\" name=\"addressNumber\">\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"addressBillAddress\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Straat<br/><span>Optioneel</span></label>\n            <div class=\"col-xs-12 col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"addressBillAddress\" [(ngModel)]=\"order.InvoicePerson.Address\" name=\"address\">\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"cityBillAddress\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Plaats<br/><span>Optioneel</span></label>\n            <div class=\"col-xs-12 col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"cityBillAddress\" [(ngModel)]=\"order.InvoicePerson.City\" name=\"city\">\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"countryBillAddress\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Land<br/><span>Optioneel</span></label>\n            <div class=\"col-xs-12 col-sm-6\">\n                <select class=\"form-control\" id=\"countryBillAddress\" [(ngModel)]=\"order.InvoicePerson.CountryId\" name=\"country\">\n                    <option *ngFor=\"let c of countries\" [ngValue]=\"c.Id\">{{c.Name}}</option>\n                </select>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [class.has-error]=\"emailBusiness.errors && (emailBusiness.dirty || emailBusiness.touched || contactForm.submitted)\" [class.has-feedback]=\"emailBusiness.errors && (emailBusiness.dirty || emailBusiness.touched || contactForm.submitted)\">\n            <label for=\"emailBillAddress\" class=\"col-xs-12 col-sm-3 control-label\">E-mail</label>\n            <div class=\"col-xs-12 col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"emailBillAddress\" [(ngModel)]=\"order.InvoicePerson.Email\" name=\"emailBusiness\" #emailBusiness=\"ngModel\" required pattern=\"[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\">\n                <span *ngIf=\"emailBusiness.errors && (emailBusiness.dirty || emailBusiness.touched || contactForm.submitted)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                <label *ngIf=\"emailBusiness.hasError('required') && (emailBusiness.dirty || emailBusiness.touched || contactForm.submitted)\" class=\"control-label\">E-mail is verpllicht.</label>\n                <label *ngIf=\"emailBusiness.hasError('pattern') && (emailBusiness.dirty || emailBusiness.touched || contactForm.submitted)\" class=\"control-label\">Geef een geldig e-mailadres op.</label>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"phoneBillAddress\" class=\"col-xs-12 col-sm-3 control-label optional-label\">Telefoon<br/><span>Optioneel</span></label>\n            <div class=\"col-xs-12 col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"phoneBillAddress\" [(ngModel)]=\"order.InvoicePerson.Phone\" name=\"phone\">\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"divider\" />\n    <h2>Kies een betaalmethode</h2>\n\n    <div class=\"table-responsive\">\n        <table class=\"table table-hover\" id=\"payment-table\">\n            <tbody>\n                <tr *ngIf=\"false\">\n                    <td><input type=\"radio\" name=\"payment-option\" value=\"ideal\" class=\"payment-radio\" /></td>\n                    <td class=\"hidden-xs\"><img class=\"img-responsive payment-img\" src=\"img/ideal.png\" /></td>\n                    <td id=\"iDeal\"><span class=\"payment-option\">iDeal</span> - Online betalen via uw Nederlandse bank\n                    </td>\n                </tr>\n                <tr *ngIf=\"false\">\n                    <td><input type=\"radio\" name=\"payment-option\" value=\"paypal\" class=\"payment-radio\" />\n                    </td>\n                    <td class=\"hidden-xs\"><img class=\"img-responsive payment-img\" src=\"img/paypal.png\" />\n                    </td>\n                    <td id=\"PayPal\"><span class=\"payment-option\">PayPal</span> - Veilig betalen via uw PayPal account\n                    </td>\n                </tr>\n                <tr *ngIf=\"false\">\n                    <td><input type=\"radio\" name=\"payment-option\" value=\"bancontact\" class=\"payment-radio\" />\n                    </td>\n                    <td class=\"hidden-xs\"><img class=\"img-responsive payment-img\" src=\"img/bancontact.png\" />\n                    </td>\n                    <td id=\"BanContact\"><span class=\"payment-option\">BanContact</span> - Betaal veilig met uw eigen bank\n                    </td>\n                </tr>\n                <tr *ngIf=\"false\">\n                    <td><input type=\"radio\" name=\"payment-option\" value=\"afterpay\" class=\"payment-radio\" />\n                    </td>\n                    <td class=\"hidden-xs\"><img class=\"img-responsive payment-img\" src=\"img/afterpay.jpg\" />\n                    </td>\n                    <td id=\"AfterPay\"><span class=\"payment-option\">AfterPay</span> - Betaal achteraf via internet bankieren of bankoverschrijving\n                    </td>\n                </tr>\n                <tr *ngIf=\"false\">\n                    <td><input type=\"radio\" name=\"payment-option\" value=\"creditcard\" class=\"payment-radio\" />\n                    </td>\n                    <td class=\"hidden-xs\"><img class=\"img-responsive payment-img\" src=\"img/creditcard.jpg\" />\n                    </td>\n                    <td id=\"creditcard\"><span class=\"payment-option\">Creditcard</span> - Snel en eenvoudig betalen met uw eigen creditcard\n                    </td>\n                </tr>\n                <tr>\n                    <td><input type=\"radio\" name=\"payment-option\" value=\"factuur\" class=\"payment-radio\" checked />\n                    </td>\n                    <td class=\"hidden-xs\" id=\"invoice\"><span class=\"payment-option\">Factuur</span></td>\n                    <td class=\"hidden-xs\">Ontvang een factuur per e-mail</td>\n                    <td class=\"visible-xs-block\" id=\"invoice-2\"><span class=\"payment-option\">Factuur</span> - Ontvang een factuur per e-mail\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <span class=\"btn-spacer\"></span>\n\n    <div class=\"form-group\" [class.has-error]=\"conditions.errors && (conditions.dirty || conditions.touched || contactForm.submitted)\" [class.has-feedback]=\"conditions.errors && (conditions.dirty || conditions.touched || contactForm.submitted)\">\n        <label for=\"conditions\" class=\"col-xs-12 col-sm-3 control-label\">Voorwaarden</label>\n        <div class=\"col-xs-12 col-sm-6\">\n            <label class=\"checkbox-inline\">\n                <input type=\"checkbox\" id=\"conditions\" [(ngModel)]=\"conditionsAgreed\" name=\"conditions\" required #conditions=\"ngModel\"> Ik ga akkoord met de <a href=\"#\" target=\"_blank\">algemene voorwaarden</a>\n            </label>\n            <label *ngIf=\"conditions.errors && (conditions.dirty || conditions.touched || contactForm.submitted)\" class=\"control-label\">U dient akkoord te gaan met de algemene voorwaarden.</label>\n        </div>\n    </div>\n\n    <button (click)=\"previousTab()\" class=\"btn btn-link pull-left\" aria-controls=\"courseSelect\" role=\"tab\">Vorige</button>\n    <button type=\"submit\" class=\"btn btn-default pull-right\" aria-controls=\"paymentInfo\" role=\"tab\">Volgende</button>\n</form>"

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalFunctionsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GlobalFunctionsService = (function () {
    function GlobalFunctionsService() {
        this.updateSelectedCourseFunction = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.enableTabsFunction = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.activateTabFunction = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.orderFunction = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.studentsFunction = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    GlobalFunctionsService.prototype.updateSelectedCourse = function (selectedCourse) {
        this.updateSelectedCourseFunction.next(selectedCourse);
    };
    GlobalFunctionsService.prototype.selectedCourseUpdated = function () {
        return this.updateSelectedCourseFunction.asObservable();
    };
    GlobalFunctionsService.prototype.enableTabs = function (tabCount) {
        this.enableTabsFunction.next(tabCount);
    };
    GlobalFunctionsService.prototype.enabledTabsChanged = function () {
        return this.enableTabsFunction.asObservable();
    };
    GlobalFunctionsService.prototype.activateTab = function (tabName) {
        this.activateTabFunction.next(tabName);
    };
    GlobalFunctionsService.prototype.activeTabChanged = function () {
        return this.activateTabFunction.asObservable();
    };
    GlobalFunctionsService.prototype.updateOrder = function (order) {
        this.orderFunction.next(order);
    };
    GlobalFunctionsService.prototype.orderUpdated = function () {
        return this.orderFunction.asObservable();
    };
    GlobalFunctionsService.prototype.updateStudentCount = function (count) {
        this.studentsFunction.next(count);
    };
    GlobalFunctionsService.prototype.studentCountUpdated = function () {
        return this.studentsFunction.asObservable();
    };
    return GlobalFunctionsService;
}());
GlobalFunctionsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], GlobalFunctionsService);

//# sourceMappingURL=global-functions.service.js.map

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(76);


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Student; });
var Student = (function () {
    function Student() {
    }
    return Student;
}());

//# sourceMappingURL=student.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountryService = (function () {
    function CountryService(http) {
        this.http = http;
        this.countryApiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/v1/Countries';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization-ApiKey': __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiKey
        });
    }
    CountryService.prototype.getCountries = function () {
        return this.http.get(this.countryApiUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CountryService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return CountryService;
}());
CountryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], CountryService);

var _a;
//# sourceMappingURL=country.service.js.map

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 75;


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(11);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_functions_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(globalFunctionsService) {
        var _this = this;
        this.globalFunctionsService = globalFunctionsService;
        this.enabledTabCount = 1;
        this.selectedTab = 'courseSelect'; // TODO: Reset to 'courseSelect'; (contactInfo, paymentInfo, signupConfirmed)
        this.errors = false;
        this.subscription = this.globalFunctionsService.enabledTabsChanged().subscribe(function (enabledTabCount) { return _this.enabledTabCount = enabledTabCount; });
        this.subscriptionActiveTab = this.globalFunctionsService.activeTabChanged().subscribe(function (activeTab) { return _this.selectTab(activeTab); });
    }
    AppComponent.prototype.selectTab = function (selectedTab) {
        console.debug('Selected tab: ' + selectedTab);
        var tabIndex = 0;
        switch (selectedTab) {
            case 'courseSelect':
                tabIndex = 1;
                break;
            case 'contactInfo':
                tabIndex = 2;
                break;
            case 'paymentInfo':
                tabIndex = 3;
                break;
            case 'signupConfirmed':
                this.errors = false;
                tabIndex = 4;
                break;
            case 'signupFailed':
                this.errors = true;
                tabIndex = 4;
                break;
        }
        if ((tabIndex <= this.enabledTabCount && this.enabledTabCount != 4) || (tabIndex == 4 && this.enabledTabCount == 4)) {
            this.selectedTab = selectedTab;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.providerContactMail = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].contactEmail;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.subscriptionActiveTab.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(152),
        styles: [__webpack_require__(151)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_global_functions_service__["a" /* GlobalFunctionsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_global_functions_service__["a" /* GlobalFunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_global_functions_service__["a" /* GlobalFunctionsService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_currencyformat__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_dutchdateformat__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__basket_basket_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__confirmation_confirmation_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contactinfo_contactinfo_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__courseselection_courseselection_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__paymentinfo_paymentinfo_component__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__helpers_currencyformat__["a" /* CurrencyFormat */],
            __WEBPACK_IMPORTED_MODULE_5__helpers_dutchdateformat__["a" /* DutchDateFormat */],
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_7__basket_basket_component__["a" /* BasketComponent */], __WEBPACK_IMPORTED_MODULE_8__confirmation_confirmation_component__["a" /* ConfirmationComponent */], __WEBPACK_IMPORTED_MODULE_9__contactinfo_contactinfo_component__["a" /* ContactinfoComponent */], __WEBPACK_IMPORTED_MODULE_10__courseselection_courseselection_component__["a" /* CourseselectionComponent */], __WEBPACK_IMPORTED_MODULE_11__paymentinfo_paymentinfo_component__["a" /* PaymentinfoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global_functions_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasketComponent = (function () {
    function BasketComponent(globalFunctionsService) {
        var _this = this;
        this.globalFunctionsService = globalFunctionsService;
        this.studentCount = 0;
        this.subscription = this.globalFunctionsService.selectedCourseUpdated().subscribe(function (course) { return _this.selectedCourse = course; });
        this.subscriptionStudentCount = this.globalFunctionsService.studentCountUpdated().subscribe(function (count) { return _this.studentCount = count; });
    }
    BasketComponent.prototype.updateCourseInfo = function (course) {
        this.selectedCourse = course;
    };
    BasketComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.subscriptionStudentCount.unsubscribe();
    };
    return BasketComponent;
}());
BasketComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'fo-basket',
        template: __webpack_require__(153)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_global_functions_service__["a" /* GlobalFunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_global_functions_service__["a" /* GlobalFunctionsService */]) === "function" && _a || Object])
], BasketComponent);

var _a;
//# sourceMappingURL=basket.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = (function () {
    function Company() {
    }
    return Company;
}());

//# sourceMappingURL=company.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPerson; });
var ContactPerson = (function () {
    function ContactPerson() {
    }
    return ContactPerson;
}());

//# sourceMappingURL=contactperson.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order() {
    }
    return Order;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global_functions_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationComponent = (function () {
    function ConfirmationComponent(globalFunctionsService) {
        var _this = this;
        this.globalFunctionsService = globalFunctionsService;
        this.subscription = this.globalFunctionsService.orderUpdated().subscribe(function (order) { return _this.order = order; });
        this.subscriptionCourse = this.globalFunctionsService.selectedCourseUpdated().subscribe(function (course) { return _this.course = course; });
    }
    ConfirmationComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.subscriptionCourse.unsubscribe();
    };
    return ConfirmationComponent;
}());
ConfirmationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'fo-confirmation',
        template: __webpack_require__(154)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_global_functions_service__["a" /* GlobalFunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_global_functions_service__["a" /* GlobalFunctionsService */]) === "function" && _a || Object])
], ConfirmationComponent);

var _a;
//# sourceMappingURL=confirmation.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_country_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bll_order__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bll_contactperson__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bll_company__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bll_student__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global_functions_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactinfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactinfoComponent = (function () {
    function ContactinfoComponent(countryService, globalFunctionsService) {
        this.countryService = countryService;
        this.globalFunctionsService = globalFunctionsService;
        this.order = new __WEBPACK_IMPORTED_MODULE_2__bll_order__["a" /* Order */]();
    }
    ContactinfoComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryService.getCountries().then(function (countries) { return _this.countries = countries; });
    };
    ContactinfoComponent.prototype.toggleSelf = function () {
        this.globalFunctionsService.updateStudentCount((this.order.Students ? this.order.Students.length : 0) + (this.order.FirstStudentIsContact ? 1 : 0));
    };
    ContactinfoComponent.prototype.toggleStudents = function () {
        this.addMultipleStudents != this.addMultipleStudents;
        if (this.addMultipleStudents) {
            var student = new __WEBPACK_IMPORTED_MODULE_5__bll_student__["a" /* Student */]();
            student.CountryId = 'NL';
            this.order.Students = [student];
            this.globalFunctionsService.updateStudentCount(this.order.Students.length + (this.order.FirstStudentIsContact ? 1 : 0));
        }
        else {
            this.order.Students = [];
            this.globalFunctionsService.updateStudentCount(this.order.Students.length + (this.order.FirstStudentIsContact ? 1 : 0));
        }
    };
    ContactinfoComponent.prototype.addStudent = function () {
        var student = new __WEBPACK_IMPORTED_MODULE_5__bll_student__["a" /* Student */]();
        student.CountryId = 'NL';
        this.order.Students.push(student);
        this.globalFunctionsService.updateStudentCount(this.order.Students.length + (this.order.FirstStudentIsContact ? 1 : 0));
    };
    ContactinfoComponent.prototype.removeStudent = function (student) {
        this.order.Students = this.order.Students.filter(function (s) { return s !== student; });
        this.addMultipleStudents = this.order.Students.length > 0;
        this.globalFunctionsService.updateStudentCount(this.order.Students.length + (this.order.FirstStudentIsContact ? 1 : 0));
    };
    ContactinfoComponent.prototype.saveInfo = function (isValid) {
        if (isValid) {
            console.debug("Info Saved.");
            this.globalFunctionsService.updateOrder(this.order);
            this.globalFunctionsService.enableTabs(3);
            this.globalFunctionsService.activateTab('paymentInfo');
        }
        else
            console.debug("Not Valid!");
    };
    ContactinfoComponent.prototype.previousTab = function () {
        this.globalFunctionsService.activateTab('courseSelect');
    };
    ContactinfoComponent.prototype.ngOnInit = function () {
        // Initial Values
        this.order.OrderType = 'Private';
        this.order.ContactPerson = new __WEBPACK_IMPORTED_MODULE_3__bll_contactperson__["a" /* ContactPerson */]();
        this.order.ContactPerson.CountryId = 'NL';
        this.order.Company = new __WEBPACK_IMPORTED_MODULE_4__bll_company__["a" /* Company */]();
        this.order.Company.CountryId = 'NL';
        this.order.InvoicePerson = new __WEBPACK_IMPORTED_MODULE_3__bll_contactperson__["a" /* ContactPerson */]();
        this.order.InvoicePerson.CountryId = 'NL';
        this.order.InvoiceCompany = new __WEBPACK_IMPORTED_MODULE_4__bll_company__["a" /* Company */]();
        this.order.InvoiceCompany.CountryId = 'NL';
        this.getCountries();
    };
    ContactinfoComponent.prototype.ngOnDestroy = function () {
    };
    return ContactinfoComponent;
}());
ContactinfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'fo-contactinfo',
        template: __webpack_require__(155),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_country_service__["a" /* CountryService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_country_service__["a" /* CountryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_country_service__["a" /* CountryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_global_functions_service__["a" /* GlobalFunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_global_functions_service__["a" /* GlobalFunctionsService */]) === "function" && _b || Object])
], ContactinfoComponent);

var _a, _b;
//# sourceMappingURL=contactinfo.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_coursetemplate_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_region_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_course_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global_functions_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseselectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CourseselectionComponent = (function () {
    function CourseselectionComponent(courseTemplateService, regionService, courseService, globalFunctionsService) {
        this.courseTemplateService = courseTemplateService;
        this.regionService = regionService;
        this.courseService = courseService;
        this.globalFunctionsService = globalFunctionsService;
    }
    CourseselectionComponent.prototype.getCourseTemplates = function () {
        var _this = this;
        this.courseTemplateService.getCourseTemplates().then(function (courseTemplates) { return _this.courseTemplates = courseTemplates; });
    };
    CourseselectionComponent.prototype.getRegions = function () {
        var _this = this;
        this.regionService.getRegions().then(function (regions) { return _this.setRegion(regions); });
    };
    CourseselectionComponent.prototype.setRegion = function (regions) {
        var _this = this;
        this.regions = regions;
        if (this.regions && this.selectedRegion) {
            var regionIndex = this.regions.findIndex(function (region) { return region.Id == _this.selectedRegion.Id; }).toString();
            this.selectedRegion = regions[2];
        }
    };
    CourseselectionComponent.prototype.getCourses = function (courseTemplateId, regionId) {
        var _this = this;
        if (courseTemplateId == null && regionId == null)
            this.courseService.getCourses().then(function (courses) { return _this.courses = courses; });
        else if (regionId == null)
            this.courseService.getCoursesByCourseTemplate(courseTemplateId).then(function (courses) { return _this.courses = courses; });
        else if (courseTemplateId == null)
            this.courseService.getCoursesByRegion(regionId).then(function (courses) { return _this.courses = courses; });
        else
            this.courseService.getCoursesByCourseTemplateAndRegion(courseTemplateId, regionId).then(function (courses) { return _this.courses = courses; });
    };
    CourseselectionComponent.prototype.selectedCourseTemplateChanged = function (courseTemplate) {
        var _this = this;
        if (courseTemplate.Id != undefined) {
            this.regionService.getRegionsByCourseTemplate(courseTemplate.Id).then(function (regions) { return _this.regions = regions; });
            this.getCourses(courseTemplate.Id, this.selectedRegion ? this.selectedRegion.Id : null);
        }
        else {
            this.getRegions();
            this.getCourses(null, this.selectedRegion ? this.selectedRegion.Id : null);
        }
    };
    CourseselectionComponent.prototype.selectedRegionChanged = function (region) {
        if (region.Id != undefined) {
            this.getCourses(this.selectedCourseTemplate ? this.selectedCourseTemplate.Id : null, region.Id);
        }
        else {
            this.getCourses(this.selectedCourseTemplate ? this.selectedCourseTemplate.Id : null, null);
        }
    };
    CourseselectionComponent.prototype.selectedCourseChanged = function (course) {
        this.globalFunctionsService.updateSelectedCourse(course);
        this.globalFunctionsService.enableTabs(2);
    };
    CourseselectionComponent.prototype.nextTab = function () {
        this.globalFunctionsService.activateTab('contactInfo');
    };
    CourseselectionComponent.prototype.ngOnInit = function () {
        this.selectedCourseTemplate = null;
        this.selectedRegion = null;
        this.getCourseTemplates();
        this.getRegions();
        this.getCourses(null, null);
    };
    return CourseselectionComponent;
}());
CourseselectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'fo-courseselection',
        template: __webpack_require__(156),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_coursetemplate_service__["a" /* CourseTemplateService */], __WEBPACK_IMPORTED_MODULE_2__services_region_service__["a" /* RegionService */], __WEBPACK_IMPORTED_MODULE_3__services_course_service__["a" /* CourseService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_coursetemplate_service__["a" /* CourseTemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_coursetemplate_service__["a" /* CourseTemplateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_region_service__["a" /* RegionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_region_service__["a" /* RegionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_course_service__["a" /* CourseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_global_functions_service__["a" /* GlobalFunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_global_functions_service__["a" /* GlobalFunctionsService */]) === "function" && _d || Object])
], CourseselectionComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=courseselection.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyFormat; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CurrencyFormat = (function () {
    function CurrencyFormat() {
    }
    CurrencyFormat.prototype.transform = function (value, currencySign, decimalLength, chunkDelimiter, decimalDelimiter, chunkLength) {
        //value /= 100;
        if (currencySign === void 0) { currencySign = '€ '; }
        if (decimalLength === void 0) { decimalLength = 2; }
        if (chunkDelimiter === void 0) { chunkDelimiter = '.'; }
        if (decimalDelimiter === void 0) { decimalDelimiter = ','; }
        if (chunkLength === void 0) { chunkLength = 3; }
        var result = '\\d(?=(\\d{' + chunkLength + '})+' + (decimalLength > 0 ? '\\D' : '$') + ')';
        var num = value.toFixed(Math.max(0, ~~decimalLength));
        return currencySign + (decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter);
    };
    return CurrencyFormat;
}());
CurrencyFormat = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'currencyFormat'
    })
], CurrencyFormat);

//# sourceMappingURL=currencyformat.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DutchDateFormat; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DutchDateFormat = (function () {
    function DutchDateFormat() {
    }
    DutchDateFormat.prototype.transform = function (value) {
        var date = value instanceof Date ? value : new Date(value);
        var dayPart = date.getDate();
        var monthPart = date.getMonth();
        var yearPart = date.getFullYear();
        // Translate Month
        var monthName = '';
        switch (monthPart) {
            case 0:
                monthName = 'januari';
                break;
            case 1:
                monthName = 'februari';
                break;
            case 2:
                monthName = 'maart';
                break;
            case 3:
                monthName = 'april';
                break;
            case 4:
                monthName = 'mei';
                break;
            case 5:
                monthName = 'juni';
                break;
            case 6:
                monthName = 'juli';
                break;
            case 7:
                monthName = 'augustus';
                break;
            case 8:
                monthName = 'september';
                break;
            case 9:
                monthName = 'oktober';
                break;
            case 10:
                monthName = 'november';
                break;
            case 12:
                monthName = 'december';
                break;
        }
        return dayPart + ' ' + monthName + ' ' + yearPart;
    };
    return DutchDateFormat;
}());
DutchDateFormat = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'dutchDateFormat'
    })
], DutchDateFormat);

//# sourceMappingURL=dutchdateformat.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bll_student__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_country_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_functions_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_enrol_service__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentinfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentinfoComponent = (function () {
    function PaymentinfoComponent(countryService, globalFunctionsService, enrolService) {
        var _this = this;
        this.countryService = countryService;
        this.globalFunctionsService = globalFunctionsService;
        this.enrolService = enrolService;
        this.subscription = this.globalFunctionsService.orderUpdated().subscribe(function (order) { return _this.order = order; });
        this.subscriptionCourse = this.globalFunctionsService.selectedCourseUpdated().subscribe(function (course) { return _this.course = course; });
    }
    PaymentinfoComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryService.getCountries().then(function (countries) { return _this.countries = countries; });
    };
    PaymentinfoComponent.prototype.saveInfo = function (isValid) {
        var _this = this;
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
                    var student = new __WEBPACK_IMPORTED_MODULE_1__bll_student__["a" /* Student */]();
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
                this.order.Students.forEach(function (student) {
                    student.CourseId = _this.course.Id;
                });
                // Save Order
                console.debug(JSON.stringify(this.order));
                this.enrolService.create(this.order)
                    .then(function (response) {
                    _this.globalFunctionsService.updateOrder(_this.order);
                    // Show Summary
                    _this.globalFunctionsService.enableTabs(4);
                    _this.globalFunctionsService.activateTab('signupConfirmed');
                })
                    .catch(function (response) {
                    console.debug('Save Failed');
                    _this.globalFunctionsService.enableTabs(4);
                    _this.globalFunctionsService.activateTab('signupFailed');
                });
            }
            catch (error) {
                this.globalFunctionsService.enableTabs(4);
                this.globalFunctionsService.activateTab('signupFailed');
            }
        }
        else
            console.debug("Not Valid!");
    };
    PaymentinfoComponent.prototype.previousTab = function () {
        this.globalFunctionsService.activateTab('contactInfo');
    };
    PaymentinfoComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    PaymentinfoComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.subscriptionCourse.unsubscribe();
    };
    return PaymentinfoComponent;
}());
PaymentinfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'fo-paymentinfo',
        template: __webpack_require__(157),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_country_service__["a" /* CountryService */], __WEBPACK_IMPORTED_MODULE_4__services_enrol_service__["a" /* EnrolService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_country_service__["a" /* CountryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_country_service__["a" /* CountryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_global_functions_service__["a" /* GlobalFunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_global_functions_service__["a" /* GlobalFunctionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_enrol_service__["a" /* EnrolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_enrol_service__["a" /* EnrolService */]) === "function" && _c || Object])
], PaymentinfoComponent);

var _a, _b, _c;
//# sourceMappingURL=paymentinfo.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CourseService = (function () {
    function CourseService(http) {
        this.http = http;
        this.courseApiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/v1/Courses';
        this.courseTemplateApiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/v1/CourseTemplates';
        this.regionsApiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/v1/Regions';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization-ApiKey': __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiKey
        });
    }
    CourseService.prototype.getCourses = function () {
        return this.http.get(this.courseApiUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CourseService.prototype.getCoursesByCourseTemplate = function (courseTemplateId) {
        return this.http.get(this.courseTemplateApiUrl + '/' + courseTemplateId + '/Courses', { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CourseService.prototype.getCoursesByCourseTemplateAndRegion = function (courseTemplateId, regionId) {
        return this.http.get(this.courseTemplateApiUrl + '/' + courseTemplateId + '/Regions/' + regionId + '/Courses', { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CourseService.prototype.getCoursesByRegion = function (regionId) {
        return this.http.get(this.regionsApiUrl + '/' + regionId + '/Courses', { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CourseService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return CourseService;
}());
CourseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], CourseService);

var _a;
//# sourceMappingURL=course.service.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseTemplateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CourseTemplateService = (function () {
    function CourseTemplateService(http) {
        this.http = http;
        this.courseTemplateApiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/v1/CourseTemplates';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization-ApiKey': __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiKey
        });
    }
    CourseTemplateService.prototype.getCourseTemplates = function () {
        return this.http.get(this.courseTemplateApiUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CourseTemplateService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return CourseTemplateService;
}());
CourseTemplateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], CourseTemplateService);

var _a;
//# sourceMappingURL=coursetemplate.service.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrolService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnrolService = (function () {
    function EnrolService(http) {
        this.http = http;
        this.enrolApiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/v1/Enrol';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization-ApiKey': __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiKey
        });
    }
    EnrolService.prototype.create = function (order) {
        return this.http.post(this.enrolApiUrl, JSON.stringify(order), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.status; })
            .catch(this.handleError);
    };
    EnrolService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return EnrolService;
}());
EnrolService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], EnrolService);

var _a;
//# sourceMappingURL=enrol.service.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegionService = (function () {
    function RegionService(http) {
        this.http = http;
        this.regionApiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/v1/Regions';
        this.courseTemplateApiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/v1/CourseTemplates';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization-ApiKey': __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiKey
        });
    }
    RegionService.prototype.getRegions = function () {
        return this.http.get(this.regionApiUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RegionService.prototype.getRegionsByCourseTemplate = function (courseTemplateId) {
        return this.http.get(this.courseTemplateApiUrl + '/' + courseTemplateId + '/Regions', { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RegionService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return RegionService;
}());
RegionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], RegionService);

var _a;
//# sourceMappingURL=region.service.js.map

/***/ })

},[183]);
//# sourceMappingURL=main.bundle.js.map