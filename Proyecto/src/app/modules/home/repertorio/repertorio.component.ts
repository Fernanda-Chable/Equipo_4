import { Component } from '@angular/core';

@Component({
  selector: 'app-repertorio',
  templateUrl: './repertorio.component.html',
  styleUrls: ['./repertorio.component.scss']
})
export class RepertorioComponent {
  isListExpanded: boolean = true;
  isListExpanded1: boolean = true;
  isListExpanded2: boolean = false;
  isListExpanded3: boolean = false;
  
  toggleList1() {
    this.isListExpanded = !this.isListExpanded;
  }
  
  toggleList2() {
    this.isListExpanded1 = !this.isListExpanded1;
  }
  toggleList3() {
    this.isListExpanded2 = !this.isListExpanded2;
  }
  toggleList4() {
    this.isListExpanded3  = !this.isListExpanded3 ;
  }
   
}
