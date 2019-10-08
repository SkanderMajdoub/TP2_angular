import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  constructor() { }
nom="popey";
image="../assets/image.jpg";
age=16;

  ngOnInit() {
  }

}
