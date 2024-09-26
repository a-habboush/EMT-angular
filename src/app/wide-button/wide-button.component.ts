import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-wide-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wide-button.component.html',
  styleUrl: './wide-button.component.css'
})
export class WideButtonComponent {
  @Input() label: string = 'Test';
  @Input() customClass: string = '';
}
