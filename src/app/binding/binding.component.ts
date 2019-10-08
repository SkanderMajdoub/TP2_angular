import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }
nom:string="skander";
age:number=21;
contenu="ahlem";
infos()
{ return this.nom +" a pour âge " + this.age; }
onAfficher()
 { console.log(this.nom); }

 onKeyUp(event:KeyboardEvent)
 { this.contenu = 'Bonjour '+(<HTMLInputElement>event.target).value; }
 onAfficherContenu(val:string)
 { console.log(val); }
  ngOnInit() {
  }

}
