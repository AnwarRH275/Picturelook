import { FavorieService } from './../services/favorie.service';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.page.html',
  styleUrls: ['./picture.page.scss'],
})
export class PicturePage implements OnInit {

  lang : String;
  img : String;
  favorie : any = [{
    categorie : '',
    numbre : ''
  }];
  
  constructor(private modalController:ModalController,private navParams:NavParams,
    private favorieService:FavorieService,private toastCtrl:ToastController
    ) { }
  close() {
    this.modalController.dismiss();
    }
  ngOnInit() {
    this.lang = this.navParams.get('lang');
    this.img = this.navParams.get('img');
    this.favorie.categorie = this.lang;
    this.favorie.numbre = this.img;
  }
  addfavorie(){
      
     
    this.favorieService.addFavorie(this.favorie);
   this.showToast('Add to favorite');
 }
  
showToast(msg) {
  this.toastCtrl.create({
  message: msg,
  duration: 2000
  }).then(toast => toast.present());
  }
  
}
