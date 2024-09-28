import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(text: string, search: string): string {
    if (!search) {
      return text; // base case
    }
    
    // regex to find the search term
    const regex = new RegExp(`(${search})`, 'gi'); 
    return text.replace(regex, '<span class="highlight">$1</span>'); 
  }
}
