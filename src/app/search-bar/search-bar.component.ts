import { Component,Output, EventEmitter } from '@angular/core';
import { RequestCardComponent } from "../request-card/request-card.component";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [RequestCardComponent],
  templateUrl: './search-bar.component.html',
 
})
export class SearchBarComponent {
  @Output() searchTermChanged: EventEmitter<string> = new EventEmitter<string>();

  // search comparison
  onSearchInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.searchTermChanged.emit(inputValue);
  }
}
