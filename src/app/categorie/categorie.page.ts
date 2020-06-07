import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  Hero3:any = [
    { china: '中国',english:'China', name: 'china' },
    { china: '可爱的动物',english:'Cute animals',name: 'Cute animals' },
    { china: '性质',english:'Nature', name: 'Nature' },
    { china: '肖像',english:'Portrait', name: 'portrait' }
    
  ];
  lang: string = 'English';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  GoCategorie(item){
    console.log(item);
    if (item=='china') {
      this.router.navigateByUrl('china');
    }
      if (item=='Cute animals') {
        this.router.navigateByUrl('cute');
      }
      if (item=='Nature') {
        this.router.navigateByUrl('nature');
      }
      if (item=='portrait') {
        this.router.navigateByUrl('portrait');
      }
    
  }

}
