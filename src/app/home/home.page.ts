import { FavorieService } from './../services/favorie.service';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PicturePage } from '../picture/picture.page';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Favorie } from '../models/favorie.page';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  langs: string[] = ['English','Chinese'];
  lang: string = 'English';
  
  
  favories:Favorie[];
  favorieSubscription : Subscription;


  categorie:string[] = ['china','Cute animals','Nature','portrait'];
 
  listFavorie :any= []
  galleryType = 'Gallery';  
  list: any;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    slideShadows: true,
   };
  Hero3:any = [
    { china: '中国',english:'china', name: 'china' },
    { china: '可爱的动物',english:'Cute animals',name: 'Cute animals' },
    { china: '性质',english:'Nature', name: 'Nature' },
    { china: '肖像',english:'portrait', name: 'portrait' }
    
  ];
  constructor(public navCtrl: NavController, public modalController: ModalController,
     private translate: TranslateService,
    private router:Router,
    private toastCtrl: ToastController,
    private favorieService:FavorieService
    ) {

      this.translate.setDefaultLang('English');

    }
  ngOnInit(): void {
    this.favorieSubscription = this.favorieService.favorieSubject.subscribe(
      (favories:Favorie[]) =>{
        this.favories = favories;
      }
    );
    this.favorieService.emitFavorie();
  }
    changeLang(event) {
      this.translate.use(event.detail.value); 
      this.lang = event.detail.value;  
      
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
