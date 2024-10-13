import { Component } from '@angular/core';
import { PagerComponent } from "../pager/pager.component";
import { CommonModule } from '@angular/common';
import { RequestCardExtendedComponent } from '../request-card-extended/request-card-extended.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { UniversalheaderComponent } from '../universalheader/universalheader.component';

@Component({
  selector: 'app-vacation-requests-3',
  standalone: true,
  imports: [UniversalheaderComponent, SearchBarComponent, RequestCardExtendedComponent, CommonModule, PagerComponent],
  templateUrl: './vacation-requests-3.component.html',
  styleUrl: './vacation-requests-3.component.css'
})
export class VacationRequests3Component {

  reqCards = [
    { reqName: 'Cameron Harding', isVisible: true },
    { reqName: 'Ahmad Attar', isVisible: true },
    { reqName: 'Ashley Brown', isVisible: true },
    { reqName: 'Abdulrahman Habboush', isVisible: true },
    { reqName: ' Yousef Al-Adwan ', isVisible: true },
    { reqName: ' Chris Johnson ', isVisible: true },
    { reqName: ' Mohammad Qaisi ', isVisible: true },
    { reqName: ' Salma Ahmad ', isVisible: true },
    { reqName: ' Harry Wellington ', isVisible: true },
    { reqName: ' Ryan James ', isVisible: true },
    { reqName: ' Ayah Al-Wazeer ', isVisible: true },
    { reqName: 'Steven King', isVisible: true }

  ];

  
  onSearchTermChanged(searchTerm: string) {
    this.reqCards.forEach(card => {
      card.isVisible = card.reqName.toLowerCase().includes(searchTerm);
      console.log(`${card.reqName}: ${card.isVisible}`); 
    });
  }
}
