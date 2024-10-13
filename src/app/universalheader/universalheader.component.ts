import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-universalheader',
  standalone: true,
  imports: [],
  templateUrl: './universalheader.component.html',
  styleUrl: './universalheader.component.css'
})
export class UniversalheaderComponent {
  @Input() title: string = 'Vacation Requests';
}
