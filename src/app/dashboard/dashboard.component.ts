import { Component } from '@angular/core';
import { WideButtonComponent } from "../wide-button/wide-button.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WideButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
