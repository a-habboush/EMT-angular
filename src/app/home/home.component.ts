import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { WideButtonComponent } from "../wide-button/wide-button.component";
import { RequestCardComponent } from '../request-card/request-card.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ApproveDenyButtonsComponent } from '../approve-deny-buttons/approve-deny-buttons.component';
import { CountReqCardComponent } from '../count-req-card/count-req-card.component';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from "../image-slider/image-slider.component";
import { RouterLink } from '@angular/router';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { UniversalheaderComponent } from "../universalheader/universalheader.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, WideButtonComponent, RequestCardComponent, SearchBarComponent, ApproveDenyButtonsComponent, CountReqCardComponent, CommonModule, ImageSliderComponent, RouterLink, DashboardComponent, UniversalheaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   search: string = ''
  title = 'Home';
  reqCards = [
    { reqName: 'Cameron Harding', isVisible: true },
    { reqName: 'Ahmad Attar', isVisible: true },
    { reqName: 'Steven King', isVisible: true }
  ];

  // Method to update visibility of cards
  onSearchTermChanged(searchTerm: string) {
    this.reqCards.forEach(card => {
      card.isVisible = card.reqName.toLowerCase().includes(searchTerm);
      console.log(`${card.reqName}: ${card.isVisible}`); 
    });
  }
}
