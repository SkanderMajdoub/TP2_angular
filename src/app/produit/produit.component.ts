import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor() { }

  x1 : number=0 ;
  x2 : number=0 ;
  produit : number ;
  onclick()
  {
this.produit = this.x1*this.x2 ;

  }

  ngOnInit() {
  }

}
