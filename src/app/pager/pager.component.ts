import { Component, Input, SimpleChanges } from '@angular/core';
import { VacationRequestsComponent } from '../vacation-requests/vacation-requests.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-pager',
  standalone: true,
  imports: [VacationRequestsComponent,CommonModule,RouterLink],
  templateUrl: './pager.component.html',
  styleUrl: './pager.component.css'
})
export class PagerComponent {

  @Input() CurrentPage!: number;
  @Input() customClass1: string = '';
  @Input() customClass2: string = '';
  @Input() customClass3: string = '';
  @Input() previousButton: string = '';
  @Input() nextButton: string = '';
  dynamicLink1: string = '';
  dynamicLink2: string = '';
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['CurrentPage']) {
      this.pageSelector(this.CurrentPage);
    }
  }

  pageSelector(CurrentPage:number){
    if (CurrentPage == 1){
     this.customClass1 = "text-light bg-success"
     this.previousButton = "disabled"
     this.dynamicLink2 = "/VacationRequests2"

    }

    if (CurrentPage == 2){
      this.customClass2 = "text-light bg-success"
      this.dynamicLink1 = "/VacationRequests"
      this.dynamicLink2 = "/VacationRequests3"
     }

     if (CurrentPage == 3){
      this.customClass3 = "text-light bg-success"
      this.nextButton = "disabled"
      this.dynamicLink1 = "/VacationRequests2"
     }
  }
}

