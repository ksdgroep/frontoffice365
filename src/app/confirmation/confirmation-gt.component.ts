import { Component } from '@angular/core';

import { EnrolService } from '../services/enrol.service';
import { ConfirmationComponent } from './confirmation.component';

@Component({
  moduleId: module.id,
  selector: 'fo-confirmation',
  templateUrl: './confirmation-gt.component.html',
  providers: [EnrolService]
})

export class ConfirmationGtComponent extends ConfirmationComponent {

}
