import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor() { }
  name:string = 'Álvaro Jurado';
  year:number = 2024;
  selectedColor: string = '';
  isColored: boolean = false;

  ngOnChanges():void{
    /*this.isColored = this.colorChangeService.isColored;*/
  }
}
