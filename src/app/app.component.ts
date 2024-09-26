import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { WideButtonComponent } from "./wide-button/wide-button.component";

import { CommonModule } from '@angular/common';
import { CountReqCardComponent } from "./count-req-card/count-req-card.component";
import { RequestCardComponent } from "./request-card/request-card.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, WideButtonComponent, CommonModule, CountReqCardComponent, RequestCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EMT-angular';
}
