import { Component } from '@angular/core';
import { DashboardExtendedComponent } from "../dashboard-extended/dashboard-extended.component";
import { UniversalheaderComponent } from "../universalheader/universalheader.component";
import { CommonModule, NgFor } from '@angular/common';
import { HistoryCardComponent } from "../history-card/history-card.component";
import { RouterLink } from '@angular/router';
import { RequestCardComponent } from "../request-card/request-card.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [DashboardExtendedComponent, UniversalheaderComponent, NgFor, HistoryCardComponent, RouterLink, RequestCardComponent,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  reqCards = [
    { reqName: 'Ahmad Attar', isVisible: true },
    { reqName: 'Ahmad Attar', isVisible: true }
  ];
}
