import { Injectable } from '@angular/core';
import { Favorie } from '../models/favorie.page';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavorieService {
  private favories:Favorie[] = [
     {
      categorie: 'china',
      numbre : '1'
    } 
  ];
  favorieSubject = new Subject<Favorie[]>();

  constructor() { }

  emitFavorie(){
    this.favorieSubject.next(this.favories.slice());
  }

  addFavorie(favorie:Favorie){

    this.favories.push(favorie);
    this.emitFavorie();
  }
}
