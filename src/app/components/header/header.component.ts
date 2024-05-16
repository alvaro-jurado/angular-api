import { Component } from '@angular/core';
import { SectionsComponent } from '../sections/sections.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SectionsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor() { }
  selectedColor: string = '';
  isColored: boolean = false;

  changeColor(color: string): void {
    if (!this.isColored || (this.selectedColor !== color)) {
      this.selectedColor = color;
      this.isColored = true;
    }
    else {
      this.selectedColor = '';
      this.isColored = false;
    }
  };
}
