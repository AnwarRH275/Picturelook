import { Favorie } from './../models/favorie.page';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavorieService {
  private favories:Favorie[] = [
     {
      categorie: 'china',
      numbre : '1',
      citation:""
    } 
  ];
  favorieSubject = new Subject<Favorie[]>();

  constructor() { 
    
  }

  emitFavorie(){
    this.favorieSubject.next(this.favories.slice());
  }

  addFavorie(favorie:Favorie){

    this.favories.push(favorie);
    this.emitFavorie();
  }

  deleteFavorie(favorie:Favorie){

    
      
    this.favories = this.favories.filter(item => (item.categorie != favorie.categorie && item.numbre != favorie.numbre));
    this.emitFavorie();

  }

  editFavorie(favorie:Favorie,citation:String){

      for (let i = 0 ;i < this.favories.length ; i++) {
        
        if(this.favories[i].categorie == favorie.categorie && this.favories[i].numbre == favorie.numbre){
          this.favories[i].citation = citation;
          
        }
        
      }
       
    
  }
    
}
