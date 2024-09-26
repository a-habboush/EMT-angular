import { Component, Input } from '@angular/core';
import { INITIAL_CONFIG } from '@angular/platform-server';
import { ApproveDenyButtonsComponent } from "../approve-deny-buttons/approve-deny-buttons.component";

@Component({
  selector: 'app-request-card',
  standalone: true,
  imports: [ApproveDenyButtonsComponent],
  templateUrl: './request-card.component.html',
  styleUrl: './request-card.component.css'
})
export class RequestCardComponent {
@Input() reqName:string = 'Employee Name';
}
