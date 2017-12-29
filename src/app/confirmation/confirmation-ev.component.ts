import { Component } from '@angular/core';

import { EnrolService } from '../services/enrol.service';
import { ConfirmationComponent } from './confirmation.component';

@Component({
  moduleId: module.id,
  selector: 'fo-confirmation',
  templateUrl: './confirmation-ev.component.html',
  providers: [EnrolService]
})

export class ConfirmationEvComponent extends ConfirmationComponent {

}
