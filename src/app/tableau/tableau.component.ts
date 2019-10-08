import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  constructor() { }
  nom="ahlem";
  actif=true;
tabNb=[41,18,23,58];
titre:string="Opertations sur un tableau "
minimum(){
  let i;
  let min = this.tabNb[0] ;
  for (let elt of this.tabNb){
    if (elt<min) 
    min=elt;

  }
      return min ;

}
moyenne(){
let i ;
let moy = 0 ;
let s=0;
for ( i=0;i<4;i++){
s = s+this.tabNb[i] ;

}
moy = s/4;
return moy

}
  ngOnInit() {
  }

}
