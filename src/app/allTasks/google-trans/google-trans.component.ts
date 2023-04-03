import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-google-trans',
  templateUrl: './google-trans.component.html',
  styleUrls: ['./google-trans.component.scss']
})
export class GoogleTransComponent {

  constructor(private ref: ElementRef) {
  }
  
  ngOnInit() {
    // this.myFunction();
  } 

  clicked=false;
   
}
