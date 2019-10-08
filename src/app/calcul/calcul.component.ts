import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {

  constructor() { }

  carre : number ;
  somme : number ;
  onKeyUp(event:any)
   {

this.carre=event.target.value*event.target.value;


   }

onClick(x,y)
{

this.somme = Number(x)+Number(y) ;

}

  ngOnInit() {
  }

}
