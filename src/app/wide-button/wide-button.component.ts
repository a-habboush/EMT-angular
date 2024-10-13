import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-wide-button',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './wide-button.component.html',
  styleUrl: './wide-button.component.css'
})
export class WideButtonComponent {
 @Input() profileLink:string = '';
  @Input() label: string = 'Test';
  @Input() customClass: string = '';
}
