import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
import { GuideService } from 'src/app/services/guide.service';
import { Guides } from 'src/app/models/guides';
import { Observable } from 'rxjs';
import { filter } from 'minimatch';

@Component({
  selector: 'app-guias',
  templateUrl: './guias.component.html',
  styleUrls: ['./guias.component.css']
})
export class GuiasComponent implements OnInit {
  
  guiasList: Guides[];
  l:any ={}
    
  constructor(private guiasServices: GuideService) { }
  instancesSidenav: any;

  public languages: any[] = [
      {
        id: 1,
        name: "Ingles",
        selected: false,
      },
      {
        id: 2,
        name: "Español",
        selected: false,
      },
      {
        id: 3,
        name: "Portugues",
        selected: false,
      },
      {
        id: 4,
        name: "Frances",
        selected: false,
      },
      {
        id: 5,
        name: "Aleman",
        selected: false,
      }
    ]
  
  ngOnInit() {
    var sidenav = document.querySelectorAll('.sidenav');
     this.instancesSidenav = M.Sidenav.init(sidenav);
    //get guias
    this.guiasServices.get_guides().subscribe(guias => {
      this.guiasList = guias;
    });
  }

  checkValue(){
     this.guiasServices.get_guides_for_lenguages(this.l).subscribe(data =>{
      this.guiasList = data;
     });
  }
}
