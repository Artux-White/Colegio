import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Guides } from '../models/guides';
import { map, filter, flatMap, toArray } from "rxjs/operators"; 
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GuideService {
  
  
  constructor(private http: HttpClient) {
    this.loadFromServer();
  }

  private guides: Observable<Guides[]>;
 
  

  public loadFromServer() {
    this.guides = this.http.get('../../assets/json/guias.json').pipe(map((response: any) => response));
  }

  public get_guides() : Observable<Guides[]>{
    return this.guides
  }

  public get_guides_for_lenguages(filters) : Observable<Guides[]>{
    //this.loadFromServer();
    // getWorkOrders() {
    //   this.bs.getWorkOrders()
    //     .pipe(
    //         filter(data => data.timestamp > 123456786 ),
    //         toArray()
    //      )
    //     .subscribe((data: any) =>
    //          this.woSubject.next(data),
    //      );
    //   }
    var newFilter=[];
    Object.keys(filters).forEach(function(item){
      newFilter.push(item);
    });


    // return this.guides.pipe(
    //   map(data => data.filter(g => g.languages.filter(l => l.name.includes("ingles")))))
     return this.guides.pipe(map(
       (g => g.filter(l => l.languages.filter(
         n => n.name.includes("ingles"))))));
    //return this.guides.pipe(map((g => g.filter(x => x.languages)))
    // return this.guides.forEach(g =>{
    //   g.filter(l =>l.languages.filter(n => newFilter.forEach( f =>{
    //     n.name.includes(f.toLowerCase());
    //   })))
    // });

    // array.forEach(g =>{
    //   g.languages.filter(n => newFilter.forEach( f =>{
    //     n.name.includes(f.toLowerCase()) ? newGuides.push(g) : " "
    //   }))
    // });
    
    //newGuides = 
  }
}
