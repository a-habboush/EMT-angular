import { Component, Input } from '@angular/core';
import { ApproveDenyButtonsComponent } from "../approve-deny-buttons/approve-deny-buttons.component";


@Component({
  selector: 'app-request-card-extended',
  standalone: true,
  imports: [ApproveDenyButtonsComponent],
  templateUrl: './request-card-extended.component.html',
  styleUrl: './request-card-extended.component.css'
})
export class RequestCardExtendedComponent {
  @Input() reqName!: string;

  
  @Input() isVisible: boolean = true;

  // Static values
  submittedOn: string = '1/3/2024';
  duration: string = '2 Weeks (1/4/2023 - 14/4/2023)';
  salary: string = '1000 AED';
}
