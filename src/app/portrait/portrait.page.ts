import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PicturePage } from '../picture/picture.page';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.page.html',
  styleUrls: ['./portrait.page.scss'],
})
export class PortraitPage implements OnInit {
  defaultHref = '';
  constructor(public modalController:ModalController) { }

  async openPicture(img){
    console.log(img);
    const modal = await this.modalController.create({
    component: PicturePage, componentProps: {img:img,'lang':'portrait'} 
    });
    return await modal.present();
  }
  
  ngOnInit() {
  }

}
